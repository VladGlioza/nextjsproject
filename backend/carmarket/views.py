from .models import Sale, Vehicle
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .filters import SaleVehicleFilter, VinCodeFilter
from .constants import *

@api_view(['GET'])
def get_latest_sales(request):
    queryset = Sale.objects.filter(is_active=True).order_by('-created_at')[:16]
    serializer = SaleCartSerializer(queryset, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


class VehicleSearchAPIView(generics.ListAPIView):
    queryset = Sale.objects.filter(is_active=True)
    serializer_class = SaleSearchCartSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = SaleVehicleFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(vehicle__in=Vehicle.objects.all())


@api_view(['GET'])
@permission_classes([AllowAny])
def get_sale_by_id(request, sale_id):
    user = request.user

    sale_obj = Sale.objects.filter(id=sale_id).first()
    if not sale_obj:
        return Response({'error': "Не існує такого оголошення"}, status.HTTP_404_NOT_FOUND)
    sale_serialzier = SaleSerializer(sale_obj)

    is_active_sale = True
    is_user_sale = False
    if not user.is_anonymous:
        account = user.account
        is_user_sale = sale_obj.account == account
        is_active_sale = sale_obj.is_active

    return Response({
        "is_user_sale": is_user_sale,
        "is_active": is_active_sale,
        "data": sale_serialzier.data
    }, status.HTTP_200_OK)


class VehicleVinCodeSearchAPIView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleVinSearchSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = VinCodeFilter

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(vehicle__in=Vehicle.objects.all())


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_add_sale_data(request):
    account = request.user.account

    return Response({"is_verified_phone": bool(account.phone_number)}, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_new_sale(request):
    account = request.user.account

    if not account.phone_number:
        return Response({'error': "Додайте номер мобільного"}, status.HTTP_400_BAD_REQUEST)

    brand = request.data.get('brand')
    model = request.data.get('model')
    v_type = request.data.get('v_type')
    region = request.data.get('region')
    year = request.data.get('year')
    color = request.data.get('year')
    description = request.data.get('vehicle_description')
    price = request.data.get('price')
    vin_code = request.data.get('vin_code')

    brand_choices_lower = {brand.lower() for brand, _ in BRAND_CHOICES}
    vehicle_type_choices_lower = {v_type.lower() for v_type, _ in VEHICLE_TYPE_CHOICES}
    region_choices_lower = {region[0].lower() for region in REGION_CHOICES}
    print(brand_choices_lower)

    if brand.lower() not in brand_choices_lower:
        return Response({'error': "Неможливо додати авто цієї марки"}, status.HTTP_400_BAD_REQUEST)
    if v_type.lower() not in vehicle_type_choices_lower:
        return Response({'error': "Не існує такого типу транспорту"}, status.HTTP_400_BAD_REQUEST)
    if region.lower() not in region_choices_lower:
        return Response({'error': "Не існує такої області"}, status.HTTP_400_BAD_REQUEST)
    if year < 1900 or year > 2024:
        return Response({'error': "Рік випуску авто має бути в межах від 1900 до 2024"}, status.HTTP_400_BAD_REQUEST)
    if not color:
        return Response({'error': "Колір транспорту має бути вказаним"}, status.HTTP_400_BAD_REQUEST)
    if len(str(description)) > 2000:
        return Response({'error': "В описі має бути до 2000 символів"}, status.HTTP_400_BAD_REQUEST)
    if price < 10 or price > 5000000:
        return Response({'error': "Невірно вказана ціна"}, status.HTTP_400_BAD_REQUEST)

    brand_dict = {brand.lower(): brand for brand, _ in BRAND_CHOICES}
    vehicle_type_dict = {v_type.lower(): v_type for v_type, _ in VEHICLE_TYPE_CHOICES}
    original_brand = brand_dict.get(brand.lower())
    original_v_type = vehicle_type_dict.get(v_type.lower())

    vehicle_obj = Vehicle.objects.create(
        vehicle_type=original_v_type,
        brand=original_brand,
        model=model,
        year=year,
        region=region,
        color=color,
        description=description,
        vin_code=vin_code,
    )
    sale_obj = Sale.objects.create(
        account=account,
        vehicle=vehicle_obj,
        price=price,
        is_active=False,
    )

    return Response({"id": sale_obj.id}, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_sale(request, sale_id):
    account = request.user.account

    sale_obj = Sale.objects.filter(id=sale_id, account=account).first()
    if not sale_obj:
        return Response({'error': "У вас немає оголошення з таким id"}, status.HTTP_400_BAD_REQUEST)

    sale_obj.vehicle.delete()

    return Response({"success": "Видалили оголошення"}, status.HTTP_200_OK)
