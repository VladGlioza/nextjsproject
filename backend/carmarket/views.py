from django.shortcuts import render
from .models import Sale
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import SaleSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def get_latest_sales(request):
    queryset = Sale.objects.order_by('-created_at')[:15]
    serializer = SaleSerializer(queryset, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
