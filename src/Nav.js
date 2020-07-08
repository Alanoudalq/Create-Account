import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav(){

    const navStyle = {
        color: 'white'
    };

    return(
  
        <Nav>
        <h1>Logo</h1>
     <ul className="nav-links">
         <Link to="/home" style={}>
        <li>Home</li>
        </Link>

        <Link to ="/myaccount" style={}>
        <li>My Account</li>
        </Link>
    </ul>
        </Nav>
    );
}

export default Nav;
