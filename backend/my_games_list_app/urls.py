from django.urls import path, include
from rest_framework.routers import DefaultRouter
from my_games_list_app.models import GamesList, Game
from my_games_list_app.views import GamesListViewSet, GameViewSet, UserViewSet
from rest_framework_jwt.views import obtain_jwt_token

r = DefaultRouter()

r.register(r"games-list", GamesListViewSet, basename="games-list")
r.register(r"games", GameViewSet, basename="game")
r.register(r"users", UserViewSet, basename="users")

urlpatterns = [
    path('', include(r.urls)),

    path('auth/', obtain_jwt_token)
]

