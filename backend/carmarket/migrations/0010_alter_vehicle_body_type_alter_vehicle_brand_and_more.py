# Generated by Django 5.0.6 on 2024-06-15 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carmarket', '0009_alter_vehicle_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicle',
            name='body_type',
            field=models.CharField(blank=True, choices=[('UNIVERSAL', 'Універсал'), ('SEDAN', 'Седан'), ('HATCHBACK', 'Хетчбек'), ('SUV', 'Позашляховик'), ('COUPE', 'Купе'), ('CONVERTIBLE', 'Кабріолет'), ('MINIVAN', 'Мінівен'), ('PICKUP', 'Пікап'), ('LIMOUSINE', 'Лімузин'), ('LIFTBACK', 'Ліфтбек'), ('ROADSTER', 'Родстер'), ('FASTBACK', 'Фастбек'), ('MICROVAN', 'Мікровен'), ('TRACTOR', 'Тягач'), ('BUS', 'Автобус')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='brand',
            field=models.CharField(choices=[('Audi', 'Audi'), ('BMW', 'BMW'), ('Chevrolet', 'Chevrolet'), ('Daewoo', 'Daewoo'), ('Ford', 'Ford'), ('Honda', 'Honda'), ('Kia', 'Kia'), ('Lexus', 'Lexus'), ('Mazda', 'Mazda'), ('Mercedes-Benz', 'Mercedes-Benz'), ('Mitsubishi', 'Mitsubishi'), ('Nissan', 'Nissan'), ('Toyota', 'Toyota'), ('Harley-Davidson', 'Harley-Davidson'), ('Yamaha', 'Yamaha'), ('Ducati', 'Ducati'), ('Volvo', 'Volvo'), ('Scania', 'Scania'), ('Man', 'Man'), ('Iveco', 'Iveco'), ('DAF', 'DAF'), ('Renault', 'Renault'), ('Neoplan', 'Neoplan'), ('Setra', 'Setra'), ('Hobby', 'Hobby'), ('Volkswagen', 'Volkswagen')], max_length=20),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='description',
            field=models.TextField(blank=True, max_length=2000, null=True),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='drive_type',
            field=models.CharField(blank=True, choices=[('AWD', 'Повний'), ('FWD', 'Передній'), ('RWD', 'Задній'), ('Chain', 'Ланцюг')], max_length=20, null=True),
        ),
    ]
