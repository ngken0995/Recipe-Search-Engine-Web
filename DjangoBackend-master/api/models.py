from django.db import models


# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    def __str__(self):
        return self.title

class Favorite(models.Model):
    food_id = models.CharField(max_length=100)
    token_id = models.CharField(max_length=100)

    def __str__(self):
        return self.food_id
