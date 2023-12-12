from django.shortcuts import render,get_object_or_404,redirect
from usuarios.models import *
from django.core.paginator import Paginator
from .models import *
from django.http import HttpResponse
from django.contrib.auth.models import User
from .utils import email_html, password_is_valid, Alterar_senha
from hashlib import sha256, sha1
from django.contrib.messages import constants
from django.contrib import messages
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.shortcuts import render, get_object_or_404
from django.views.decorators.http import require_POST
from django.http import JsonResponse
import traceback


# Create your views here.
from collections import defaultdict
def home(request,page=1):
    post_list = Post.objects.exclude(video__isnull=False).exclude(video__exact='').order_by("-data")
    paginator = Paginator(post_list, 10)  # Mostra 5 posts por página
    page_obj = paginator.get_page(page)

    redes_sociais = Contato.objects.all()
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])

    context = {
        'page_obj':page_obj,
        'usuario': usuario,
        'redes_sociais': redes_sociais
    }

    return render(request, 'blog/cesar.html', context)

def video_page(request, page=1):
    video_posts = Post.objects.exclude(video__isnull=True).exclude(video__exact='').order_by("-data")
    paginator = Paginator(video_posts, 10)  
    page_obj = paginator.get_page(page)

    redes_sociais = Contato.objects.all()
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])


    context = {
        'page_obj': page_obj,
        'usuario': usuario,
        'redes_sociais': redes_sociais
    }

    return render(request, 'blog/video_page.html', context)


def post_comment(request):
    if request.method == 'POST':
        post_id = request.POST.get('post_id')
        content = request.POST.get('content')
        post = Post.objects.get(id=post_id)
        comment = Comment.objects.create(author=request.user, content=content, post=post)
        
        # Agora, em vez de apenas retornar o conteúdo do comentário, nós retornamos o autor e o conteúdo
        data = {
            'author': comment.author.username,
            'content': comment.content
        }
        
        return JsonResponse(data)
    

    
@require_POST
def vote_comment(request):
    user = request.user
    comment_id = request.POST.get('comment_id')
    vote_value = request.POST.get('vote_value')

    comment = get_object_or_404(Comment, id=comment_id)

    # Verificar se o usuário já votou neste comentário
    try:
        existing_vote = Vote.objects.get(user=user, comment=comment)
        if existing_vote.value == vote_value:
            existing_vote.delete()  # Se o usuário já votou com o mesmo valor, então o voto é removido (como desfazer o voto)
        else:
            existing_vote.value = vote_value  # Caso contrário, o valor do voto é atualizado
            existing_vote.save()
    except Vote.DoesNotExist:
        # Se o voto não existe, criamos um novo
        Vote.objects.create(user=user, comment=comment, value=vote_value)

    # Retornar a contagem de votos atualizada
    data = {
        'total_votes': comment.total_votes(),
        'upvotes': comment.upvotes(),
        'downvotes': comment.downvotes()
    }
    return JsonResponse(data)
        

def artigos(request, page=1):
    redes_sociais = Contato.objects.all()
    artigos = Materias.objects.all()
    paginator = Paginator(artigos, 6)
    page_obj = paginator.get_page(page)
   
    
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])

    
    context = {
        'page_obj':page_obj,
        'redes_sociais':redes_sociais,
        'usuario':usuario
    }
    
    return render(request, 'blog/artigos.html', context)


def artisgosAcademicos(request, page=1):
    redes_sociais = Contato.objects.all()
    artigos = ArtigoAcademiaco.objects.all()
    paginator = Paginator(artigos, 6)
    page_obj = paginator.get_page(page)
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])

    
    context = {
        'page_obj':page_obj,
        'redes_sociais':redes_sociais,
        'usuario':usuario
    }
    
    return render(request, 'blog/artisgosAcademicos.html', context)



def livroPublicado(request, page=1):
    redes_sociais = Contato.objects.all()
    livros = LivroPublicado.objects.all()
    paginator = Paginator(livros, 6)
    page_obj = paginator.get_page(page)
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])

    
    context = {
        'page_obj':page_obj,
        'redes_sociais':redes_sociais,
        'usuario':usuario
    }
    
    return render(request, 'blog/livroPublicado.html', context)



def contato(request):
    redes_sociais = Contato.objects.all()
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])
    context = {'usuario':usuario,
               'redes_sociais':redes_sociais}

    return render(request, 'blog/contato.html', context)


def sobremim(request):
    sobre_mim = SobreMim.objects.all()
    redes_sociais = Contato.objects.all()
    usuario = None
    if 'usuario' in request.session:
        usuario = Usuario.objects.get(id=request.session['usuario'])
    
    context = {
        'sobre_mim':sobre_mim,
        'redes_sociais':redes_sociais,
        'usuario':usuario
    }
    
    return render(request, 'blog/sobremim.html', context)
    
    return render(request, 'blog/sobremim.html', context)

def get_aswner(request, comment_id):
    comment = get_object_or_404(Comment, id=comment_id)
    awsner = comment.get_ordered_aswner()
    return render(request, 'blog/cesar.html', {'respostas':awsner})

def get_comments(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    comments = post.get_ordered_comments()  # Usamos a função que já está definida no seu modelo Post
    return render(request, 'comments.html', {'comments': comments})

def editarPerfil(request):
    return render(request, 'blog/cesar.html')


def cadastro(request):
    if request.method == "GET":
        return render(request, 'blog/login.html')
    elif request.method == "POST":
        nome = request.POST.get('name')
        email = request.POST.get('email')
        cpf = request.POST.get('cpf')
        usuario = request.POST.get('user')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')        
        
    

        if not password_is_valid(request, senha, confirmar_senha, nome, usuario, email, cpf):
            return redirect('blog:home')
        
              
        try:
            senha = make_password(senha)

            user = Usuario.objects.create(nomeUsuario = nome,
                                            userName = usuario,
                                            usuarioEmail = email,
                                            senha=senha,
                                            cpf=cpf
            )
            user.save()

            messages.add_message(request, constants.SUCCESS, 'Usuario cadastrado com sucesso!')
            return redirect('blog:home')
        except Exception as e:
            print(f"Exception type: {type(e)}")
            print(f"Exception message: {e}")
            print("Traceback:")
            print(traceback.format_exc())
            messages.add_message(request, constants.ERROR, 'Erro interno do sistema solicite ajuda ao suporte!')
            return redirect('blog:home')

        
def validar_login(request):
    # Verifique se a solicitação é um método POST primeiro, caso contrário, o email e senha podem ser None
    if request.method == "POST":
        email = request.POST.get('email')
        senha = request.POST.get('senha')
    else:
        messages.add_message(request, constants.ERROR, 'A solicitação de login não foi realizada corretamente!')
        return redirect('blog:home')

    try:
        usuario = Usuario.objects.get(usuarioEmail=email)
    except Usuario.DoesNotExist:
        messages.add_message(request, constants.ERROR, 'Email não encontrado!')
        return redirect('blog:home')

    if check_password(senha, usuario.senha):
        messages.add_message(request, constants.SUCCESS, 'Usuário logado com sucesso!')
        request.session['usuario'] = usuario.id
        return redirect('blog:home')
    else:
        messages.add_message(request, constants.ERROR, 'Email ou senha inválidos!')
        return redirect('blog:home')

def sair(request):
    if 'usuario' in request.session:  # Verifique se o usuário está na sessão antes de sair
        del request.session['usuario']
    logout(request)
    messages.add_message(request, constants.SUCCESS, 'Você encerrou a sessão!')
    return redirect('blog:home')
from PIL import Image
from django.core.files import File
from io import BytesIO

def update_profile(request):
    if request.method == "POST":
        usuario_id = request.session.get('usuario')
        usuario = request.POST.get('atualizarNome')
        nome = request.POST.get('atualizarUser')
        email = request.POST.get('atualizarEmail')
        senha = request.POST.get('atualizarSenha')
        imagem = request.FILES.get('image')
        confirmar_senha = request.POST.get('confirmar_senha')

        # Get the current user
        user = Usuario.objects.get(id=usuario_id)

        # Check if userName, email or CPF already exists
        if Usuario.objects.exclude(id=user.id).filter(userName=usuario).exists():
            messages.error(request, "Nome de usuário já existe.")
            return redirect('blog:home')
        if Usuario.objects.exclude(id=user.id).filter(usuarioEmail=email).exists():
            messages.error(request, "E-mail já está em uso.")
            return redirect('blog:home')
        
        # Update the user fields
        if usuario:
            user.userName = usuario
       
        if nome:
            user.nomeUsuario = nome
        if email:
            user.usuarioEmail = email

        # Checking password conditions
        if senha == '' and confirmar_senha == '':
            pass
        elif senha == '' and confirmar_senha != '':
            messages.error(request, "Por favor, preencha o campo da senha.")
            return redirect('blog:home')
        elif senha != '' and confirmar_senha == '':
            messages.error(request, "Por favor, preencha o campo de confirmação da senha.")
            return redirect('blog:home')
        elif senha != confirmar_senha:
            messages.error(request, "Senhas não coincidem")
            return redirect('blog:home')
        if senha and senha != '' and senha == confirmar_senha and senha != user.senha:
            user.senha = make_password(senha)

        if imagem:
            user.image = imagem

        # Save the updated user
        user.save()

        messages.success(request, "Perfil atualizado com sucesso!")

        return redirect('blog:home')

    else:
        messages.error(request, 'erro')
        return render(request, 'blog/cesar.html')



        
def enviar_comentario(request, post_id):  # recebendo o id do post na URL
    if 'usuario' not in request.session:
        messages.add_message(request, constants.ERROR, 'Você precisa estar logado para comentar!')
        return redirect('login')

    if request.method == "GET":
        return render(request, 'blog/cesar.html')
    elif request.method == "POST":
        usuario_id = request.session.get('usuario')
        try:
            usuario = Usuario.objects.get(id=usuario_id)
            post = Post.objects.get(id=post_id)  # obtenha o post que está sendo comentado
        except (Usuario.DoesNotExist, Post.DoesNotExist):
            messages.add_message(request, constants.ERROR, 'Usuário ou Post não encontrado!')
            return redirect('blog:home')

        comentario_texto = request.POST.get('comentario')
        if comentario_texto:  
            try:
                comentario = Comment.objects.create(author=usuario, content=comentario_texto, post=post)  # Guardamos o comentário criado em uma variável
                return JsonResponse({'commentId': comentario.id,'content': comentario.content, 'authorComentario':comentario.author.userName,'authorImage':comentario.author.image.url, 'data':comentario.data}) # Aqui retornamos o conteúdo do comentário criado
            except Exception as e:
                print(e)
                messages.add_message(request, constants.ERROR, 'Erro interno do sistema, solicite ajuda ao suporte!')
                return redirect('blog:home')
        else:
            messages.add_message(request, constants.ERROR, 'Texto do comentário não pode estar vazio!')
            return redirect('blog:home')

    
def enviar_resposta(request, comment_id):  # recebendo o id do comentário na URL
    if 'usuario' not in request.session:
        messages.error(request, 'Você precisa estar logado para responder!')
        return redirect('login')

    if request.method == "POST":
        usuario_id = request.session.get('usuario')
        try:
            usuario = Usuario.objects.get(id=usuario_id)
            comentario_parent = Comment.objects.get(id=comment_id)  # obtenha o comentário que está sendo respondido
        except (Usuario.DoesNotExist, Comment.DoesNotExist):
            messages.error(request, 'Usuário ou Comentário não encontrado!')
            return redirect('blog:home')

        resposta_texto = request.POST.get('resposta')
        if resposta_texto:  
            try:
                resposta = Aswner.objects.create(author=usuario, content=resposta_texto, comentario=comentario_parent)  # Guardamos a resposta criada em uma variável
                return JsonResponse({'content': resposta.content, 'authorResposta': resposta.author.userName, 'authorImage': resposta.author.image.url if resposta.author.image else None, 'data': resposta.data.strftime("%d/%m/%Y")}) # Aqui retornamos o conteúdo da resposta criada
            except Exception as e:
                print(e)
                messages.error(request, 'Erro interno do sistema, solicite ajuda ao suporte!')
                return redirect('blog:home')
        else:
            messages.error(request, 'Texto da resposta não pode estar vazio!')
            return redirect('blog:home')
    else:
        return redirect('blog:home')
