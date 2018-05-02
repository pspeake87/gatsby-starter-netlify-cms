import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import favicon from './img/favicon.ico';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Speake Software & Consulting | Custom Software Development</title>
      <meta name="description" content="We are a custom software development company from Dixon, California that designs and develops web and mobile apps for a variety of clients. From large complex apps to small static websites, we help non-technical people build and maintain cloud based software." />
      <meta name="keywords" content="software, custom, web, mobile, apps" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <section className="hidden-sm hidden-xs" id="header-top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-left">
              <ul>
                <li>
                  Speake Software & Consulting - Custom Software Development
                </li>
              </ul>
            </div>
            <div className="pull-right">
              <ul className="list-inline top-contact-link">
                <li>
                  <i className="fa fa-envelope-o" />
                  info@speakesoftware.co
                </li>
                <li>
                  <i className="fa fa-clock-o" />
                  Mon-Sat : 9am-5pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
