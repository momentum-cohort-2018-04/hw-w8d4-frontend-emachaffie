/* global localStorage */
import App from './App'
import React, { Component } from 'react'

class LoginPage extends Component {
  constructor (props) {
    super()
    // this.loggedIn = this.loggedIn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  passwordSubmit (event) {
    localStorage.password = event.target.value
  }

  usernameSubmit (event) {
    localStorage.username = event.target.value
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submitted')
    if (this.props.password !== null && this.props.username !== null) {
      this.props.loggedIn()
    }
  }

  // render with prop onLogin?

  render () {
    return (
      <div className='loginForm'>
        <h2>Accio Contacts Log In</h2>
        <form onSubmit={this.handleSubmit}>
          Username: <input type='text' name='username' onChange={this.usernameSubmit} />
          Password: <input type='text' name='password' onChange={this.passwordSubmit} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginPage
