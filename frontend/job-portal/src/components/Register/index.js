import { Component } from "react";
import Cookies from 'js-cookie';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

import './index.css';

class RegisterForm extends Component {
  state = {
    username: '',
    Email: '',
    password: '',
    confirm_password:'',
    showSubmitError: false,
    errorMsg: '',
    isRegistered: false,
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeConfirmPassword = event => {
    this.setState({ confirm_password: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ Email: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    this.setState({ isRegistered: true });
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  validateForm = () => {
    const { Email, username, password, confirm_password } = this.state;

    if (!Email || !password || !username || !confirm_password) {
      this.setState({ showSubmitError: true, errorMsg: 'Please fill all fields' });
      return false;
    }
    if (username.length < 6) {
      this.setState({ showSubmitError: true, errorMsg: 'Username must be at least 6 characters' });
      return false;
    }
    if (!/^[a-z]{2}\d{4}@srmist\.edu\.in$/.test(Email)) {
      this.setState({ showSubmitError: true, errorMsg: 'Email address is invalid' });
      return false;
    }
    if (password.length < 6) {
      this.setState({ showSubmitError: true, errorMsg: 'Password must be at least 6 characters' });
      return false;
    }
    if (password !== confirm_password) {
      this.setState({ showSubmitError: true, errorMsg: 'Password mismatch' });
      return false;
    }
    this.setState({ showSubmitError: false, errorMsg: '' });
    return true;
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, Email, password } = this.state;

    if (!this.validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', { Email, username, password });
      console.log(response.data);
      alert("registration successful");
    } catch (error) {
      console.log("error");
      alert("not registered");
      //this.onSubmitFailure(error.response.data.error);
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    );
  };

  renderConfirmPasswordField = () => {
    const { confirm_password } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="Confmpassword">
          CONFIRM PASSWORD
        </label>
        <input
          type="password"
          id="Confmpassword"
          className="password-input-field"
          value={confirm_password}
          onChange={this.onChangeConfirmPassword}
          placeholder="Confirm Password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    );
  };

  renderEmailField = () => {
    const { Email } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="Email">
          EMAIL
        </label>
        <input
          type="text"
          id="Email"
          className="username-input-field"
          value={Email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, isRegistered } = this.state;

    if (isRegistered) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Registration</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderConfirmPasswordField()}</div>
          <button type="submit" className="login-button">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default RegisterForm;





