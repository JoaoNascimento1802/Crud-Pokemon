import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/pokemon.png';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#ff0000' }} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src={logo}
            alt="Pokemon Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              as={Link}
              to="/"
              variant="light"
              className="me-2"
              style={{ color: '#000', fontWeight: 'bold' }}
            >
              Home
            </Button>

            <Button
              as={Link}
              to="/crud"
              variant="dark"
              style={{ backgroundColor: '#000', color: '#fff', fontWeight: 'bold' }}
            >
              Gerenciar Pokémons
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
