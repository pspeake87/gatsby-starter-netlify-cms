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
            <p className="paragraph">It takes hard work and dedication to make a successful startup. We are up for the task!</p>
          </div>
          <div className="card card-content dark margin-bottom max-width-l">
            <form className="row reduce-spacing">
              <div className="col-two-thirds middle">
                <h3>Ready to get started?</h3>
                <p className="lead">Contact us today to get your free consultation</p>
              </div>
              <div className="col-one-third middle">
                <a href="/contact" className="button button-primary" role="button">Setup a Free Consultation</a>
              </div>
            </form>
          </div>
        </div>
        <p className="copyright"><span>Speake Software & Consulting - © 2018, all rights reserved.</span></p>
      </footer>
    )
  }
}
