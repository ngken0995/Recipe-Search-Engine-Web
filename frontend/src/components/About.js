import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

/*
export default function About() {

    const { id } = useParams();
    const [steps, setSteps] = useState(null);

    useEffect(() => {
        getSteps();
    }, [])

    const getSteps = () =>{
        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b19b9ab34ae04c10aeefb0f9ef7e0f3b`,    
        }).then(res => {
            const recipeSteps = res.data[0].steps;
            setSteps(recipeSteps);
            console.log(steps)
        })
        .catch(error => {
            dispatch({ type: AUTH_FAILED });
            dispatch({ type: ERROR, payload: error.data.error.message });
        });
        return (
            <FoodSteps steps={steps}/>
        )
    }

    /*
    return (
        <div>
            {id}
            {steps.map((step) => {
                return <div key={step.number}>{step.step}</div>
            })}
        </div>
    )
}
*/
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
            dispatch({ type: AUTH_FAILED });
            dispatch({ type: ERROR, payload: error.data.error.message });
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
            dispatch({ type: AUTH_FAILED });
            dispatch({ type: ERROR, payload: error.data.error.message });
        });
    },[])
    return (
        <>
            <img src={image} />
            <h2>{title}</h2>
            {steps.map( d => <ul>
                <li>{d.step}</li></ul>)}        
        </>
    )
}