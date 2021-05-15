from django.http.response import Http404
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import random

from .models import Feed 
# Create your views here.
def home_view(request, *args, **kwargs):
    return render(request, "pages/home.html", context={})

def feed_list_view(request, *args, **kwargs):
    qs = Feed.objects.all()
    feeds_list = [{"id": x.id, "content": x.content, "likes": random.randint(0, 1000)} for x in qs]
    data = {
        "isUser": False,
        "response": feeds_list
    }
    return JsonResponse(data)
    
def feed_detail_view(request, feed_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript
    return json data
    """
    data = {
        "id": feed_id
    }
    status = 200
    try:
        obj = Feed.objects.get(id=feed_id)
        data['content'] = obj.content
    except:
        data['message'] = "Not Found"
        status = 404
        
    return JsonResponse(data, status=status)