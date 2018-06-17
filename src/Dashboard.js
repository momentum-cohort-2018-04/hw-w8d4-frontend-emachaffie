/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import 'firebase/auth'

class Dashboard extends Component {
  constructor (props) {
    let database = firebase.database()
    super()
    this.state = {
      loggedIn: false,
      // addingContact: false,
      user: null
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user,
        loggedIn: true
      })
    })
  }

  render () {
    if (!this.state.loggedIn) {
      var provider = new firebase.auth.GoogleAuthProvider()
      return (
        firebase.auth().signInWithRedirect(provider))
    } else {
      return (
        // <Contacts addingContactFn={this.addingContactFn.bind(this)} />)
        <Contacts />
      )
    }
  }
}

export default Dashboard
