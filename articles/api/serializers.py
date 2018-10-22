from rest_framework import serializers

from articles.models import Article, Category


def required(value):
    if value is None:
        raise serializers.ValidationError('This field is required')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'article')


class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'photo', 'category')
