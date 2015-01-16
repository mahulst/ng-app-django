from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, user_type=1, **kwargs):
        if not email:
            raise ValueError('Users must have a valid email address.')

        account = self.model(
            email = self.normalize_email(email), user_type=user_type
        )

        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **kwargs)

        account.user_type = Account.ADMIN
        account.save()

        return account


class Account(AbstractBaseUser):
    EMPLOYEE = 0
    EMPLOYER = 1
    ADMIN = 2
    USER_TYPE_CHOICES = (
        (EMPLOYEE, 'Werknemer'),
        (EMPLOYER, 'Werkgever'),
        (ADMIN, 'Admin'),
    )

    email = models.EmailField(unique=True)

    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)

    user_type = models.IntegerField(choices=USER_TYPE_CHOICES, default=EMPLOYEE)
    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'

    def __unicode__(self):
        return self.email

    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name

