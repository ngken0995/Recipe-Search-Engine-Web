import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import Favorite from './components/Favorite';
import FavoritePage from './components/FavoritePage';

function Router() {
   
  return(
    <CookiesProvider>
    <BrowserRouter>

    <Navbar />

    <Route exact path = "/login" component = {Login}/>
    <Route exact path = "/" component = {HomePage}/>
    <Route exact path = "/food/:id" component = {About}/>
    <Route exact path = "/favorite" component = {Favorite}/>
    <Route exact path = "/FavoritePage" component = {FavoritePage}/>

    </BrowserRouter>
    </CookiesProvider>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
