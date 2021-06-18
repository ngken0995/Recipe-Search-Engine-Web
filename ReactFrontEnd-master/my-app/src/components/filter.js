import React, { useState, useEffect } from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import axios from 'axios';

function Favorite(props) {

    const [token] = useCookies(['mytoken'])
    const [user_id] = useCookies(['myuser'])
    const food_id = props.id
    const user = user_id['myuser']
    const [isLike, setIsLike] = useState(false)
    const [id, setId] = useState(0)

    const likeFood = () => {
        APIService.InsertFood({food_id, user}, token['mytoken'])
        .then(resp => {
          setId(resp.data.id)
        })
        setIsLike(true)
    }

    const removeFood = () => {
      APIService.DeleteFavorite(id, token['mytoken'])
      setIsLike(false)
    }

    useEffect(() => {
      APIService.isLike(food_id, user_id['myuser'], token['mytoken'])
      .then(resp => {
        if (resp.data.length !== 0) {
          setIsLike(true)
          setId(resp.data[0].id)
        }
      })
    }, [])
   /*
    function likeFood() {

        return axios.post('http://127.0.0.1:8000/api/articles/', body, {
          headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }
        });
      }
    */

    return (
        <div>
            <div className = "col">
            {
                    isLike === true ? <button onClick= {removeFood} className = "btn btn-success">Remove From Favorite</button>
                    :  <button onClick = {likeFood} className = "btn btn-primary">Add to Favorite</button>
                }
            </div>
        </div>
    )
}

export default Favorite
