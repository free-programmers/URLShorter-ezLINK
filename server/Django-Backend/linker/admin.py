from django.contrib import admin
from django.contrib.admin import register

from linker.models import Link, LinkToShortLink


class LinkInlineAdmin(admin.TabularInline):
    model = LinkToShortLink
    extra = 3

@register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('url_address', 'created_time')
    inlines = LinkInlineAdmin
