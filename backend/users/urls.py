from django.urls import path
from .views import UserCreate, BlacklistTokenView


app_name = 'users'

urlpatterns = [
    path('register/', UserCreate.as_view(), name='register'),
    path('logout/blacklist/', BlacklistTokenView.as_view(), name='blacklist'),
]