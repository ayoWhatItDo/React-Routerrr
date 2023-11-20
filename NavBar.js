import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className='NavBar'>
            <Link to="/home">
                Let's get something to snack on!
            </Link>
            <br></br>
            <Link to="/eat">
                Chipssss
            </Link>
            <Link to="/drink">
                La Croix
            </Link>
            <Link to="/cigs">
                Kool 100's
            </Link>
        </nav>
    );
}

export default NavBar;