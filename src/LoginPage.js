/* global localStorage */
import App from './App'
import React, { Component } from 'react'
import request from 'superagent'

class LoginPage extends Component {
  constructor (props) {
    super()
    // this.loggedIn = this.loggedIn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  passwordSubmit (event) {
    localStorage.password = event.target.value
    console.log(localStorage.password)
  }

  usernameSubmit (event) {
    localStorage.username = event.target.value
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submitted')
    const username = localStorage.username
    const password = localStorage.password
    return (
      request
        .get(`http://localhost:8000/contacts/`)
        .auth(username, password)
        .then((response) => {
          if (this.props.password !== null && this.props.username !== null) {
            this.props.loggedIn()
          }
        })
    )
  }

  // render with prop onLogin?

  render () {
    return (
      <div className='loginFormDiv'>
        <h2 className='loginHeader'>Accio Contacts</h2>
        <form className='loginForm' onSubmit={this.handleSubmit}>
          Username: <input type='text' name='username' className='loginFormInput' onChange={this.usernameSubmit} />
          Password: <input type='text' name='password' className='loginFormInput' onChange={this.passwordSubmit} />
          <button className='loginFormButton' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginPage
