from accounts.models import Account


def create_related_models(strategy, details, response, user=None, *args, **kwargs):
    if user:
        if not Account.objects.filter(user=user).exists():
            Account.objects.create(user=user, name=f"{details['fullname']}", role="user")