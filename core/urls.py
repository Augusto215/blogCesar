from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    path('HZsC9>G5dC5FLcc4F=Ug}kq[)B~[nUNKs"-:JxqLQ"h9B2pqcX+SWm-.7]t/>@k~-wrdrp3$S-ocesarbeckpolitik/', admin.site.urls),
    path('', include("blog.urls", namespace="home")),
    path("unicorn/", include("django_unicorn.urls")),

    
    #serve para carregar imagens em modo DEBUG= False
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]

#? Arquivos estaticos
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)