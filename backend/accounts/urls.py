from django.urls import path, include
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('google-auth/', views.google_auth, kwargs={'backend': 'google-oauth2'}, name='google-auth'),
    path('oauth/', include('social_django.urls', namespace='social')),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('get-profile/', views.get_profile, name='get-profile-data'),
    path('edit-number/<str:phone_number>/', views.edit_number, name='edit-number'),

]
