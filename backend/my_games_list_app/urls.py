from django.urls import path
from rest_framework.routers import DefaultRouter
from my_games_list_app.models import GamesList, Game
from my_games_list_app.views import GamesListViewSet, GameViewSet

r = DefaultRouter()

r.register(r"games-list", GamesListViewSet, basename="games-list")
r.register(r"game", GameViewSet, basename="game")

urlpatterns = r.urls