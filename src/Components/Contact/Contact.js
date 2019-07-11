import React, { Component } from 'react';

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
      emailClass: "",
      userClass: ""
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
        userClass: "active"
      })
    } else {
      this.setState({
        userClass: ""
      })
    }
    if (this.state.formErrors.email.length > 1) {
      this.setState({
        emailClass: "active"
      })
    } else {
      this.setState({
        emailClass: ""
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
      <div className="contact main-box">
        {this.state.error && <p>{this.state.error.message}</p>}
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div className={this.state.userClass + " row"}>
            <label>Name</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className={this.state.emailClass + " row"}>
            <label>Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <label>Message</label>
            <input
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div className="button-row">
            <button className="contact-button">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
