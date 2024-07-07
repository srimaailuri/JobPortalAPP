import { Component } from "react";
import Cookies from 'js-cookie'
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

import './index.css'

class LoginForm extends Component {
    state = {
      Email: '',
      password: '',
      showSubmitError: false,
      errorMsg: '',
      isLoggedIn:false,
    }
  
    onChangeEmail = event => {
      this.setState({Email: event.target.value})
    }
  
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }
  
    onSubmitSuccess = jwtToken => {
      Cookies.set('jwt_token', jwtToken);
      this.setState({ isLoggedIn: true });
  }
  
    onSubmitFailure = errorMsg => {
      this.setState({showSubmitError: true, errorMsg})
    }

    validateForm = () => {
      const { Email, password } = this.state;

    // Validation for all required fields
    if (!Email || !password) {
      this.setState({showSubmitError: true, errorMsg: 'please fill all fileds' });
      return;
    } // Validate Email
    else if (!/^[a-z]{2}\d{4}@srmist\.edu\.in$/.test(Email)) {
      this.setState({showSubmitError: true, errorMsg: 'Email address is invalid' });
      return;
    }// Validate password
     else if (password.length < 6) {
      this.setState({showSubmitError: true, errorMsg: 'Password must be at least 6 characters' });
      return;
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
          { Email,password },
          { withCredentials: true }
        );
        this.onSubmitSuccess(response.data.jwt_token);
      } catch (error) {
        this.onSubmitFailure(error);
      }
    };
  
    renderPasswordField = () => {
      const {password} = this.state
  
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
      )
    }
  
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
      const {showSubmitError, errorMsg,isLoggedIn} = this.state
      if(isLoggedIn){
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
      )
    }
  }
  
  export default LoginForm


