import React, { useState, useRef, useCallback } from "react";
import useFoodGenerate from './useFoodGenerate'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function HomePage() {
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
    <div>
      {foods.map((food, index) => {
        if (foods.length === index + 1){
          return <Link to={{pathname: `/food/${food.id}`}}><img ref={lastFoodElementRef} id={food.id} src={food.image} /></Link>
        }
        return <Link to={{pathname: `/food/${food.id}`}}><img id={food.id} src={food.image} /></Link>
      })}
      <div>{loading && 'Loading...'}</div>
      </div>
    </>
  )
}

/*export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods:[],
    }

    this.getInitiatedFood = this.getInitiatedFood.bind(this);
  }

  componentDidMount() {
    this.getInitiatedFood();
  }

  getInitiatedFood() {
    fetch("/spoonacular/")
      .then((response) => {
        if (!response.ok) {
          return {};
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ foods: data });
        console.log(this.state.foods);
      });
  }

  render() {
    return (
      <Grid>
          <div>{this.state.foods.map((food) => (
            <img src={food.image} alt='na'/>
            ))}</div>
      </Grid>
    );
  }
}*/
