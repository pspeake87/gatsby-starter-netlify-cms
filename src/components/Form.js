import React from 'react'
import Link from 'gatsby-link'

export default class Form extends React.Component{

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
    const { name, email, message, subject } = this.state

    return (
      <div className="contact-box">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <input
              type="hidden"
              name="form-name"
              value="contact-form"
            />
            <input type="hidden" onChange={this.handleChange}/>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="NAME"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  value={subject}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="SUBJECT"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  value={message}
                  name="message"
                  id="message"
                  rows="5"
                  cols="30"
                  placeholder="MESSAGE"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn contact-box-submit"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
