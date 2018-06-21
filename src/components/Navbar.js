import React from 'react'
import logo from '../layouts/img/logo.svg'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class MainNavbar extends React.Component {
  render() {
    return (
      <header className="header-main dark">
        <nav>
          <a href="/" className="logo" rel="home">
            <img
              src={logo}
              alt="speake-software"
            />
          </a>
          <div className="nav-toggle" />
          <ul className="inline">
            <li><a href="index.html" className="active">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
