import React, { Component } from 'react'
import './App.css'
import Contacts from './Contacts'
import 'firebase/auth'
import Login from './Login'

class Dashboard extends Component {
  render () {
    if (!this.props.user) {
      return (
        <Login />
        // Look at redirect of Router?
      )
    } else {
      return (
        <Contacts />
      )
    }
  }
}

export default Dashboard
