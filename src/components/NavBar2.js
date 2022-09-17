import React from 'react';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.png';

function NavBar2(props) {
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