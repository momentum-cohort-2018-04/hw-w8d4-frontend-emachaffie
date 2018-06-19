import React, { Component } from 'react'
import './App.css'
import Contacts from './Contacts'
import firebase, { auth, provider } from './firebase'
import 'firebase/auth'
import Login from './Login'

class Dashboard extends Component {
  render () {
    if (!this.props.user) {
      return (
        <Login />
        // Look at redirect of router?
      )
    } else {
      return (
        <Contacts />
      )
    }
  }
}

export default Dashboard
