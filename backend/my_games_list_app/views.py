from django.shortcuts import render
from my_games_list_app.models import Game, GamesList
from my_games_list_app.serializers import GameSerializer, GamesListSerializer
from rest_framework.viewsets import ModelViewSet

class GamesListViewSet(ModelViewSet):
    queryset = GamesList.objects.all()
    serializer_class = GamesListSerializer

class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
