import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import logo1 from '../layouts/img/Asset-3.svg'
import logo2 from '../layouts/img/Asset-4.svg'
import logo3 from '../layouts/img/Asset-5.svg'
import logo4 from '../layouts/img/Asset-8.svg'
import logo5 from '../layouts/img/champion.svg'

import reactnative from '../layouts/img/logos/reactnative.svg'
import rails from '../layouts/img/logos/rails.svg'
import nodejs from '../layouts/img/logos/nodejs.svg'
import react from '../layouts/img/logos/react.svg'
import graphql from '../layouts/img/logos/graphql.svg'
import javascript from '../layouts/img/logos/javascript.svg'

import Mood from '../layouts/img/logos/Mood.png'
import Ranchr from '../layouts/img/logos/Ranchr.png'
import Alvin from '../layouts/img/logos/Alvin.png'
import Boomr from '../layouts/img/logos/Boomr.png'
import Leroy from '../layouts/img/logos/Leroy.png'

import programming from '../layouts/img/programming.jpg'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bot: "", name: "", email: "", message: "", subject: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.bot === "") {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...this.state })
      })
        .then(() => {
          this.setState({ name: "", email: "", message: "", subject: "" , bot: ""});
          alert("Your message was successfully sent!")
        })
        .catch(error => alert(error));
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { name, email, message, subject } = this.state;

    return (
      <div>
        <section id='section-banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='banner-content content-padding'>
                  <div className='banner-content-inner text-center'>
                    <h1 className='data-aos' data-aos='slide-left'>Your Next Big Idea Starts Here!</h1>
                    <h4 className='data-aos' data-aos='slide-up'>Custom software solutions to make your tech ideas come true</h4>
                    <a className='btn btn-brand btn-circle page-scroll' href="#section-contact">Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 col-sm-4 banner-about'>
                <h4>Web Apps</h4>
                <p>High quality web apps is what fuels silicon valley. By using the same technologies they use we can help you deliever an app that will be used by millions.</p>
              </div>
              <div className='col-md-4 col-sm-4 banner-about'>
                <h4>Mobile Apps</h4>
                <p>With the introduction of React Native from Facebook, we can now build a high quality android and iOS mobile app for a fraction of the cost.</p>
              </div>
              <div className='col-md-4 col-sm-4 banner-about'>
                <h4>Custom Websites</h4>
                <p>We can custom tailor a website that fits your exact needs and desires while also removing all the clutter that makes a CMS app like Wordpress exhausting.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='section-tag-line'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-sm-5'>
                <div className='feature-intro'>
                  <h2 className='text-center'>The only limit to software is your own imagination</h2>
                </div>
              </div>
              <div className='col-md-7 col-sm-7'>
                <div className='feature-img-block'>
                  <img src={programming} alt="speake-software" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding' id='section-service'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-search' />
                  <div className='service-content-block'>
                    <h5>Search Engine Optimization</h5>
                    <p>Maximize exposure to your website by increasing rankings on search engines. We can optimize your content using industry best practices to attract and bring more traffic to your website.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-envelope' />
                  <div className='service-content-block'>
                    <h5>Automated Emails</h5>
                    <p>Get custom notifications of when certain actions are happening in your app or send emails to a user after reaching a point in the app process.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-paint-brush' />
                  <div className='service-content-block'>
                    <h5>Design</h5>
                    <p>From logos to a full app design, we cover all your design needs to produce an up-to-date and modern look and feel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row margin-top-60'>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-database' />
                  <div className='service-content-block'>
                    <h5>API Integration</h5>
                    <p>With third party software, you can elevate the usefulness of your app for a fraction of the cost. Some examples are: Payment, Social Media, Text Messaging, and more!</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-exclamation-triangle' />
                  <div className='service-content-block'>
                    <h5>Analytics</h5>
                    <p>It is exhausting to keep track of everything that’s going on in your app or website. We save you time and energy by using analytic software to monitor and report these things for you.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 col-xs-12'>
                <div className='service-block'>
                  <i className='icon fa fa-tablet' />
                  <div className='service-content-block'>
                    <h5>Mobile Friendly</h5>
                    <p>Websites today need to fit all device sizes. Creating responsive websites is an absolute must in order to reach your entire user base.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding grey-bg' id='section-feature'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-heading text-center'>
                  <h3>We follow the T.R.A.Q system</h3>
                  <div className='sec-line' />
                  <p>We find the best customer customer experience is when the client feels the company is Transparent, Reliable, Affordable, while providing Quality products</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='feature-list'>
                  <img src={logo1} alt="speake-software" className="img-responsive" />
                  <h5>Transparency</h5>
                  <p>We dedicate ourselves to being transparent in all aspects to earn our customers’ trust and satisfaction.</p>
                </div>
                <div className='feature-list'>
                  <img src={logo2} alt="speake-software" className="img-responsive" />
                  <h5>Reliability</h5>
                  <p>24 hour response time, meeting deadlines. We work around your schedule and not ours</p>
                </div>
              </div>
              <div className='col-md-4 col-sm-4 hidden-sm hidden-xs'>
                <div className='feature-img-block'>
                  <img src={logo4} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='feature-list'>
                  <img src={logo3} alt="speake-software" className="img-responsive" />
                  <h5>Affordability</h5>
                  <p>We might not be the cheapest option but we work hard with our clients to find a price point they are comfortable with.</p>
                </div>
                <div className='feature-list'>
                  <img src={logo5} alt="speake-software" className="img-responsive" />
                  <h5>Quality</h5>
                  <p>By using state of the art software and industry best practices, we will help you stay ahead of your competitors</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding' id='section-tech'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-xs-12 col-sm-12'>
                <div className='section-padding-heading text-center'>
                  <h2 className='sec-title'>Some technologies we love to use!</h2>
                  <br />
                  <div className='sec-line' />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={reactnative} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={rails} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={nodejs} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={react} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={graphql} alt="speake-software" className="img-responsive" />
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-6'>
                <div className='client-img-box tech-logo'>
                  <img src={javascript} alt="speake-software" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding hidden-xs' id='section-parralax'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-6'>
                <h3>Have an idea you would to talk to use about?</h3>
                <p>We offer free 1 hour consultations via video conference or in person. Validate your idea with experts who know the business</p>
                <h4>Contact us now</h4>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding' id='section-client'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-xs-12 col-sm-12'>
                <div className='section-padding-heading text-center'>
                  <h2 className='sec-title'>Check out some of our former clients.</h2>
                  <br />
                  <div className='sec-line' />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2 col-sm-4 col-xs-12 col-md-offset-1'>
                <div className='client-img-box'>
                  <a href="https://www.trustalvin.com/" target="_blank">
                    <img src={Alvin} alt="trust-alvin" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-12'>
                <div className='client-img-box'>
                  <a href="https://www.boomr.com/" target="_blank">
                    <img src={Boomr} alt="boomr" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-12'>
                <div className='client-img-box'>
                  <a href="http://leroythompson.tv/" target="_blank">
                    <img src={Leroy} alt="leroy-thompson" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-12'>
                <div className='client-img-box'>
                  <a href="https://ranchr.ag/" target="_blank">
                    <img src={Ranchr} alt="ranchr" className="img-responsive" />
                  </a>
                </div>
              </div>
              <div className='col-md-2 col-sm-4 col-xs-12'>
                <div className='client-img-box'>
                  <a href="https://itunes.apple.com/us/app/mood-mindfulness-made-simple/id1248042971?ls=1&mt=8" target="_blank">
                    <img src={Mood} alt="mood" className="img-responsive" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding grey-bg' id='section-contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-heading text-center'>
                  <h3>Let's get in touch!</h3>
                  <div className='sec-line' />
                  <p>Fill out the form below and we will be in touch within 24 hours</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2'>
                <div className='contact-box'>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <input type="hidden" name="form-name" value="contact-form" />
                      <input type="hidden" onChange={this.handleChange} />
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" value={name} type="text" name="name" id="name" placeholder="NAME" onChange={this.handleChange}  />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" value={email} type="text" name="email" id="email" placeholder="EMAIL" onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input className="form-control" value={subject} type="text" name="subject" id="subject" placeholder="SUBJECT" onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" value={message} name="message" id="message" rows="10" cols="30" placeholder="MESSAGE" onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-brand btn-circle" >Send Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
