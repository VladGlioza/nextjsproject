# Generated by Django 5.0.6 on 2024-06-12 01:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carmarket', '0003_alter_sale_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='vehicle',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='carmarket.vehicle'),
        ),
    ]
