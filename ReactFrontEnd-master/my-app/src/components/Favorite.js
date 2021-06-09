import React, { useState, useEffect } from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import axios from 'axios';

function Favorite(props) {

    const [token] = useCookies(['mytoken'])
    const [like, setLike] = useState(false)
    const food_id = props.id
    const token_id = token['mytoken']

    const body = {food_id:`${props.id}`, token_id:`${token}` }

    const likeFood = () => {
        APIService.InsertFood({food_id, token_id}, token['mytoken'])
    }
   /*
    const likeFood = () => {
        axios.post('http://127.0.0.1:8000/api/favorites/', body, {
          headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }
        });
   }

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
              <button onClick = {likeFood} className = "btn btn-success">Like</button>
            </div>
        </div>
    )
}

export default Favorite
