from django.db import models
from ckeditor.fields import RichTextField
from django.utils.safestring import mark_safe


# Create your models here.
class Usuario(models.Model):
    userName = models.CharField(max_length=100, null=False, blank=False)
    cpf = models.CharField(max_length=12, null=True, blank=True)
    nomeUsuario =  models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='images/', blank=False, null=False, default="/images/unknown.png")
    usuarioEmail  =  models.CharField(max_length=100, null=False, blank=False)
    senha = models.CharField(max_length=100, null=False, blank=False)
    
    def __str__(self) -> str:
             return self.userName
    

class SobreMim(models.Model):
    titulo = models.CharField(max_length=100, blank=False, null=False)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    sobre_mim = RichTextField()
    
     #? Metodo para sempre ter apenas um Sobre mim
    def save(self, *args, **Kawargs):
        self.pk =1
        super(SobreMim, self).save(*args, **Kawargs)


    def delete(self, *args, **kwargs):
        pass
    
    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        if not created:
            return obj 
        return SobreMim(pk=1)
    


class Materias(models.Model):
    titulo = models.TextField(null=False, blank=False, default="teste")
    image = models.ImageField(upload_to='images/', null=False, blank=False)
    descricao = models.TextField(null=False, blank=False, default="teste")
    link = models.URLField(null=True, blank=True)
    popup = models.URLField(null=True, blank=True)
   
    
    def __str__(self) -> str:
        return self.titulo
    

class ArtigoAcademiaco(models.Model):
    titulo = models.TextField(null=False, blank=False)
    image = models.ImageField(upload_to='images/', null=False, blank=False)
    descricao =  models.TextField(null=False, blank=False)
    link = models.URLField(null=True, blank=True)
    popup = models.URLField(null=True, blank=True)
    
    def __str__(self) -> str:
        return self.titulo


class LivroPublicado(models.Model):
    titulo = models.TextField(null=False, blank=False)
    image = models.ImageField(upload_to='images/', null=False, blank=False)
    descricao =  models.TextField(null=False, blank=False)
    link = models.URLField(null=True, blank=True)
    popup = models.URLField(null=True, blank=True)
    
    def __str__(self) -> str:
        return self.titulo


class Contato(models.Model):
    instagram = models.URLField(null=True, blank=True)
    tiktok = models.URLField(null=True, blank=True)
    youtube = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)
    medium = models.URLField(null=True, blank=True)
    Linkedin = models.URLField(null=True, blank=True)
    academia_edu = models.URLField(null=True, blank=True)
    orcid = models.URLField(null=True, blank=True)
    Lattes = models.URLField(null=True, blank=True)
    gmail = models.URLField(null=True, blank=True)
    discord = models.URLField(null=True, blank=True)
    playstation = models.URLField(null=True, blank=True)
    
    def __str__(self) -> str:
        return f'links redes sociais'
    
     #? Metodo para sempre ter apenas um Sobre mim
    def save(self, *args, **Kawargs):
        self.pk =1
        super(Contato, self).save(*args, **Kawargs)


    def delete(self, *args, **kwargs):
        pass
    
    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        if not created:
            return obj 
        return Contato(pk=1)


