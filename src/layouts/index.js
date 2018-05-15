import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import favicon from './img/favicon.ico'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Northern California Web Design | Custom Software Development</title>
      <meta
        name="google-site-verification"
        content="WJP7leNv9TY1mVO8CwZKT9WcKrbSrYIWCw2daBveq2M"
      />
      <meta name="p:domain_verify" content="26b19b0552a0b6d518f4e8de5693df1b"/>
      <meta name="msvalidate.01" content="4BC90264D5A19209C3797B0679F86CC6" />
      <meta
        name="description"
        content="We are a custom software development company from Dixon, California that designs and develops web and mobile apps for a variety of clients in the Northern California region and beyond."
      />
      <meta
        name="keywords"
        content="northern, california, website, software, custom, web, mobile, apps, design, website, development, react, node, rails, ruby, hosting, cheap, affordable, quality, reliable, innovative, native, business, corporate, startup, cto"
      />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
