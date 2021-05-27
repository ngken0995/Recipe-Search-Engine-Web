import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { Grid, Button, Typography } from "@material-ui/core";

export default class HomePage extends Component {
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
}
