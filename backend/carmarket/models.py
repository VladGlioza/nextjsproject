from django.core.exceptions import ValidationError
from django.db import models
from accounts.models import Account
from .constants import *


class Vehicle(models.Model):
    vehicle_type = models.CharField(max_length=20, choices=VEHICLE_TYPE_CHOICES)
    brand = models.CharField(max_length=20, choices=BRAND_CHOICES)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    region = models.CharField(max_length=20, choices=REGION_CHOICES)
    body_type = models.CharField(max_length=20, choices=BODY_TYPE_CHOICES, blank=True, null=True)
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPE_CHOICES, blank=True, null=True)
    drive_type = models.CharField(max_length=20, choices=DRIVE_TYPE_CHOICES, blank=True, null=True)
    mileage = models.PositiveIntegerField(null=True, blank=True)
    gearbox_type = models.CharField(default='AUTO', max_length=20, choices=GEARBOX_TYPE_CHOICES, null=True, blank=True)
    engine_volume = models.FloatField(null=True, blank=True)
    power = models.PositiveIntegerField(null=True, blank=True)
    color = models.CharField(max_length=50)
    description = models.CharField(max_length=400, blank=True, null=True)

    def clean(self):
        if self.brand and self.model and self.model not in MODEL_CHOICES[self.brand]:
            raise ValidationError({'model': 'This model is not valid for the selected brand.'})

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"


class Sale(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    vehicle = models.OneToOneField(Vehicle, on_delete=models.CASCADE)
    price = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Sale: {self.vehicle} by {self.account.name} for {self.price}"


class VehicleImage(models.Model):
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='vehicle_images/')
    description = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Image for {self.sale.vehicle} by {self.sale.account.name}"