from django.urls import path
from . import views
from .views import VehicleSearchAPIView

urlpatterns = [
    path('latest-sales/', views.get_latest_sales, name='latest-sales'),
    path('search/', VehicleSearchAPIView.as_view(), name='search-vehicles'),
    path('get-sale/<int:sale_id>/', views.get_sale_by_id, name='get-sale-by-id'),
]
