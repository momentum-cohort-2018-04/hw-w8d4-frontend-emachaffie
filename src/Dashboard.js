/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'
import firebase from './firebase'
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import 'firebase/auth'

class Dashboard extends Component {
  constructor (props) {
    let database = firebase.database()
    super()
    this.state = {
      loggedIn: false,
      addingContact: false,
      user: firebase.auth().currentUser
    }
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this)
    this.notAddingContact = this.notAddingContact.bind(this)
    this.addingContactFn = this.addingContactFn.bind(this)
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user
      })
    })
  }

  changeLoggedInStatus (boo) {
    this.setState({loggedIn: boo})
    console.log(this.state.loggedIn)
  }

  addingContactFn () {
    this.setState({addingContact: true})
    console.log('addingContact to true')
  }

  notAddingContact () {
    this.setState({addingContact: false})
    console.log('addingContact to false')
  }

  render () {
    if (!this.state.loggedIn) {
      var provider = new firebase.auth.GoogleAuthProvider()
      return (
        firebase.auth().signInWithRedirect(provider))
    } else if (this.state.addingContact) {
      return (
        <AddContact notAddingContact={this.notAddingContact.bind(this)} />)
    } else {
      return (
        <Contacts password={this.state.password} username={this.state.username} addingContactFn={this.addingContactFn.bind(this)} />)
    }
  }
}

export default Dashboard
