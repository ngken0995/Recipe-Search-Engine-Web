import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function About() {

    const { id } = useParams();
    function getTaste(){
        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b19b9ab34ae04c10aeefb0f9ef7e0f3b`,    
        }).then(res=>{console.log(res.data[0].steps)})
        .catch(error => {
            dispatch({ type: AUTH_FAILED });
            dispatch({ type: ERROR, payload: error.data.error.message });
        });
        return null
    }

    const taste = getTaste()
    return (
        <div>
            {id}
        </div>
    )
}
