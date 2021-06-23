from django.db import models


# Create your models here.

class Favorite(models.Model):
    food_id = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.food_id
