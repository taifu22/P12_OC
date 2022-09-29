/**
 * @file NavBar.js is the file that contains the component to disply the navbar in the top
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/NavBar.js">Répo GitHub</a>
 */

import React from 'react';
import logo from '../assets/Logo.png';

function NavBar() {
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