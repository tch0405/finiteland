import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/favi2.png';

function Navbar(){
    return (
        <div>
            <nav>
                <Link to='main' className='logo'>
                    <img src={logo} alt='logo'/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='features' smooth={true} duration={1000}>Description</Link></li>
                    <li><Link to='timeline' smooth={true} duration={1000}>Timeline</Link></li>
                    
                    <li><Link to='features1' smooth={true} duration={1000}>Token</Link></li>
                    <li><Link to='services' smooth={true} duration={1000}>Whitepaper</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;