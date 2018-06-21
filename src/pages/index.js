import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Footer from '../components/Footer.js'
import Navbar from '../components/Navbar'

import Leroy from '../layouts/img/logos/Leroy.png'
import alvin from '../layouts/img/logos/Alvin.png'
import mood from '../layouts/img/logos/Mood.png'
import ranchr from '../layouts/img/logos/Ranchr.png'

import heroIllustration from '../layouts/img/hero-illustration.png'
import heroIllustration2x from '../layouts/img/hero-illustration@2x.png'

import editor from '../layouts/img/editor.png'
import editor2x from '../layouts/img/editor@2x.png'

import sketch from '../layouts/img/sketch@2x.png'
import sketch2x from '../layouts/img/sketch@2x.png'

import opalinDashboard from '../layouts/img/opalin-dashboard.png'
import opalinDashboard2x from '../layouts/img/opalin-dashboard@2x.png'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bot: '', name: '', email: '', message: '', subject: '' }
  }

  render() {
    return (
      <div>
        <Navbar/>
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
              <h2>Clean and Beautiful UI/UX Design </h2>
              <p className="paragraph">Get the best of both worlds by not only having a powerful product, but a design of equal quality.</p>
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
                <h3>Join our growing list of clients!</h3>
                <p className="opacity-m paragraph">Start today and see why are customers love working with us.</p>
              </div>
              <div className="row min-two-columns">
                <div className="col-one-fourth">
                  <img src={Leroy}
                       srcSet={`${Leroy} 1x, ${Leroy} 2x`}
                       alt="Trusted Company" />
                </div>
                <div className="col-one-fourth">
                  <img src={alvin}
                       srcSet={`${alvin} 1x, ${alvin} 2x`}
                       alt="Trusted Company" />
                </div>
                <div className="col-one-fourth">
                  <img src={mood}
                       srcSet={`${mood} 1x, ${mood} 2x`}
                       alt="Trusted Company" />
                </div>
                <div className="col-one-fourth">
                  <img src={ranchr}
                       srcSet={`${ranchr} 1x, ${ranchr} 2x`}
                       alt="Trusted Company" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-light center">
            <div className="row no-gutter">
              <div className="col-one-half middle padding padding-bottom padding-top">
                <div className="max-width-m">
                  <p className="paragraph">Philip Speake, Owner/Lead developer</p>
                  <h3>"Communication and Reliability are the cornerstones of a great development experience"</h3>
                </div>
              </div>
              <div className="col-one-half bg-image-03 padding-bottom padding-top" />
            </div>
          </section>

          <Footer />

        </main>
      </div>
    )
  }
}
