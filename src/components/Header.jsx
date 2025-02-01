import React from 'react';
import './Header.css';
import CartWidget from './CartWidget';

function Header({ title, onCartClick }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <div className= "menu">
                <ul className= "menuLinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <CartWidget onClick={onCartClick}/>
            </div>
        </header>
    );
}

export default Header;