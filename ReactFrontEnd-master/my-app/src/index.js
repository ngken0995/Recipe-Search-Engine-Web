import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Page from './components/Page';

function Router() {
   
  return(
    <CookiesProvider>
    <BrowserRouter>

    <Navbar />

    <Route exact path = "/login" component = {Login}/>
    <Route exact path = "/" component = {HomePage}/>
    <Route exact path = "/food/:id" component = {About}/>
    <Route exact path = "/favorites" component = {Favorites}/>
    <Route exact path = "/search" component = {Search}/>

    <Route exact path = "/page/:query/:minCarbs/:maxCarbs/:minCalories/:maxCalories/:pageNum" component = {Page}/>

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

