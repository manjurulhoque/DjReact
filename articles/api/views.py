from rest_framework import viewsets
# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response

from articles.api.serializers import ArticleSerializer, CategorySerializer
from articles.models import Article, Category
from rest_framework.decorators import api_view


# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#
#
# class ArticleDestroyView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#

class CategoryListView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


@api_view(['GET'])
def articles_by_category(request, id):
    articles = Article.objects.filter(category_id=id)
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


class CategoryDetailsView(RetrieveAPIView):
    lookup_field = 'id'
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def get_queryset(self):
        pass


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
