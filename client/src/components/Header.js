import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="hero py-4">
            <div className="hero-body">
                <p id='title' className="mt-3 is-unselectable columns is-centered">The Brewery Locator</p>
                <p id='subtitle'className="mt-3 is-unselectable columns is-centered">THERE'S A COLD ONE JUST AROUND THE CORNER</p>
            </div>
        </header>
    );
}

export default Header;
