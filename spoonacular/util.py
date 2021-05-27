from .credentials import apikey
from requests import post, put, get

BASE_URL = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=51f720299e1c49f8bb7cb633e7302c5a&minCalories=0&number=9&random=true"

def execute_spotify_api_request():

    response = get(BASE_URL)
    try:
        return response.json()
    except:
        return {'Error': 'Issue with request'}