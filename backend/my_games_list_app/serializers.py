from rest_framework.serializers import ModelSerializer
from my_games_list_app.models import Game, GamesList

class GameSerializer(ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "title", "description", "platforms", "image_url", "url", "developer", "review_score", "date_released"]

class GamesListSerializer(ModelSerializer):
    class Meta:
        model = GamesList
        fields = ["id", "name", "games"]

    def to_representation(self, instance):
        self.fields["games"] = GameSerializer(many=True)
        return super().to_representation(instance)
