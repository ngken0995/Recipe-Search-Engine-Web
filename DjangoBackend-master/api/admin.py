from django.contrib import admin
from .models import Favorite

# Register your models here.

#admin.site.register(Article)

@admin.register(Favorite)
class FavoriteModel(admin.ModelAdmin):
    list_filter = ('food_id', 'user')
    list_display = ('food_id', 'user')
