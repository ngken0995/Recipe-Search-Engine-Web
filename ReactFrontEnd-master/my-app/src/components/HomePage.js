import React, { useState, useRef, useCallback } from "react";
import useFoodRandom from './useFoodRandom'
import {
  Link
} from "react-router-dom";

function HomePage() {
  const [addMore, setAddMore] = useState(1)
  const {
    foods,
    loading,
    error
  } = useFoodRandom(addMore)

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
      <div className="container">
          <div className="row">
          {foods.map((food, index) => {
            if (foods.length === index + 1){
              return <div className="col-sm-4" key={food.id}><Link to={{pathname: `/food/${food.id}`}}>
                <img alt='food' ref={lastFoodElementRef}  id={food.id} src={food.image} />
                </Link></div>
            }
            return <div className="col-sm-4" key={food.id}><Link to={{pathname: `/food/${food.id}`}}>
              <img alt='food' key={food.id} id={food.id} src={food.image} />
              </Link></div>
            })
          }
          </div>
      </div>
      <div>{loading && 'Loading...'}</div>
    </>
  )
}

export default HomePage