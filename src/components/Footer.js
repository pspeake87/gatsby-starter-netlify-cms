import React from 'react'
import Link from 'gatsby-link'

import { Navbar, Nav } from 'react-bootstrap'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-main bg-image-hero dark overlay-shape-06">
        <div className="padding">
          <div className="center margin-bottom max-width-m">
            <h3>Grow your startup the right way.</h3>
            <p className="paragraph">Our tools are packed with epic features. So you can focus on your most important
              work.</p>
          </div>
          <div className="center margin-bottom max-width-l">
            <div className="row margin-bottom min-two-columns">
              <div className="col-one-fourth">
                <i className="feature-icons material-icons bg-gradient-pink">format_shapes</i>
                <h6>Minimal Design</h6>
              </div>
              <div className="col-one-fourth">
                <i className="feature-icons material-icons bg-gradient-cyan">network_check</i>
                <h6>Rocket Fast</h6>
              </div>
              <div className="col-one-fourth">
                <i className="feature-icons material-icons bg-gradient-green">line_style</i>
                <h6>Framework</h6>
              </div>
              <div className="col-one-fourth">
                <i className="feature-icons material-icons bg-gradient-indigo">check</i>
                <h6>HTML5 Valid</h6>
              </div>
            </div>
          </div>
          <div className="card card-content dark margin-bottom max-width-l">
            <form className="row reduce-spacing">
              <div className="col-two-thirds middle">
                <h3>Ready to get started?</h3>
                <p className="lead">Start your free 15-day trial today.</p>
              </div>
              <div className="col-one-third middle">
                <a href="signup.html" className="button button-primary" role="button">Create An Account</a>
              </div>
            </form>
          </div>
        </div>
        <p className="copyright"><span>Speake Software & Consulting - © 2018, all rights reserved.</span></p>
      </footer>
    )
  }
}
