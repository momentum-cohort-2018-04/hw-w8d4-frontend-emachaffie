/* global localStorage */
import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import firebase from './firebase'

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
        .head(`http://localhost:8000/contacts/`)
        .auth(username, password)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.status)
            this.props.changeLoggedInStatus(true)
          } else {
            this.props.changeLoggedInStatus(false)
          }
        })
    )
  }

  render () {
    return (
      <div className='loginFormDiv'>
        <header className='header'>
          <h2 className='header'>Accio Contacts</h2>
        </header>
        <form className='loginForm' onSubmit={this.handleSubmit}>
          Username: <input type='text' name='username' className='loginFormInput' onChange={this.usernameSubmit} />
          Password: <input type='password' name='password' className='loginFormInput' onChange={this.passwordSubmit} />
          <button className='loginFormButton' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default LoginPage
