import React from 'react'
import Form from '../components/Form'

export default class IndexPage extends React.Component {
  render() {
    return (
      <main>
        <a href="/" className="button button-close" role="button" />

        <section className="row no-gutter reverse-order">
          <div className="col-one-half middle padding">
            <div className="max-width-s">
              <h4>Setup Free Consultation</h4>
              <p className="paragraph">Enter your details below.</p>
              <Form />
            </div>
            <div className="center max-width-s space-top">
            </div>
          </div>
          <div className="col-one-half bg-image-04 featured-image" />
        </section>

      </main>
    )
  }
}
