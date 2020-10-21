import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import headerStyles from './header.module.scss';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/icons/easy.svg"
            width="140"
            height="35"
            className="d-inline-block align-top"
            alt="Easy.my logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Categories">Categories</Nav.Link>
            <Nav.Link href="#Notification">Notification</Nav.Link>
            <Nav.Link href="#login_signup">Login /Sign up</Nav.Link>
            <Nav.Link href="#Help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
