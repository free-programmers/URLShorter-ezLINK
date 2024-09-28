from rest_framework.serializers import ModelSerializer
from linker.models import AliasLink


class AliasLinkSerializer(ModelSerializer):

    class Meta:
        model = AliasLink
        fields = ('slug', 'modified_time', 'created_time')


