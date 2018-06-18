import React, { Component } from 'react'
import './App.css'
import Contacts from './Contacts'
import firebase, { auth, provider } from './firebase'
import 'firebase/auth'

class Dashboard extends Component {
  constructor (props) {
    let database = firebase.database()
    super()
    this.state = {
      loggedIn: true,
      user: null
    }
  }

  // componentDidMount () {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({
  //       user: user,
  //       loggedIn: true
  //     })
  //   })
  // }

  render () {
    if (!this.state.loggedIn) {
      return (
        firebase.auth().signInWithRedirect(provider)
          .then((result) => {
            this.setState({
              user: result.user,
              loggedIn: true
            })
          }))
    } else {
      return (
        <Contacts />
      )
    }
  }
}

export default Dashboard
