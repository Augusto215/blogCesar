from django.shortcuts import render
from models import *
from usuarios.models import *

# Create your views here.
def usuario(request):
    nome = Usuario.objects.all()
    context = {
    'usuario':nome
    }
    return render(request, 'blog/cesar.html', context)