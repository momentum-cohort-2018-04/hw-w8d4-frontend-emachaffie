import App from './App'
import React, { Component } from 'react'
// import { request } from 'https'
import request from 'superagent'
import './App.css'
import Contacts from './Contacts'

class DeleteContact extends Component {
  constructor (props) {
    super()
    this.state = {
      contactList: []
    }
  }
}

export default DeleteContact
