from .models import Sale, Vehicle
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .filters import SaleVehicleFilter


@api_view(['GET'])
def get_latest_sales(request):
    queryset = Sale.objects.order_by('-created_at')[:15]
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
