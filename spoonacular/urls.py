from django.urls import path
from .views import *

urlpatterns = [
    path('', Generate.as_view())
]