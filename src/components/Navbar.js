import React from 'react'
import Link from 'gatsby-link'

import logo from '../layouts/img/logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class MainNavbar extends React.Component {
  render() {
    return (
      <header className="site-navigation navigation" id="masthead">
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="/">
                <img src={logo} alt="speake-software" className="img-responsive" />
              </a>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <NavItem href="#section-service">
                Services
              </NavItem>

              <NavItem href="#section-feature">
                About
              </NavItem>

              <NavItem href="#section-client">
                Clients
              </NavItem>

              <NavItem href="#section-contact">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
