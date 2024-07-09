import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

import './index.css';

class LoginForm extends Component {
  state = {
    Email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isLoggedIn: false, // Track login status
  };

  componentDidMount() {
    const jwt_token = Cookies.get('jwt_token');

    if (jwt_token) {
      this.setState({ isLoggedIn: true }); // Update state if token exists
    }
  }

  onChangeEmail = event => {
    this.setState({ Email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken);
    this.setState({ isLoggedIn: true }); // Update state on successful login
  };

  onSubmitFailure = errorMsg => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  validateForm = () => {
    const { Email, password } = this.state;

    // Validation for all required fields
    if (!Email || !password) {
      this.setState({ showSubmitError: true, errorMsg: 'Please fill all fields' });
      return false;
    } 

    // Validate Email
    if (!/^[a-z]{2}\d{4}@srmist\.edu\.in$/.test(Email)) {
      this.setState({ showSubmitError: true, errorMsg: 'Email address is invalid' });
      return false;
    }

    // Validate password
    if (password.length < 6) {
      this.setState({ showSubmitError: true, errorMsg: 'Password must be at least 6 characters' });
      return false;
    }

    return true;
  };

  submitForm = async event => {
    event.preventDefault();

    const { Email, password } = this.state;

    if (!this.validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/login',
        { Email, password },
        { withCredentials: true }
      );
      
      this.onSubmitSuccess(response.data.jwt_token);
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Something went wrong. Please try again.';
      this.onSubmitFailure(errorMsg);
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

  renderEmailField = () => {
    const { Email } = this.state;

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="text"
          id="Email"
          className="Email-input-field"
          value={Email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg, isLoggedIn } = this.state;

    // Redirect to home page if logged in
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Login</h1>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
