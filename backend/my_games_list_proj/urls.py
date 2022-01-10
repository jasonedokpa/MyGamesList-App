from django.contrib import admin
from django.urls import path, re_path, include


from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("my_games_list_app.urls")),
    path('accounts/', include('allauth.urls')),
    path('auth/', include('rest_authtoken.urls')),
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login')
    
]
