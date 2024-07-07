from django.urls import path
from . import views

app_name='linker'
urlpatterns = [
    path('create/', views.short_linker, name="link-shorter"),
    path('resolve/<str:link>', views.resolve_short_links, name="resolve-short-links"),

]