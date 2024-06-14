from .models import Sale, Vehicle
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .filters import SaleVehicleFilter, VinCodeFilter


@api_view(['GET'])
def get_latest_sales(request):
    queryset = Sale.objects.order_by('-created_at')[:16]
    serializer = SaleCartSerializer(queryset, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


class VehicleSearchAPIView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSearchCartSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = SaleVehicleFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(vehicle__in=Vehicle.objects.all())


@api_view(['GET'])
def get_sale_by_id(request, sale_id):
    sale_obj = Sale.objects.filter(id=sale_id).first()
    if not sale_obj:
        return Response({'error': "Не існує такого оголошення"}, status.HTTP_404_NOT_FOUND)
    sale_serialzier = SaleSerializer(sale_obj)
    return Response(sale_serialzier.data, status.HTTP_200_OK)


class VehicleVinCodeSearchAPIView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleVinSearchSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = VinCodeFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(vehicle__in=Vehicle.objects.all())