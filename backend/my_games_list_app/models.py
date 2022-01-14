from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Platform(models.Model):
    name = models.CharField(max_length=64)

class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="games")
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=4096)
    platforms = models.CharField(max_length=64)
    image_url = models.CharField(max_length=128)
    url = models.CharField(max_length=256)
    developer = models.CharField(max_length=64)
    review_score = models.IntegerField(blank = True)
    date_released = models.DateField()

    def __str__(self):
        return (self.title)

class GamesList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="games_lists")
    name = models.CharField(max_length=64)
    games=models.ManyToManyField(Game, related_name="games", blank = True)
    
    def __str__(self):  
        return (self.name)

