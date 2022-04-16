import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Navber.css"
const Navber = () => {
    return (
        <div className = "mb-5">
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home"><h3 className="nav-header">PORTFO<span className="skillHeader">LIO</span></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    </Nav>
    <Nav className = "menu-item">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About me</Nav.Link>
      <Nav.Link href="#skills">My Skills</Nav.Link>
      <Nav.Link href="#work">My Work</Nav.Link>
      <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
      <Nav.Link href="#contact">Contact me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navber;