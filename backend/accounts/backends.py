from social_core.backends.google import GoogleOAuth2
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.utils import timezone
from .models import Account


class CustomGoogleOAuth2(GoogleOAuth2):

    def save_user(self, strategy, user, response, *args, **kwargs):
        user = super().save_user(strategy, user, response, *args, **kwargs)

        if not Account.objects.filter(user=user).exists():
            Account.objects.create(user=user, name=f"{user.first_name} {user.last_name}", role="user")

        return user
