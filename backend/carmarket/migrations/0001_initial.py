# Generated by Django 5.0.6 on 2024-06-11 17:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle_type', models.CharField(choices=[('CAR', 'Легкові'), ('MOTORCYCLE', 'Мото'), ('TRUCK', 'Вантажівки'), ('BUS', 'Автобуси'), ('MOTORHOME', 'Автобудинки')], max_length=20)),
                ('brand', models.CharField(choices=[('Audi', 'Audi'), ('BMW', 'BMW'), ('Chevrolet', 'Chevrolet'), ('Ford', 'Ford'), ('Honda', 'Honda'), ('Kia', 'Kia'), ('Lexus', 'Lexus'), ('Mazda', 'Mazda'), ('Mercedes-Benz', 'Mercedes-Benz'), ('Mitsubishi', 'Mitsubishi'), ('Nissan', 'Nissan'), ('Toyota', 'Toyota')], max_length=20)),
                ('model', models.CharField(max_length=50)),
                ('year', models.PositiveIntegerField()),
                ('region', models.CharField(choices=[('ZH', 'Житомирський'), ('VI', 'Вінницький'), ('KY', 'Київський')], max_length=20)),
                ('body_type', models.CharField(choices=[('UNIVERSAL', 'Універсал'), ('SEDAN', 'Седан'), ('HATCHBACK', 'Хетчбек'), ('SUV', 'Позашляховик'), ('COUPE', 'Купе'), ('CONVERTIBLE', 'Кабріолет'), ('MINIVAN', 'Мінівен'), ('PICKUP', 'Пікап'), ('LIMOUSINE', 'Лімузин'), ('LIFTBACK', 'Ліфтбек'), ('ROADSTER', 'Родстер'), ('FASTBACK', 'Фастбек'), ('MICROVAN', 'Мікровен')], max_length=20)),
                ('fuel_type', models.CharField(choices=[('GASOLINE', 'Бензин'), ('GAS', 'Газ'), ('LPG', 'Газ пропан-бутан'), ('CNG', 'Газ метан'), ('HYBRID_HEV', 'Гібрид (HEV)'), ('HYBRID_PHEV', 'Гібрид (PHEV)'), ('DIESEL', 'Дизель'), ('ELECTRIC', 'Електро')], max_length=20)),
                ('drive_type', models.CharField(choices=[('AWD', 'Повний'), ('FWD', 'Передній'), ('RWD', 'Задній')], max_length=20)),
                ('mileage', models.PositiveIntegerField()),
                ('engine_volume', models.FloatField()),
                ('power', models.PositiveIntegerField()),
                ('color', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='carmarket.vehicle')),
            ],
        ),
    ]
