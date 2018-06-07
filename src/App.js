/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      password: localStorage.password,
      username: localStorage.username,
      loggedIn: false,
      addingContact: false
    }
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this)
    this.notAddingContact = this.notAddingContact.bind(this)
    this.addingContactFn = this.addingContactFn.bind(this)
  }

  componentDidMount () {
    if (this.state.username) {
      this.changeLoggedInStatus(true)
    } else {
      this.changedLoggedInStatus(false)
    }
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
      return (
        <LoginPage changeLoggedInStatus={this.changeLoggedInStatus.bind(this)} />)
    } else if (this.state.addingContact) {
      return (
        <AddContact notAddingContact={this.notAddingContact.bind(this)} />)
    } else {
      return (
        <Contacts password={this.state.password} username={this.state.username} addingContactFn={this.addingContactFn.bind(this)} />)
    }
  }
}

export default App
