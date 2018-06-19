import Dashboard from './Dashboard'
import React, { Component } from 'react'
import './App.css'
import firebase, { auth, provider } from './firebase'
import 'firebase/auth'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

let database = firebase.database()

class Login extends Component {
  constructor (props) {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this.updateLogin = this.updateLogin.bind(this)
  }

  updateLogin (event) {
    event.preventDefault()
    auth.signInWithRedirect(provider)
      .then((result) => {
        console.log(result)
        const userLoggingIn = result.user
        this.props.updateLogin(userLoggingIn)
      })
  }

  render () {
    return (
      <div className='loginFormDiv'>
        <h1 className='header'>Accio Contacts</h1>
        <img src='https://images.pottermore.com/bxd3o8b291gf/1iNLIKPMMAos48U6ywGas2/b5a6d1fd6c0677d567520cdfa34198a8/wand-black-quite_long-carved_handle.png?w=1200' className='wandImage' alt='wand' />
        <button type='button' onClick={this.updateLogin}>Muggle's Google Login</button>
      </div>
    )
  }
}

export default Login
