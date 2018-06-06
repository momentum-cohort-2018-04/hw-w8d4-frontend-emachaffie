/* global localStorage */
import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
import LoginPage from './LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      password: localStorage.password,
      username: localStorage.username,
      loggedIn: false,
      addingContact: false
      // Could set state to show particular piece based on what was clicked, would need a conditional statement below
    }
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this)
    this.notAddingContact = this.notAddingContact.bind(this)
    this.addingContact = this.addingContact.bind.bind(this)
  }

  componentDidMount () {
    this.changeLoggedInStatus()
  }

  changeLoggedInStatus () {
    this.setState({loggedIn: true})
  }

  addingContact () {
    this.setState({addingContact: true})
    console.log('addingContact to true')
  }

  notAddingContact () {
    this.setState({addingContact: false})
    console.log('addingContact to false')
  }

  render () {
    let loggedIn = this.state.loggedIn
    if (!loggedIn) {
      return (
        <LoginPage changeLoggedInStatus={this.changeLoggedInStatus.bind(this)} />)
    } else if (this.addingContact) {
      return (
        <AddContact addingContact={this.addingContact.bind(this)} notAddingContact={this.notAddingContact.bind(this)} />)
    } else {
      return (
        <Contacts password={this.state.password} username={this.state.username} addingContact={this.addingContact.bind(this)} />)
    }
  }
}

export default App
