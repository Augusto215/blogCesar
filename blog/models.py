from django.db import models
from ckeditor.fields import RichTextField
from django.utils.safestring import mark_safe
from PIL import Image
from usuarios.models import Usuario
from datetime import datetime
# Create your models here.

class Post(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete = models.CASCADE)
    titulo = models.CharField(max_length=255, null=False, blank=False)
    subtitulo = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    video = models.URLField(blank=True, null=True)
    audio = models.URLField(blank=True, null=True)
    font = models.CharField(max_length=100, blank=True, null=True)
    link_fonte = models.URLField(blank=True, null=True)
    link_popup = models.URLField(blank=True, null=True)
    post = RichTextField(blank=True, null=True)
    data = models.DateTimeField(default = datetime.now)
    
    def __str__(self) -> str:
        return self.titulo
    
    def get_ordered_comments(self):
        return self.comment_set.order_by("-data")
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.image:
            img = Image.open(self.image.path)

            # Defina a largura e altura desejadas para a imagem recortada
            width = 1080
            height = 1080

            # Obtém as dimensões atuais da imagem
            img_width, img_height = img.size

            # Calcula a proporção para o redimensionamento mantendo a imagem sempre alinhada
            if img_width > width:
                ratio = width / float(img_width)
                new_height = int(float(img_height) * ratio)
                img = img.resize((width, new_height), Image.ANTIALIAS)
            else:
                new_height = img_height

            # Verifica se a altura da imagem recortada é maior que a altura desejada
            if new_height > height:
                # Calcula a posição de recorte vertical para manter a imagem alinhada
                top = int((new_height - height) / 2)
                bottom = top + height

                # Recorta a imagem
                img = img.crop((0, top, width, bottom))

            # Salva a imagem recortada de volta no caminho original
            img.save(self.image.path)

class Comment(models.Model):
    author = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    content = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True)
    data = models.DateTimeField(default = datetime.now)
   

    def __str__(self) -> str:
        return self.content
    
    def get_ordered_aswner(self):
        return self.aswner_set.order_by("-data")
    
    def upvotes(self):
        return Vote.objects.filter(comment=self, value=Vote.UPVOTE).count()

    def downvotes(self):
        return Vote.objects.filter(comment=self, value=Vote.DOWNVOTE).count()
    

class Aswner(models.Model):
    author = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    comentario = models.ForeignKey(Comment, on_delete=models.CASCADE)
    content = models.TextField()
    data = models.DateTimeField(default = datetime.now)

    def __str__(self) -> str:
        return self.author.userName

class Vote(models.Model):
    UPVOTE = 1
    DOWNVOTE = -1

    VOTE_CHOICES = (
        (UPVOTE, 'Upvote'),
        (DOWNVOTE, 'Downvote'),
    )

    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    value = models.IntegerField(choices=VOTE_CHOICES)

    class Meta:
        unique_together = ('usuario', 'comment')

