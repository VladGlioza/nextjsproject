from django.db import models
from .constants import ROLE_CHOICES


class Account(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=100, blank=False, null=False)
    role = models.CharField(default="user", max_length=100, choices=ROLE_CHOICES, blank=False, null=False)
    phone_number = models.CharField(blank=True, null=True)

    def __str__(self):
        return f"{self.name}"