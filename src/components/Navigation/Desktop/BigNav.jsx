import React from 'react';
import { Link } from 'react-router-dom';
import './BigNav.css';

const BigNav = () => {
    return (
        <ul class="navDesktop">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Catalogue">Catalogue</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>

    );
}

export default BigNav;