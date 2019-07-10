import React, { Component } from 'react';
import './Contact.css';



class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      message: '',
      formErrors: { username: '', email: '' },
      emailValid: false,
      usernameValid: false,
      formValid: false,
      emailClass: "Email",
      userClass: "Name"
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validState = (name, value) => {
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validState("username", this.state.username)
    this.validState("email", this.state.email)

    if (this.state.formErrors.username.length > 1) {
      this.setState({
        userClass: "Name*"
      })
    } else {
      this.setState({
        userClass: "Name"
      })
    }
    if (this.state.formErrors.email.length > 1) {
      this.setState({
        emailClass: "Email*"
      })
    } else {
      this.setState({
        emailClass: "Email"
      })
    }
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let usernameValid = this.state.usernameValid;


    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'username':
        usernameValid = value.length >= 6;
        fieldValidationErrors.username = usernameValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      usernameValid: usernameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.usernamedValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <div className="contact">
        {this.state.error && <p>{this.state.error.message}</p>}
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label>{this.state.userClass}</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <label>{this.state.emailClass}</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>Message</label>
          <input
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button className="contact-button">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
