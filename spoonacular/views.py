from django.shortcuts import render
from rest_framework.views import APIView
from .util import *
from rest_framework import status
from rest_framework.response import Response
# Create your views here.

class Generate(APIView):
    def get(self, request, format=None):
        response = execute_spotify_api_request()
        return Response(response, status=status.HTTP_200_OK)