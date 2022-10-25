/**
 * @file NavBar.js is the file that contains the component to disply the navbar in the top
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/NavBar.js">Répo GitHub</a>
 */

import React from 'react';
import { useState } from 'react';
import logo from '../assets/Logo.png';

function NavBar() {

    const [toggle, setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div className='div-navbar'>
            <div className='navbar-list'>
                <img src={logo}></img>
                <ul className='ul-desktop'>
                    <li>Accueil</li>  
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
            <div className='navbar-responsive'>
                <img src={logo}></img>
                <i onClick={()=>handleToggle()} className="fas fa-solid fa-bars"></i>
                {toggle ? <ul className='ul-responsive'>
                    <li>Accueil</li>  
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul> : ""}
            </div>
        </div>
    );
}

export default NavBar;