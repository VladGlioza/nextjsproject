from rest_framework import serializers
from .models import Sale, Vehicle, VehicleImage


class VehicleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleImage
        fields = ['image', 'description']


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['vehicle_type', 'brand', 'model', 'year', 'region', 'body_type', 'fuel_type', 'drive_type', 'mileage',
                  'engine_volume', 'power', 'color']


class VehicleSearchCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['brand', 'model', 'year', 'region', 'mileage', 'gearbox_type', 'description']


class VehicleCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['brand', 'model', 'year', 'region', 'mileage']


class SaleSerializer(serializers.ModelSerializer):
    vehicle = VehicleSerializer()
    images = VehicleImageSerializer(many=True, read_only=True)
    user = serializers.StringRelatedField()

    class Meta:
        model = Sale
        fields = ['user', 'vehicle', 'price', 'created_at', 'updated_at', 'images']


class SaleCartSerializer(serializers.ModelSerializer):
    vehicle = VehicleCartSerializer()
    images = VehicleImageSerializer(many=True, read_only=True)

    class Meta:
        model = Sale
        fields = ['id', 'vehicle', 'price', 'images']
