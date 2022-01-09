from django.contrib import admin
from django.urls import path, re_path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("my_games_list_app.urls"))
    #re_path(r'^rest-auth/', include('rest_auth.urls')),
]
