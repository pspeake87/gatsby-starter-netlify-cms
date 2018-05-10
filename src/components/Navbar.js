import React from 'react'
import Link from 'gatsby-link'

import logo from '../layouts/img/logo.svg'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class MainNavbar extends React.Component {
  render() {
    return (
      <header className="site-navigation navigation" id="masthead">
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="/">
                <img
                  src={logo}
                  alt="speake-software"
                  className="img-responsive"
                />
              </a>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <li>
                <Link to="/">Home</Link>
              </li>
              <NavDropdown
                eventKey={3}
                title="Services"
                id="basic-nav-dropdown"
              >
                <MenuItem href="/services/web-design">Website Design</MenuItem>
                <MenuItem href="/services/mobile-app-development">
                  Mobile App Development
                </MenuItem>
                <MenuItem href="/services/seo-management">
                  SEO Management
                </MenuItem>
              </NavDropdown>

              <NavItem href="/about">About</NavItem>

              {/*<NavItem href="/portfolio">Portfolio</NavItem>*/}

              <NavItem href="/contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}
