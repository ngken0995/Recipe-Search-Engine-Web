import React, { useState, useRef, useCallback } from "react";
import useFoodGenerate from './useFoodGenerate'
import {
  Link
} from "react-router-dom";

function HomePage() {
  const [addMore, setAddMore] = useState(1)
  const {
    foods,
    loading,
    error
  } = useFoodGenerate(addMore)

  const observer = useRef()
  
  const lastFoodElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        setAddMore(prevAddMore => prevAddMore + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <>
      {foods.map((food, index) => {
        if (foods.length === index + 1){
          return <div key={food.id}><Link to={{pathname: `/food/${food.id}`}}>
            <img alt='food' ref={lastFoodElementRef}  id={food.id} src={food.image} />
            </Link></div>
        }
        return <div key={food.id}><Link to={{pathname: `/food/${food.id}`}}>
          <img alt='food' key={food.id} id={food.id} src={food.image} />
          </Link></div>
        })
      }
      <div>{loading && 'Loading...'}</div>
    </>
  )
}

export default HomePage