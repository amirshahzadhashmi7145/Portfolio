import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import brand from "../brand.png"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home"><img src={brand} width="55px" height="55px"/>&nbsp;&nbsp;AMIR SHAHZAD HASHMI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
