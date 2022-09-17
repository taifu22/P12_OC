import React from 'react';
import logo from '../assets/Logo.png';

function NavBar(props) {
    return (
        <div className='div-navbar'>
            <div className='navbar-list'>
                <img src={logo}></img>
                <ul>
                    <li>Accueil</li> 
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;