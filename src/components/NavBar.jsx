import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/navbar.css"

function NavBar() {
    const user = localStorage.getItem('Email')
    return (
        <div className="navbar">
            <Link className='eachcomponent' to="/goal" style={{ textDecoration: 'inherit', color: 'inherit' }}>GOAL</Link>
            <Link className='eachcomponent' to="/activity" style={{ textDecoration: 'inherit', color: 'inherit' }}>ACTIVITY</Link>
            <Link className='eachcomponent' to="/profile" style={{ textDecoration: 'inherit', color: 'inherit' }}>PROFILE</Link>
            <Link className='eachcomponent1' to="" style={{ textDecoration: 'inherit', color: 'inherit' }}>{user}(logout)</Link>
        </div>
    )
}

export default NavBar;
