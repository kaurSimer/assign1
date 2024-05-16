import React from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';
const Navbar = () => {
    return(
   
    <nav className="navbar">
<div>
        <ul>
            <li className='nav-item'>

            <Link className="nav-link" to="/">Home</Link></li>
            <li className='nav-item'> <Link className="nav-link" to="/contact">Contact</Link></li>
            <li className='nav-item'> <Link className="nav-link"  to="/privacy">Privacy</Link></li>
            <li className='nav-item'> <Link className="nav-link" to="/services">Services</Link></li>
            <li className='nav-item'>  <Link className="nav-link" to="/about">About</Link>

            </li>
        </ul>
        </div>
    </nav>
   
    );
};
const styles = `
.navbar{
    background-color: #333;
        color: #fff;
        padding: 10px 20px;
}
.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav-item {
    margin-right: 20px;
}

.nav-link {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

.nav-link:hover {
    color: #ffd700; /* Change color on hover */
}
`
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
export default Navbar;

