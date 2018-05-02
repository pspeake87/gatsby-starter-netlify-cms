import React from 'react'
import Link from 'gatsby-link'

import logo from '../layouts/img/logo.svg'
import { Navbar, Nav } from 'react-bootstrap';

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
              <li>
                <Link to="#section-service">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#section-feature">
                  About
                </Link>
              </li>
              <li>
                <Link to="#section-client">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="#section-contact">
                  Contact
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
