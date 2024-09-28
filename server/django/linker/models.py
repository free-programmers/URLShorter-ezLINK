from django.db import models
from extensions.models import BaseModel
from linker.utils import generate_random_string

class Link(BaseModel):
    url_address = models.URLField(max_length=2048, unique=True, null=False)

    def generate_short_link(self):
        default_length = 3
        counter = 0
        total_round = 0

        while True:
            if total_round == 20:
                return None

            if counter == 5:
                counter = 0
                total_round += 1
                default_length += 1

            short_link_token = generate_random_string(length=default_length)
            result = AliasLink.objects.filter(slug=short_link_token).all()
            if result.exists():
                counter += 1
                continue
            else:
                self.save()
                obj = AliasLink.objects.create(slug=short_link_token, link=self)
                obj.save()
                return obj



class AliasLink(BaseModel):
    slug = models.SlugField(max_length=2048, unique=True, null=False)
    link = models.OneToOneField(Link, related_name='short_link', null=False, on_delete=models.CASCADE)


