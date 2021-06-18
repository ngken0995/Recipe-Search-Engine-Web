import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';


export default function Navbar() {
    const [isLogin, setLogin] = useState(true)
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']) {
            setLogin(true)
        } else {
            setLogin(false)
        } 
    }, [token])

    const logoutBtn = () => {
        removeToken(['mytoken'])
        history.push('/')
    }
    

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>Nutrition</Link>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/search'>Search</NavLink>
                        </li>
                        {isLogin ?
                        <> 
                            <li>
                            <NavLink className='nav-link' to='/FavoritePage'>Favorite</NavLink>
                            </li>
                            <li>
                            <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
                            </li>
                        </>    
                            :<li className='nav-item'>
                            <NavLink className='nav-link' to='/login'>Login</NavLink>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

