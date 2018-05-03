import React from 'react'
import Link from 'gatsby-link'

import { Navbar, Nav } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer id='main-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='footer-widget footer-desc'>
                  <div className='footer-logo'>
                    <h2>
                      Speake
                      <span>Software</span>
                    </h2>
                    <h6>& Consulting</h6>
                  </div>
                  <p>We exist to serve customers, whose demands require quality service and demonstrated commitment. We strive to deliver affordable software products that create long-term value by being responsive to customers’ needs and by applying cutting-edge technology and industry advancements. We dedicate ourselves to being transparent and reliable in all aspects to earn our customers’ trust and satisfaction.</p>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-md-offset-1'>
                <div className='footer-widget footer-menu'>
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a className='page-scroll' href='#section-service'>SEO</a>
                    </li>
                    <li>
                      <a className='page-scroll' href='#section-service'>Automated Emails</a>
                    </li>
                    <li>
                      <a className='page-scroll' href='#section-service'>Design</a>
                    </li>
                    <li>
                      <a className='page-scroll' href='#section-service'>API Integration</a>
                    </li>
                    <li>
                      <a className='page-scroll' href='#section-service'>Analytics</a>
                    </li>
                    <li>
                      <a className='page-scroll' href='#section-service'>Mobile Friendly</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='footer-widget footer-contact'>
                  <h3>Get in Touch</h3>
                  <h4 className='margin-botm-20'>Dixon, California</h4>
                  <h4 className='margin-botm-20'>info@speaksoftware.co</h4>
                  <br />
                  <h4 className='margin-botm-20'>Philip Speake</h4>
                  <h4 className='margin-botm-20'>Owner/Lead Developer</h4>
                  <h4 className='margin-botm-20'>philip@speaksoftware.co</h4>
                  <br />
                  <h4 className='margin-botm-20'>Josh Rector</h4>
                  <h4 className='margin-botm-20'>Developer</h4>
                  <h4 className='margin-botm-20'>josh@speaksoftware.co</h4>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section id='section-footer-btm'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-4'>
                <h4>© All Rights Reserved 2018 - Speake Software & Consulting</h4>
              </div>
              <div className='col-md-6 text-right col-sm-8'>
                <ul className='list-inline footer-social'>
                  <li>
                    <a href='https://twitter.com/speake_software'>
                      <i className='fa fa-twitter' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/speakesoftware/'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
