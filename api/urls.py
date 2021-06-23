

from django.urls import path, include, re_path
from .views import UserViewSet, FavoriteViewSet
from rest_framework.routers import DefaultRouter

#article_list, article_details, ArticleList, ArticleDetails

router = DefaultRouter()
router.register('favorites', FavoriteViewSet, basename='favorites')
router.register('users', UserViewSet)



urlpatterns = [
    path('api/', include(router.urls))
]
