from django.urls import path
from .views import registerPage


urlpatterns = [
	path('', registerPage, name="register")
]
