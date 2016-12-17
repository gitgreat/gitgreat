//Child component within the HomepageApp and the CreateEventApp to toggle
//between the two App pages.
import React from 'react';
import {Link} from 'react-router';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {LoginLink, LogoutLink, Authenticated, NotAuthenticated} from 'react-stormpath';
import {LinkContainer} from 'react-router-bootstrap';

//MIGHT NEED TO ACCESS USER STATE IN COMPONENTS

var Navigation = ({handleCreateClick}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'} className='title'>Friends</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to={{pathname: '/'}}>
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>

      <LinkContainer to={{pathname: '/create'}}>
        <NavItem eventKey={2}>Create Event</NavItem>
      </LinkContainer>
      <li>
        <NotAuthenticated>
          <LoginLink>Login</LoginLink>
        </NotAuthenticated>
        <Authenticated>
          <LogoutLink>Logout</LogoutLink>
        </Authenticated>
      </li>
      <LinkContainer to={{pathname: '/register'}}>
        <NavItem eventKey={3}>Register</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>


);

module.exports = Navigation;