import React, { useState, useEffect } from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import axios from 'axios';

function Favorite(props) {

    const [token] = useCookies(['mytoken'])
    const food_id = props.id
    const token_id = token['mytoken']
    const [isLike, setIsLike] = useState(false)

    const likeFood = () => {
        APIService.InsertFood({food_id, token_id}, token['mytoken'])
    }

    useEffect(() => {
      APIService.isLike(food_id,token['mytoken'])
      .then(resp => {
        console.log(resp.data.length)
        if (resp.data.length !== 0) {
          setIsLike(true)
        }
      })
    }, [isLike])
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
                    isLike ? <button className = "btn btn-success">Remove From Favorite</button>
                    :  <button onClick = {likeFood} className = "btn btn-primary">Add to Favorite</button>
                }
            </div>
        </div>
    )
}

export default Favorite
