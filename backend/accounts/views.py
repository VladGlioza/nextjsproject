from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from social_django.utils import psa
from .models import Account
from .serializers import AccountSerializer
from carmarket.models import Sale
from carmarket.serializers import SaleCartSerializer


@api_view(['POST'])
@psa('social:complete')
def google_auth(request, backend):
    access_token = request.data.get('access_token')
    user = request.backend.do_auth(access_token)
    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({'error': 'Аутентифікація не вдалась'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': "Логін та пароль обов'язкові!"}, status=status.HTTP_400_BAD_REQUEST)

    name = username
    username = username.casefold()

    if User.objects.filter(username__iexact=username).exists():
        return Response({'error': 'Такий користувач вже існує!'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password)
    Account.objects.create(user=user, name=name)

    user = authenticate(username=username, password=password, case_sensitive=False)
    refresh = RefreshToken.for_user(user)
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password, case_sensitive=False)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({'error': 'Невірний логін або пароль'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    user = request.user
    account = user.account
    account_serializer = AccountSerializer(account)
    sales = Sale.objects.filter(account=account)
    sales_serializer = SaleCartSerializer(sales, many=True)

    return Response({
        'account': account_serializer.data,
        'sales': sales_serializer.data
    }, status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_number(request, phone_number):
    user = request.user
    account = user.account

    if not phone_number or len(phone_number) != 10:
        return Response({'error': "В номері має бути 10 цифр"}, status.HTTP_400_BAD_REQUEST)

    if phone_number == account.phone_number:
        return Response({'error': "Новий номер має відрізнятися"}, status.HTTP_400_BAD_REQUEST)

    account.phone_number = phone_number
    account.save()

    return Response({'success': "Успішно змінили номер"}, status.HTTP_200_OK)
