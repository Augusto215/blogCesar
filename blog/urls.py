from django.contrib import admin
from django.urls import path, include
from .views import *


app_name = 'blog'

urlpatterns = [
    path('', home, name='home'),
    path('home2/page/<int:page>', home, name='home_post'),
    path('sobremim/', sobremim, name='sobre-mim'),
    path('contato/', contato, name='contato'),
    path('artigos-academicos/', artisgosAcademicos, name='artigos-academicos_default'),
    path('artigos-academicos/page/<int:page>/', artisgosAcademicos, name='artigos-academicos'),
    path('materias/', artigos, name='materias_default'),
    path('materias/page/<int:page>/', artigos, name='materias'),
    path('cadastro/', cadastro, name = 'cadastro'),
    path('login/', validar_login, name ='validar_login'),
    path('logout/', sair, name='sair'),
    path('formComentario/<int:post_id>/', enviar_comentario, name='enviar_comentario'),
    path('get-comments/<int:post_id>/', get_comments, name='get_comments'),
    path('vote_comment/', vote_comment, name='vote_comment'),
    path('editarPerfil/', editarPerfil, name='editarPerfil'),
    path('resposta/<int:comment_id>/', enviar_resposta, name='enviar_resposta'),
    path('atualizar-perfil/', update_profile, name='update_profile'),
    path('videos', video_page, name='video_page'),
    path('video_page/<int:page>/', video_page, name='video_page_post'),
    path('livroPublicado/', livroPublicado, name='livro_publicado'  ),
    path('livroPublicado/<int:page>/', livroPublicado, name='livro_publicado_post'),

    
   


]
