import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const StyledPage = styled.div.attrs( props => ({
  className: 'login',
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: #191A2A;
  background-color: #E7E3D6;
`;

const StyledForm = styled.div.attrs( props => ({
  className: 'user-form',
}))`

  width: 80%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);
`;

const StyledFields = styled.div.attrs( props => ({
  className: 'form-field-wrapper',
}))`

  display: flex;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;

  input, button {
    margin: 0.4rem;
    font-size: 1.6rem;
  }
`;

const StyledLinks = styled.div.attrs( props => ({
  className: 'links',
}))`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // login to retrieve the JWT token
    // add the token to localstorage
    console.log(this.state.credentials);

    const credentials = `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`

    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      console.log(res)
      // localStorage.setItem('token', res);
      this.props.history.push('/edit-card');
    })
    .catch(err => console.log(err.response));
    };

  render() {
    // if (localStorage.getItem('token')) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <StyledPage className='login'>
        <StyledForm className='user-form'>
        <h1>Login:</h1>
        <Form onSubmit={this.login}>
          <StyledFields className='form-field-wrapper'>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          </StyledFields>
          <StyledFields>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          
          <button type="submit">Log in</button>
          </StyledFields>
        </Form>
        <StyledLinks className='links'>
           <NavLink to={ '/register'   } activeClassName='link-active'>Register</NavLink>
           <NavLink to={ '/pass-reset' } activeClassName='link-active'>Forgot Password</NavLink>
         </StyledLinks>
         </StyledForm>
      </StyledPage>
    );
  }
}

export default Login;