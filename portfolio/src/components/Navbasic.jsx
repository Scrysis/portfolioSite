import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";


function Navbasic({currentPage, changePage}){
    return (
        <DropdownButton id="dropdown-basic-button" title="Navigation">
          <Dropdown.Item href="#home" onClick={()=> changePage('Home')} className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}>Home</Dropdown.Item>
          <Dropdown.Item href="#about" onClick={()=> changePage('About')} className={currentPage === 'About' ? 'nav-link active': 'nav-link'}>About</Dropdown.Item>
          <Dropdown.Item href="#contact" onClick={()=> changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}>Contact</Dropdown.Item>
          
        </DropdownButton>
      );
};

export default Navbasic;