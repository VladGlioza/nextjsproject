from django_filters import rest_framework as filters
from .models import Vehicle, Sale


class SaleVehicleFilter(filters.FilterSet):
    year_gte = filters.NumberFilter(field_name='vehicle__year', lookup_expr='gte')
    year_lte = filters.NumberFilter(field_name='vehicle__year', lookup_expr='lte')
    region = filters.CharFilter(field_name='vehicle__region', lookup_expr='iexact')
    brand = filters.CharFilter(field_name='vehicle__brand', lookup_expr='iexact')
    car_type = filters.CharFilter(field_name='vehicle__vehicle_type', lookup_expr='iexact')

    class Meta:
        model = Sale
        fields = ['year_gte', 'year_lte', 'region', 'brand', 'car_type']
