import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import FavoriteButton from './FavoriteButton';
import {useCookies} from 'react-cookie';

export default function About() {
    const [token] = useCookies(['mytoken'])
    const [steps, setSteps] = useState([])
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const { id } = useParams();

    let isToken = false;
    if(typeof token['mytoken'] !== 'undefined') {
        isToken = true
    } 

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`,    
        }).then(res => {
            const recipeSteps = res.data[0].steps;
            setSteps(recipeSteps);
            console.log(recipeSteps)
        })
        .catch(error => {
            console.log(error.response)
        });

        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,    
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
    },[])


    
    return (
        <>
        <div className="text-center">
            <img src={image} className="img-fluid"/>
            <h2>{title}</h2>
            {isToken ? <FavoriteButton id = {id}/>: <div></div>}
            <div className="text-left w-50 mx-auto">
            <ol>
            {steps.map(d =>
                <li className="mb-2">{d.step}</li>)} 
                </ol>
            </div>      
        </div>
        </>
    )
}