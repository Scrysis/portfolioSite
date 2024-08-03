import React from "react";



function Navbar({currentPage, changePage}){
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#home" onClick={() => changePage('Home')} className= { currentPage === 'Home' ? 'nav-link active' : 'nav-link'} > Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}> Resume </a> 
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;