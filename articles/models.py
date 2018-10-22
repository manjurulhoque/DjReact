from django.db import models


# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Article(models.Model):
    title = models.CharField(max_length=120)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='article')
    content = models.TextField()
    photo = models.ImageField(upload_to='photo', blank=True)

    def __str__(self):
        return self.title
