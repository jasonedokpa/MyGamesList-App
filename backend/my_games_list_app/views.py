from django.shortcuts import render
from my_games_list_app.models import Game, GamesList, User
from my_games_list_app.serializers import GameSerializer, GamesListSerializer, UserSerializer
from rest_framework.viewsets import ModelViewSet

class GamesListViewSet(ModelViewSet):
    #queryset = GamesList.objects.all()
    serializer_class = GamesListSerializer

    def get_queryset(self):
        return GamesList.objects.filter(user=self.request.user)

class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
