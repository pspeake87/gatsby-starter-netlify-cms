import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from './img/favicon.ico'
import './css/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Speake Software | Custom Software Development</title>
      <meta
        name="google-site-verification"
        content="WJP7leNv9TY1mVO8CwZKT9WcKrbSrYIWCw2daBveq2M"
      />
      <meta name="p:domain_verify" content="26b19b0552a0b6d518f4e8de5693df1b"/>
      <meta name="majestic-site-verification" content="MJ12_885a5606-3842-4a7f-b0d9-510064a1dd03" />
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
    <div className="page page-onboarding preload">{children()}</div>
    <script src="./js/main.js" />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
