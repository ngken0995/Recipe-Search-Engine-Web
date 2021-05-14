from django.shortcuts import render
from django.http import HttpResponse

from .models import Feed 
# Create your views here.
def home_view(request, *args, **kwargs):
    return render(request, "pages/home.html", context={})