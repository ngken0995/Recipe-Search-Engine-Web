from django.contrib import admin
from .models import Article, Favorite

# Register your models here.

#admin.site.register(Article)


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
    
@admin.register(Favorite)
class FavoriteModel(admin.ModelAdmin):
    list_filter = ('food_id', 'token_id')
    list_display = ('food_id', 'token_id')
