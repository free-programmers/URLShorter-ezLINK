from django.urls import reverse
from django.http import HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from linker.models import Link, LinkToShortLink

@api_view(['POST'])
def short_linker(request):
    """create a shot alias link for a link if link already exists return its alis """
    link = request.POST.get("url", "").strip()
    if not link:
        return Response({"status": "failed", "message": "missing url param in post data"}, status=status.HTTP_400_BAD_REQUEST)

    result = Link.objects.select_related('short_link').filter(url_address=link).all()
    if result.exists():
        result = result.first()
        short_link = reverse('linker:resolve-short-links', args=[result.short_link.slug]) # path
        short_link = request.build_absolute_uri(short_link) # absolute url
        return Response({"status": "success", "message": "short link created successfully", "short-link": short_link},
                        status=status.HTTP_200_OK)

    new_link = Link()
    new_link.url_address = link
    short_link = new_link.generate_short_link()

    short_link = reverse('linker:resolve-short-links', args=[short_link.slug])  # path
    short_link = request.build_absolute_uri(short_link)  # absolute url
    return Response({"status": "success", "message": "short link created successfully", "short-link": short_link}, status=status.HTTP_200_OK)




@api_view(['GET'])
def show_resolve_short_links(request, link):
    """return an alias information for a link"""
    result = LinkToShortLink.objects.prefetch_related('link').filter(slug=link).all()
    if result.exists():
        result = result.first()
        return Response({"status": "success", "message": "short link resolved successfully,", "original-url": result.link.url_address}, status=status.HTTP_200_OK)

    return Response({"status": "failed", "message": "there is no short link by given url address"}, status=status.HTTP_404_NOT_FOUND)




@api_view(['GET'])
def resolve_short_links(request, link):
    """Redirect to an alias short link """
    result = LinkToShortLink.objects.prefetch_related('link').filter(slug=link).all()
    if result.exists():
        result = result.first()
        return HttpResponseRedirect(result.link.url_address)
    return Response({"status": "failed", "message": "there is no short link by given url address"}, status=status.HTTP_404_NOT_FOUND)

