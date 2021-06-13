import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFoodGenerate(addMore) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [foods, setFoods] = useState([])
    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://api.spoonacular.com/recipes/findByNutrients?apiKey=b19b9ab34ae04c10aeefb0f9ef7e0f3b&minCalories=0&number=3&random=true',    
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
