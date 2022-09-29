/**
 * @file NavBar2.js is the file that contains the component to disply the navbar in the top
 * @author Chahouat Taoufik 
 * @see <a href="https://github.com/taifu22/P12_OC/blob/master/src/components/NavBar2.js">Répo GitHub</a>
 */

import React from 'react';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.png';

function NavBar2() {
    return (
        <div className='navbar-menu'>
                <div className='menus-navbar'>
                    <div className='menu-nav'>
                        <img src={menu1}></img>
                    </div>
                    <div className='menu-nav'>
                        <img src={menu2}></img>
                    </div>
                    <div className='menu-nav'>
                        <img src={menu3}></img>
                    </div>
                    <div className='menu-nav'>
                        <img src={menu4}></img>
                    </div>
                </div>
                <p>Copyright SportSee 2020</p>
            </div>
    );
}

export default NavBar2;