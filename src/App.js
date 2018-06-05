/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import contacts from '../db'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      password: localStorage.password,
      username: localStorage.username,
      loggedIn: false
    }
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this)
  }

  changeLoggedInStatus () {
    this.setState({loggedIn: true})
  }

  render () {
    let password = this.state.password
    let username = this.state.username
    let loggedIn = this.state.loggedIn
    return (
      <div>
        {(loggedIn) ? (
          <div className='contactHomePage'>
            <Contacts password={this.state.password} username={this.state.username} />
          </div>
        ) : (
          <div>
            <LoginPage loggedIn={this.changeLoggedInStatus.bind(this)} />
          </div>)}
      </div>
    )
  }
}

export default App
