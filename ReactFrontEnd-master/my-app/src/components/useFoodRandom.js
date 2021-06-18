import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFoodRandom(addMore) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [foods, setFoods] = useState([])
    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_API_KEY}&minCalories=0&number=3&random=true`,    
        }).then(res=>{
            setFoods(prevFoods => {
                return [...new Set([...prevFoods, ...res.data.map(f => ({"id":f.id, "image":f.image}))])]
            })
            setLoading(false)
        }).catch(e =>{
            setError(true)
        })
    },[addMore])
    return {loading, error, foods}
}
