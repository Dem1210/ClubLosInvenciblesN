import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-[#FFFFFF] fixed-top h-20 sm:h-16 md:h-20 flex items-center justify-between px-4 sm:px-8 md:px-[150px]">
    <div className="flex justify-between items-center w-full">
        <Link className="navbar-brand" to="/">
            <img
                src="../public/logo.jpg"
                alt="Club Los Invencibles"
                className="w-14 h-14"
            />
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="text-lg font-semibold text-[#1E1E1E] text-center hidden sm:block">Inicio</h1>
        <div className="" id="navbarNav">
            <ul className="flex flex-row space-x-4 ">
                <li className="nav-item">
                    <Link className="" to="/">
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="" to="/about">
                        Equipo      
                    </Link>                        
                </li>
                <li>
                    <Link className="" to="/contact">
                        Contacto
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    );
};

export default NavBar;