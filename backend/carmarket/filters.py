from django_filters import rest_framework as filters
from .models import Vehicle


class VehicleFilter(filters.FilterSet):
    year_gte = filters.NumberFilter(field_name='year', lookup_expr='gte')
    year_lte = filters.NumberFilter(field_name='year', lookup_expr='lte')
    region = filters.CharFilter(field_name='region', lookup_expr='iexact')
    brand = filters.CharFilter(field_name='brand', lookup_expr='iexact')
    car_type = filters.CharFilter(field_name='vehicle_type', lookup_expr='iexact')

    class Meta:
        model = Vehicle
        fields = ['year_gte', 'year_lte', 'region', 'brand', 'car_type']
