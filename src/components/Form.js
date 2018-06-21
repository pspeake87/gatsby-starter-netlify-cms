import React from 'react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
};

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {bot: '', first_name: '', email: '', last_name: '', phone: ''}
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.bot === '') {
      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({'form-name': 'consultation-form', ...this.state}),
      })
        .then(() => {
          this.setState({
            first_name: '',
            email: '',
            last_name: '',
            phone: '',
            bot: '',
          });
          alert('Success! Will be in contact soon!')
        })
        .catch(error => alert(error))
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {first_name, email, last_name, phone} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="hidden"
          name="form-name"
          value="consultation-form"
        />
        <input type="hidden" onChange={this.handleChange}/>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input
            value={first_name}
            type="text"
            name="first_name"
            id="first_name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input
            value={last_name}
            type="text"
            name="last_name"
            id="last_name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            value={phone}
            type="text"
            name="phone"
            id="phone"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="button button-primary full-width"
        >
          Submit
        </button>
      </form>
    )
  }
}
