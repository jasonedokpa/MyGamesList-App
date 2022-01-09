from rest_framework.serializers import ModelSerializer
from my_games_list_app.models import Game, GamesList

class GamesListSerializer(ModelSerializer):
    class Meta:
        model = GamesList
        fields = ["id", "name"]

class GameSerializer(ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "title", "description", "platforms", "image_url", "url", "developer", "review_score", "date_released", "favorite"]