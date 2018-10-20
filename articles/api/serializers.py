from rest_framework import serializers

from articles.models import Article, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title')

class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'photo', 'category')