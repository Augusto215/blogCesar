from django.contrib import admin
from .models import *


class PostAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'usuario', 'data')
    list_filter = ('data',)
    search_fields = ('titulo',)

    def video_present(self, obj):
        return bool(obj.video)

    video_present.boolean = True

# Esta é a classe proxy para os posts com vídeo
class PostWithVideoAdmin(PostAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(video__isnull=False)

    # ... você pode adicionar mais configurações ou métodos específicos aqui, se quiser

# Esta é a classe proxy para os posts sem vídeo
class PostWithoutVideoAdmin(PostAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(video__isnull=True)

    # ... você pode adicionar mais configurações ou métodos específicos aqui, se quiser

class PostProxyWithVideo(Post):
    class Meta:
        proxy = True
        verbose_name = 'Vídeo'
        verbose_name_plural = 'Vídeo'

class PostProxyWithoutVideo(Post):
    class Meta:
        proxy = True
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'



admin.site.register(PostProxyWithVideo, PostWithVideoAdmin)
admin.site.register(PostProxyWithoutVideo, PostWithoutVideoAdmin)
admin.site.register(Comment)
admin.site.register(Aswner)