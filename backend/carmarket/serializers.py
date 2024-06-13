from rest_framework import serializers
from .models import Sale, Vehicle, VehicleImage
from accounts.serializers import AccountSerializer


class VehicleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleImage
        fields = ['image', 'description']


class VehicleSerializer(serializers.ModelSerializer):
    body_type = serializers.SerializerMethodField()
    gearbox_type = serializers.SerializerMethodField()
    drive_type = serializers.SerializerMethodField()

    def get_body_type(self, obj):
        return obj.get_body_type_display()

    def get_gearbox_type(self, obj):
        return obj.get_gearbox_type_display()

    def get_drive_type(self, obj):
        return obj.get_drive_type_display()

    class Meta:
        model = Vehicle
        fields = ['vehicle_type', 'brand', 'model', 'year', 'region', 'body_type', 'fuel_type', 'drive_type', 'mileage',
                  'gearbox_type', 'description', 'engine_volume', 'power', 'color', 'vin_code']


class VehicleSearchCartSerializer(serializers.ModelSerializer):
    fuel_type = serializers.SerializerMethodField()
    gearbox_type = serializers.SerializerMethodField()

    def get_fuel_type(self, obj):
        return obj.get_fuel_type_display()

    def get_gearbox_type(self, obj):
        return obj.get_gearbox_type_display()

    class Meta:
        model = Vehicle
        fields = ['brand', 'model', 'year', 'region', 'mileage', 'gearbox_type', 'description', 'engine_volume', 'fuel_type']


class VehicleCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ['brand', 'model', 'year', 'region', 'mileage']


class SaleSerializer(serializers.ModelSerializer):
    vehicle = VehicleSerializer()
    images = VehicleImageSerializer(many=True, read_only=True)
    account = AccountSerializer()

    class Meta:
        model = Sale
        fields = ['account', 'vehicle', 'price', 'created_at', 'updated_at', 'images']


class SaleCartSerializer(serializers.ModelSerializer):
    vehicle = VehicleCartSerializer()
    images = VehicleImageSerializer(many=True, read_only=True)

    class Meta:
        model = Sale
        fields = ['id', 'vehicle', 'price', 'images']


class SaleSearchCartSerializer(serializers.ModelSerializer):
    vehicle = VehicleSearchCartSerializer()
    images = VehicleImageSerializer(many=True, read_only=True)

    class Meta:
        model = Sale
        fields = ['id', 'vehicle', 'price', 'images']
