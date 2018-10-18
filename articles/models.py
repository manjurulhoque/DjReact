from django.db import models


# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    photo = models.ImageField(upload_to='photo', blank=True)

    def __str__(self):
        return self.title
