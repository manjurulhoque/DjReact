from django.urls import path

# from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDestroyView
#
# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view()),
#     path('<pk>/delete/', ArticleDestroyView.as_view()),
# ]

from rest_framework.routers import DefaultRouter

from articles.api.views import ArticleViewSet, CategoryListView, CategoryDetailsView, articles_by_category

router = DefaultRouter()
router.register(r'', ArticleViewSet, base_name='articles')
urlpatterns = [
    path('categories', CategoryListView.as_view()),
    path('categories/<int:id>', articles_by_category),
    # path('categories/<int:id>', CategoryDetailsView.as_view()),
]
urlpatterns += router.urls
