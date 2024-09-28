from django.urls import path
from . import views

app_name = 'linker'

urlpatterns = [
    path('create/', views.create_alias_link, name="create-alias-link"),
    path('resolve/<str:link>/', views.resolve_alias_link, name="resolve-alias-link"),
    path('resolve/<str:link>/show/', views.show_alias_link_info, name="show-alias-link-info"),
]
