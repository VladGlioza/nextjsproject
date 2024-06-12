# Generated by Django 5.0.6 on 2024-06-12 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carmarket', '0004_alter_sale_vehicle'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='gearbox_type',
            field=models.CharField(choices=[('AUTO', 'Автомат'), ('MANUAL', 'Механіка'), ('ROBOT', 'Робот'), ('VARIATOR', 'Варіатор'), ('TIPTRONIC', 'типтронік')], default='auto', max_length=20),
        ),
    ]
