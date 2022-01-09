from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class GamesList(models.Model):
    name = models.CharField(max_length=64)

class Platform(models.Model):
    name = models.CharField(max_length=64)

class Game(models.Model):
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=64)
    platforms = models.CharField(max_length=64)
    image_url = models.CharField(max_length=64)
    url = models.CharField(max_length=64)
    developer = models.CharField(max_length=64)
    review_score = models.IntegerField()
    date_released = models.DateField()
    favorite = models.BooleanField()

    def __str__(self):
        return (self.title)



