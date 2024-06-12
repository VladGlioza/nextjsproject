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
]

REGION_CHOICES = [
    ('ZH', 'Житомирський'),
    ('VI', 'Вінницький'),
    ('KY', 'Київський'),
]

BRAND_CHOICES = [
    ('Audi', 'Audi'),
    ('BMW', 'BMW'),
    ('Chevrolet', 'Chevrolet'),
    ('Ford', 'Ford'),
    ('Honda', 'Honda'),
    ('Kia', 'Kia'),
    ('Lexus', 'Lexus'),
    ('Mazda', 'Mazda'),
    ('Mercedes-Benz', 'Mercedes-Benz'),
    ('Mitsubishi', 'Mitsubishi'),
    ('Nissan', 'Nissan'),
    ('Toyota', 'Toyota'),
]

MODEL_CHOICES = {
    'Audi': ['A3', 'A4', 'A6'],
    'BMW': ['3 Series', '5 Series', '7 Series'],
    'Chevrolet': ['Cruze', 'Malibu', 'Tahoe'],
    'Ford': ['Focus', 'Fusion', 'Mustang'],
    'Honda': ['Accord', 'Civic', 'CR-V'],
    'Kia': ['Optima', 'Sorento', 'Sportage'],
    'Lexus': ['ES', 'RX', 'NX'],
    'Mazda': ['3', '6', 'CX-5'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class'],
    'Mitsubishi': ['Outlander', 'Lancer', 'Pajero'],
    'Nissan': ['Altima', 'Rogue', 'Sentra'],
    'Toyota': ['Camry', 'Corolla', 'RAV4'],
}

GEARBOX_TYPE_CHOICES = [
    ('AUTO', 'Автомат'),
    ('MANUAL', 'Механіка'),
    ('ROBOT', 'Робот'),
    ('VARIATOR', 'Варіатор'),
    ('TIPTRONIC', 'типтронік')
]