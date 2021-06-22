# nutrition_web

### Distinctiveness
This project is a recipe finder web application which provides users to look up for recipes and use other functions. The recipes are retrieved from spoonacular database by using their api. The frontend uses React for users to interact with throughout the web application. Finally, installing other package to run the web application.

### Complexity
First complexity is understanding spoonacular api because it is important to learn about spoonacular data standard to retrieve the correct information and display it in my web application. Second complexity is learning about React which I had to learn about the lifecycle, asynchronous hooks and etc. Third complexity is connecting the frontend with the backend to retrieve users information. Final complexity is creating a pagination page and infinite scrolling page.

### Files:

##### Folder – DjangoBackend-master
- models.py – there is one model called favorite to store the users name and the food id. The food id will be used to retrieve the recipe information with spooncaulor api.
- serializers.py – serialize favorite model and user model by converting it to native Python datatypes that can then be easily rendered into JSON.
- Urls.py – decide to the correct url for backend api.
- Views.py – use Viewset in Django rest_framework for Repeated logic can be combined into a single class and using routers, we no longer need to deal with wiring up the URL conf ourselves.

##### Folder ReactFrontEnd-master/my-app/src/
- APIservice.js – post, get and delete information from Django model users and favorites.
- Index.js- a router to navigate through urls.

##### Folder ReactFrontEnd-master/my-app/src/components
- About.js – use axios to retrieve information from spoonacular and display it on the frontend
- FavoriteButton.js – create a button to add or remove recipes from user favorite Django model
- Favorite.js – display a two-column list of favorite recipes
- Homepage.js – display a three column list of random recipes from useFoodRandom.js
- Login.js – user login or register to the web application.
- Navbar.js – router to navigate to different location of the web application.
- Page.js, Pagination.js, Posts.js – display the search result and use a pagination to select the next page.
- Search.js – this is a search engine with a selected filter option to find recipe.
- useFoodRandom.js – retrieve an array of random recipes and push it to Homepage.js

### Run my application
In order to test out this project, follow these steps:

-   Clone the repository
-   In the my-app folder from ReactFrontEnd-master folder, run: npm install, this will install the required frontend packages
-   Create your own env with Anaconda or Python
-   In the backend folder, run: pip install -r requirements.txt
-   Register a apikey from Spoonacular
-   Create an .env file and save your apikey as REACT_APP_API_KEY
