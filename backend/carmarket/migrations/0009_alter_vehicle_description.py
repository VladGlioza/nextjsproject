# Generated by Django 5.0.6 on 2024-06-13 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carmarket', '0008_vehicle_vin_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='description',
            field=models.TextField(blank=True, max_length=400, null=True),
        ),
    ]
