import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import logo from './harisumiran-logo.png'

function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Navbar fixed="top" expand="lg" className={`bg-light ${scroll ? 'navbar-shrink' : ''}`}>
      <Navbar.Brand href="/">
        <div className="logo-container">
          <img
            src={logo}
            width="50"
            height="50"
            className={`logo ${scroll ? 'logo-shrink' : ''}`}
            alt="Logo"
          />
          
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
