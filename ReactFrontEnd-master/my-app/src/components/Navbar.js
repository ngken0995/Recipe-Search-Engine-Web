import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {useCookies} from 'react-cookie';


export default function Navbar() {
    const [isLogin, setLogin] = useState(true)
    const [token, setToken, removeToken] = useCookies(['mytoken'])

    useEffect(() => {
        if(token['mytoken']) {
            setLogin(true)
        } else {
            setLogin(false)
        } 
    }, [token])

    const logoutBtn = () => {
        removeToken(['mytoken'])
    }
    

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>Session Auth</Link>
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
                        {isLogin ? <li>
                            <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
                            </li>:<li className='nav-item'>
                            <NavLink className='nav-link' to='/login'>Login</NavLink>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
