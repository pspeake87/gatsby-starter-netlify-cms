import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div id="about-page">
      <section className="section-padding background-polygon">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h1 className="text-center">Honest. Hard Working. Smart.</h1>
            </div>
            <p className="text-center">It can be hard these days to find an agency you can trust. We devote ourselves to being transparent and reliable to our customers while at the same time delivering amazing results</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h2 className="text-center">Our Team</h2>
              <br />
              <div className="sec-line" />
            </div>
            <div className="vertical-align">
              <div className="paragraph-padding">
                <p>&#09;We hire some of the top talent from all over the world, but our core team is purposefully locally based.
                Teamwork and accountability is very important to us and leads to quality results for the client.</p>
                <p>&#09;Industry best practices are also very important to us. Continous integration, SCRUM, Code quality checks along with testing allows our team to be agile and efficient.</p>
              </div>
              <div className="profile-container">
                <div className="profile-img" />
                <br />
                <p className="text-center" >Philip Speake</p>
                <p className="text-center" >Owner/Lead Developer</p>
                <ul className="list-inline footer-social text-center">
                  <li>
                    <a href="https://www.linkedin.com/company/speakesoftware/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/speakesoftware/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding background-secondary">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h2 className="text-center">How we work</h2>
              <br />
              <div className="sec-line" />
            </div>
            <h3>Discover</h3>
            <p>Every project starts with a discovery phase where we discuss your company's goals, value differentiation, competitive landscape, and ideal target market. This is the stage where we find out if we’re the best fit for you.</p>
            <h3>Design</h3>
            <p>After gaining insight into your goals, we’ll define the scope of the project and the tools needed. This is where we conduct exhaustive and comprehensive research into your customers and competitors, after which we’ll draw up a plan tailored to your goals and circumstances.</p>
            <h3>Implement</h3>
            <p>Up next, we’ll implement the plan/ design and turn them into actual products. We’ll make sure that your mobile app or website is beautiful, scalable, functional, and prioritizes maintainability.</p>
            <h3>Launch</h3>
            <p>Finally! Your project is ready! We will manage the rollout of our solution, and help with future edits and updates where necessary.</p>
            <h3>Market</h3>
            <p>After your app or site is up and running, if requested, we can help make it stand out through our expert SEO service that targets local searches.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
