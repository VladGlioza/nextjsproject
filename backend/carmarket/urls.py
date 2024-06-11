from django.urls import path
from . import views

urlpatterns = [
    path('latest-sales/', views.get_latest_sales, name='latest-sales'),
]
