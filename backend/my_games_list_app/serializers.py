from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from my_games_list_app.models import Game, GamesList
from django.contrib.auth.models import User

class GameSerializer(ModelSerializer):
    class Meta:
        model = Game
        fields = ["id", "title", "description", "platforms", "image_url", "url", "developer", "review_score", "date_released", "user"]

class GamesListSerializer(ModelSerializer):
    class Meta:
        model = GamesList
        fields = ["id", "name", "games", "user"]

    def to_representation(self, instance):
        self.fields["games"] = GameSerializer(many=True)
        return super().to_representation(instance)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', "id"]

## Serializes new user sign ups that responds with the new user's information including a new token.
class UserSerializerWithToken(ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ['token', 'username', 'password']