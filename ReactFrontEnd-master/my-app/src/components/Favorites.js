import React, { useState, useEffect } from 'react'
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { Link } from "react-router-dom";

function FavoritePage() {
    const [token] = useCookies(['mytoken'])
    const token_id = token['mytoken']
    const [user_id] = useCookies(['myuser'])
    const user = user_id['myuser']
    const [favorites, setFavorites] = useState([])
    const headers = {
        'Content-Type':'application/json',
        'Authorization':`Token ${token_id}` 
      };

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/favorites/?user=${user}`, { headers })
        .then(res=>{
            res.data.map(food => 
                (axios.get(`https://api.spoonacular.com/recipes/${food.food_id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(resp =>{
                    setFavorites(oldfavorites => [...oldfavorites, resp.data])
                })
            ))
            })
            /*
            axios({
                method: 'GET',
                url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=b19b9ab34ae04c10aeefb0f9ef7e0f3b`,    
            }).then(res => {
                const recipeImage = res.data.image;
                const recipeTitle = res.data.title;
                setImage(recipeImage);
                setTitle(recipeTitle);
                console.log(recipeImage)
            })
            .catch(error => {
                console.log(error.response)
            });
            */
        .catch(e =>{
            console.log(e)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
        {favorites.map((food) => {
        return <div className="col-lg-6" key={food.id}><Link to={{pathname: `/food/${food.id}`}}>
          <img alt='food' key={food.id} id={food.id} src={food.image} />
          </Link></div>
        })
      }
            </div>
        </div>
    )
}

export default FavoritePage
