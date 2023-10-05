import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assests/kayan-logo.png';


const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            const navContainer = document.querySelector('.nav-container');
    
            if (window.innerWidth > 1400 && window.scrollY > 10) {
                nav.classList.remove('container-xxl');
                navContainer.classList.remove('container-fluid');
                navContainer.classList.add('container');
            } else if (window.innerWidth > 1400 && window.scrollY < 10) {
                        nav.classList.add('container-xxl');
                        navContainer.classList.remove('container');
                        navContainer.classList.add('container-fluid');
                    }
        };
    
        window.addEventListener('scroll', handleScroll);
    
    }, []);
    
return (

    <>

<nav className="navbar navbar-expand-md fixed-top container-xxl navbar-white bg-white py-0 fixed-top">

    <div className="nav-container container-fluid">

        <Link className="navbar-brand" to=" ">

            <img src={logo} height='80' width='205' alt="Kayan Frozen Foods" title='logo' />

        </Link>


        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
    
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header justify-content-center">

                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>

        <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-end flex-grow-1">
                
                <li className="nav-item">

                    <NavLink exact className="nav-link " aria-current="page" to=" ">HOME</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="about">ABOUT US</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="products">OUR PRODUCTS</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="clients">OUR CLIENTS</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="contacts">CONTACT US</NavLink>

                </li>

                <li className="nav-item">

                    <NavLink className="nav-link" to="contacts">العربيه</NavLink>
                
                </li>

            </ul>
        
        </div>
        </div>

    </div>
</nav>

    </>
    
)
}

export default Navbar

