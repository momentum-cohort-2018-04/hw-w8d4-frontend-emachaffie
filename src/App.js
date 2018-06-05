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
      // Could set state to show particular piece based on what was clicked, would need a conditional statement below
    }
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this)
  }

  // Component did mount, get request user and password from state, 
  // check it's authorized/valid
  // If valid, set logged in to true
  // if not valid, show login screen

  // render
  // if loading show spinner
  // if logged in show Contacts
  // else show LoginPage

  changeLoggedInStatus () {
    if (this.state.password && this.state.username) {
      console.log(this.state.password)
      console.log(this.state.username)
      this.setState({loggedIn: true})
    }
  }

  render () {
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
