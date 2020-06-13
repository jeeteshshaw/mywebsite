import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [menu, setmenu] = useState(false)
    const menuHandler = () => {
        if(menu === false){
        document.getElementById('navbar').style.transform = "translateX(0)";
        setmenu(true)
        document.getElementById('menu-btn').classList.replace('menu-out', 'menu-in');
        document.getElementById('menu-btn').innerText='X';
        }  
        else{
            document.getElementById('navbar').style.transform = "translateX(-100%)";
            setmenu(false)
            document.getElementById('menu-btn').classList.replace('menu-in', 'menu-out')
            document.getElementById('menu-btn').innerText='+';

        }
    } 

    return (
        <div className='container-nav'>
            <button className='menu-out' id='menu-btn' onClick={menuHandler} >+</button>
            <nav id='navbar'>
                <div className="nav">
                    <ul className='nav-list'>
                        <li ><NavLink exact to='/' className='link' activeClassName="active">Home</NavLink></li>
                        <li ><NavLink exact to='/demo' className='link' activeClassName="active">Demo</NavLink></li>
                        <li ><NavLink exact to='/about' className='link' activeClassName="active">About</NavLink></li>
                        <li ><NavLink exact to='/support' className='link' activeClassName="active">Support</NavLink></li>

                    </ul>
                </div>
                <div className="nav-profile">
                    <ul className='nav-list'>
                        <li ><NavLink to='/user/login' className='link' activeClassName="active">Login</NavLink></li>
                        <li ><NavLink to='/user/register' className='link' activeClassName="active">Join</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
