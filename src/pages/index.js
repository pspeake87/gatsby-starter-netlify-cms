import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import reactnative from '../layouts/img/logos/reactnative.svg'
import rails from '../layouts/img/logos/rails.svg'
import nodejs from '../layouts/img/logos/nodejs.svg'
import react from '../layouts/img/logos/react.svg'
import graphql from '../layouts/img/logos/graphql.svg'

import heroIllustration from '../layouts/img/hero-illustration.png'
import heroIllustration2x from '../layouts/img/hero-illustration@2x.png'

import editor from '../layouts/img/editor.png'
import editor2x from '../layouts/img/editor@2x.png'

import sketch from '../layouts/img/sketch.png'
import sketch2x from '../layouts/img/sketch@2x.png'

import opalinDashboard from '../layouts/img/opalin-dashboard.png'
import opalinDashboard2x from '../layouts/img/opalin-dashboard@2x.png'

import trustedCompanyDark from '../layouts/img/trusted-company-dark.png'
import trustedCompanyDark2x from '../layouts/img/trusted-company-dark@2x.png'

import NotFoundPage from "./404";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bot: '', name: '', email: '', message: '', subject: '' }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.bot === '') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-form', ...this.state }),
      })
        .then(() => {
          this.setState({
            name: '',
            email: '',
            message: '',
            subject: '',
            bot: '',
          })
          alert('Your message was successfully sent!')
        })
        .catch(error => alert(error))
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { data } = this.props
    const { name, email, message, subject } = this.state

    return (
      <main>

        <section className="bg-image-hero center-tablet dark overlay-shape-03">
          <div className="full-screen -margin-bottom middle padding padding-top-tablet">
            <div className="row max-width-l">
              <div className="col-one-half middle">
                <div>
                  <h1 className="hero">Web and Mobile App Development</h1>
                  <p className="lead">Senior level engineering in Rails and React specializing in startups</p>
                  <a href="/contact" className="button button-primary space-top" role="button">Book Free Consultation</a>
                </div>
              </div>
              <div className="col-one-half middle">
                <img src={heroIllustration}
                     srcSet={`${heroIllustration} 1x, ${heroIllustration2x} 2x`}
                     alt="Hero Illustration" />
              </div>
            </div>
          </div>
          <div className="padding">
            <div className="row margin-bottom max-width-l">
              <div className="col-one-half middle">
                <h3>TDD and Continuous Integration</h3>
                <p className="paragraph">Everything is run through automated tests and code checkers to ensure code quality.</p>
              </div>
              <div className="col-one-half">
                <img className="rounded shadow-l" src={editor}
                     srcSet={`${editor} 1x, ${editor2x} 2x`} alt="Editor" />
              </div>
            </div>
            <div className="row max-width-l reverse-order">
              <div className="col-one-half">
                <img className="rounded shadow-l" src={sketch}
                     srcSet={`${sketch} 1x, ${sketch2x} 2x`} alt="Sketch" />
              </div>
              <div className="col-one-half middle">
                <h3>Agile Workflow</h3>
                <p className="paragraph">Keep up to date with the development process and ensure we are hitting our milestones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-light -margin-bottom-2 overlay padding">
          <div className="center max-width-m">
            <h2>Present Your Product</h2>
            <p className="paragraph">Opalin helps you present your business in a wide variety of ways. Display
              full-width images, divide content in a single or multiple columns, anything to make your product or
              service stand out!</p>
          </div>
          <div className="margin-top max-width-l">
            <img className="rounded shadow-l" src={opalinDashboard}
                 srcSet={`${opalinDashboard} 1x, ${opalinDashboard2x} 2x`}
                 alt="Opalin Dashboard" />
          </div>
        </section>

        <section className="bg-gradient-dark center dark padding">
          <div className="margin-top max-width-l">
            <div className="margin-bottom max-width-m">
              <h3>Over 20,000 Paying Customers</h3>
              <p className="opacity-m paragraph">Thousands of the most successful companies rely on our service.</p>
            </div>
            <div className="row min-two-columns">
              <div className="col-one-fourth">
                <img src={trustedCompanyDark}
                     srcSet={`${trustedCompanyDark} 1x, ${trustedCompanyDark2x} 2x`}
                     alt="Trusted Company" />
              </div>
              <div className="col-one-fourth">
                <img src={trustedCompanyDark}
                     srcSet={`${trustedCompanyDark} 1x, ${trustedCompanyDark2x} 2x`}
                     alt="Trusted Company" />
              </div>
              <div className="col-one-fourth">
                <img src={trustedCompanyDark}
                     srcSet={`${trustedCompanyDark} 1x, ${trustedCompanyDark2x} 2x`}
                     alt="Trusted Company" />
              </div>
              <div className="col-one-fourth">
                <img src={trustedCompanyDark}
                     srcSet={`${trustedCompanyDark} 1x, ${trustedCompanyDark2x} 2x`}
                     alt="Trusted Company" />
              </div>
            </div>
            <img className="margin-top rounded shadow-l" src={trustedCompanyDark}
                 srcSet={`${trustedCompanyDark} 1x, ${trustedCompanyDark2x} 2x`} alt="Customers" />
          </div>
        </section>

        <section className="bg-light center">
          <div className="row no-gutter">
            <div className="col-one-half middle padding padding-bottom padding-top">
              <div className="max-width-m">
                <p className="paragraph">Danielle Mayer, business owner, says:</p>
                <h3>"Support is fantastic. Nothing but great results!"</h3>
              </div>
            </div>
            <div className="col-one-half bg-image-03 padding-bottom padding-top"></div>
          </div>
        </section>

        <section className="bg-gradient-light padding">
          <div className="center max-width-l">
            <h2>5-Minute Setup</h2>
            <p className="paragraph">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
          </div>
          <div className="row margin-top max-width-l">
            <div className="col-one-fourth card card-content">
              <p className="muted">Step 1</p>
              <h4>Download</h4>
              <p className="paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-one-fourth card card-content">
              <p className="muted">Step 2</p>
              <h4>Customize</h4>
              <p className="paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur mollit.</p>
            </div>
            <div className="col-one-fourth card card-content">
              <p className="muted">Step 3</p>
              <h4>Upload</h4>
              <p className="paragraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-one-fourth card card-content dark">
              <p className="muted">Step 4</p>
              <h4>Done!</h4>
              <p className="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium.</p>
            </div>
          </div>
          <div className="center margin-top max-width-l">
            <span className="muted">If you need any help, make sure to </span><a href="signup.html">book a demo</a><span
            className="muted">.</span>
          </div>
        </section>

      </main>
    )
  }
}
