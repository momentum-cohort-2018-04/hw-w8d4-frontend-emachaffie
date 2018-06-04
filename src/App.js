/* global localStorage */
import React, { Component } from 'react'
import './App.css'
import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import contacts from '../db'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      contactList: localStorage.contacts,
      password: localStorage.password,
      username: localStorage.username,
      loggedIn: false
    }
  }

  render () {
    let password = this.state.password
    let username = this.state.username
    let loggedIn = this.state.loggedIn
    return (
      <div>
        {(password && username && loggedIn) ? (
          <div className='contactHomePage'>
            <h1>Where My Witches At?</h1>
            <p>Subtitle</p>
            <Contacts />
          </div>
        ) : (
          <div>
            <h1>Future Password Form</h1>
            <LoginPage loggedIn={this.state.loggedIn} />
          </div>)}
      </div>
    )
  }
}

export default App
