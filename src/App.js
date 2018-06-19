import React, { Component } from 'react'
import './App.css'
// import request from 'superagent'
import Contacts from './Contacts'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddContact from './AddContact'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import EditContact from './EditContact'
import Login from './Login'

class App extends Component {
  constructor (props) {
    let database = firebase.database()
    super(props)
    this.state = {
      user: null
    }
    this.updateLogin = this.updateLogin.bind(this)
  }

  updateLogin (user) {
    this.setState({
      user: user
    })
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user
      })
    })
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={({history}) => <Dashboard user={this.state.user} />} />
          <Route exact path='/login' render={({history}) => <Login history={history} updateLogin={this.updateLogin} />} />
          <Route exact path='/contacts' render={({history}) => <Contacts />} />
          <Route exact path='/add' render={({history}) => <AddContact />} />
          <Route exact path='/edit/:id' render={({history}) => <EditContact history={history} />} />
  {/* // Pass props using 'render' and function with props instead of component AND pass user to any page that needs it*/}
        </Switch>
      </Router>
    )
  }
}

export default App
