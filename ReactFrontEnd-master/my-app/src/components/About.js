import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Favorite from './Favorite';

export default function About() {
    const [steps, setSteps] = useState([])
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const { id } = useParams();


    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b19b9ab34ae04c10aeefb0f9ef7e0f3b`,    
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
    },[])


    
    return (
        <>
        <div className="text-center">
            <img src={image} className="img-fluid"/>
            <h2>{title}</h2>
            <Favorite id = {id}/>
            <div className="text-left">
            {steps.map(d => <ul>
                <li>{d.step}</li></ul>)} 
            </div>      
        </div>
        </>
    )
}