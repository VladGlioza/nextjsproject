VEHICLE_TYPE_CHOICES = [
    ('CAR', 'Легкові'),
    ('MOTORCYCLE', 'Мото'),
    ('TRUCK', 'Вантажівки'),
    ('BUS', 'Автобуси'),
    ('MOTORHOME', 'Автобудинки'),
]

BODY_TYPE_CHOICES = [
    ('UNIVERSAL', 'Універсал'),
    ('SEDAN', 'Седан'),
    ('HATCHBACK', 'Хетчбек'),
    ('SUV', 'Позашляховик'),
    ('COUPE', 'Купе'),
    ('CONVERTIBLE', 'Кабріолет'),
    ('MINIVAN', 'Мінівен'),
    ('PICKUP', 'Пікап'),
    ('LIMOUSINE', 'Лімузин'),
    ('LIFTBACK', 'Ліфтбек'),
    ('ROADSTER', 'Родстер'),
    ('FASTBACK', 'Фастбек'),
    ('MICROVAN', 'Мікровен'),
    ('TRACTOR', 'Тягач'),
    ('BUS', 'Автобус'),
]

FUEL_TYPE_CHOICES = [
    ('GASOLINE', 'Бензин'),
    ('GAS', 'Газ'),
    ('LPG', 'Газ пропан-бутан'),
    ('CNG', 'Газ метан'),
    ('HYBRID_HEV', 'Гібрид (HEV)'),
    ('HYBRID_PHEV', 'Гібрид (PHEV)'),
    ('DIESEL', 'Дизель'),
    ('ELECTRIC', 'Електро'),
]

DRIVE_TYPE_CHOICES = [
    ('AWD', 'Повний'),
    ('FWD', 'Передній'),
    ('RWD', 'Задній'),
    ('Chain', 'Ланцюг'),
]

REGION_CHOICES = [
    ('ZH', 'Житомирська'),
    ('VI', 'Вінницька'),
    ('KY', 'Київська'),
    ('VN', 'Волинська'),
    ('DN', 'Дніпропетровська'),
    ('DP', 'Донецька'),
    ('IV', 'Івано-Франківська'),
    ('KH', 'Харківська'),
    ('KR', 'Херсонська'),
    ('KM', 'Хмельницька'),
    ('CK', 'Черкаська'),
    ('CH', 'Чернігівська'),
    ('CV', 'Чернівецька'),
    ('KK', 'Кіровоградська'),
    ('KV', 'Київська'),
    ('LH', 'Луганська'),
    ('LV', 'Львівська'),
    ('MK', 'Миколаївська'),
    ('OD', 'Одеська'),
    ('PL', 'Полтавська'),
    ('RV', 'Рівненська'),
    ('SC', 'Сумська'),
    ('TP', 'Тернопільська'),
    ('ZC', 'Закарпатська'),
    ('ZP', 'Запорізька')
]

BRAND_CHOICES = [
    # Cars
    ('Audi', 'Audi'),
    ('BMW', 'BMW'),
    ('Chevrolet', 'Chevrolet'),
    ('Daewoo', 'Daewoo'),
    ('Ford', 'Ford'),
    ('Honda', 'Honda'),
    ('Kia', 'Kia'),
    ('Lexus', 'Lexus'),
    ('Mazda', 'Mazda'),
    ('Mercedes-Benz', 'Mercedes-Benz'),
    ('Mitsubishi', 'Mitsubishi'),
    ('Nissan', 'Nissan'),
    ('Toyota', 'Toyota'),

    # Motorcycles
    ('Harley-Davidson', 'Harley-Davidson'),
    ('Yamaha', 'Yamaha'),
    ('Ducati', 'Ducati'),

    # Trucks
    ('Volvo', 'Volvo'),
    ('Scania', 'Scania'),
    ('Man', 'Man'),
    ('Iveco', 'Iveco'),
    ('DAF', 'DAF'),

    # Buses
    ('Renault', 'Renault'),
    ('Neoplan', 'Neoplan'),
    ('Setra', 'Setra'),

    # Motorhomes
    ('Hobby', 'Hobby'),
    ('Volkswagen', 'Volkswagen'),
]

MODEL_CHOICES = {
    # Cars
    'Audi': ['A3', 'A4', 'A6'],
    'BMW': ['3 Series', '5 Series', '7 Series'],
    'Chevrolet': ['Cruze', 'Malibu', 'Tahoe', 'Camaro'],
    'Daewoo': ['Lanos', 'Matiz', 'Sens'],
    'Ford': ['Focus', 'Fusion', 'Mustang', 'Fiesta'],
    'Honda': ['Accord', 'Civic', 'CR-V'],
    'Kia': ['Optima', 'Sorento', 'Sportage'],
    'Lexus': ['ES', 'RX', 'NX'],
    'Mazda': ['3', '6', 'CX-5'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class'],
    'Mitsubishi': ['Outlander', 'Lancer', 'Pajero'],
    'Nissan': ['Altima', 'Rogue', 'Sentra'],
    'Toyota': ['Camry', 'Corolla', 'RAV4'],

    # Motorcycles
    'Harley-Davidson': ['XL 883N', 'FLSTS', 'XL 883N', '1200 Sportster', 'Fat Boy'],
    'Yamaha': ['T-MAX', 'Aerox', 'Vino', 'FZ'],
    'Ducati': ['Diavel', 'Supersport', 'Monster'],

    # Trucks
    'Volvo': ['FH 13', 'FM 13'],
    'Scania': ['R 420', 'R 410', 'P', 'R 480'],
    'Man': ['TGX', 'TGS', 'TGA', 'TGL', '18.440'],
    'Iveco': ['Daily груз.'],
    'DAF': ['XF 106', 'XF 105', 'XF', 'XF 95'],

    # Buses
    'Renault': ['Master', 'Trafic'],
    'Neoplan': ['N 1217', 'N 1116', 'N 316 SHD', '116', 'N 122', '212H'],
    'Setra': ['315 HDH', '211 HD', '315 HD', '215 HD', '416 GT-HD'],

    # Motorhomes
    'Hobby': ['Premium', 'Excellent', 'Deluxe', '650', 'Prestige', '420'],
    'Volkswagen': ['Transporter', 'Multivan'],
}

GEARBOX_TYPE_CHOICES = [
    ('AUTO', 'Автомат'),
    ('MANUAL', 'Механіка'),
    ('ROBOT', 'Робот'),
    ('VARIATOR', 'Варіатор'),
    ('TIPTRONIC', 'типтронік')
]