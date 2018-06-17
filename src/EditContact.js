/* global localStorage */
import Dashboard from './Dashboard'
import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import uuid from 'uuid/v4'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

let database = firebase.database()

class EditContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      email: '',
      address: '',
      house: '',
      birthday: '',
      company: '',
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getContact = this.getContact.bind(this)
    this.getContact()
  }

  getContact () {
    // query api for single contact
    this.setState({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      address: contact.address,
      house: '',
      birthday: '',
      company: '',
      title: ''
    })
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    console.log(value)
    console.log(name)
    this.setState({[name]: value})
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submitting')
    // const contactList = database.ref('contacts/')
    var editedContact = firebase.database().ref('contacts/this.state.id')
    editedContact.set({
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      house: this.state.house,
      birthday: this.state.birthday,
      company: this.state.company,
      title: this.state.title
    })
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h2>Edit Your Contact</h2>
        <form type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
        Email: <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
        Address: <input type='text' name='address' onChange={this.handleChange} value={this.state.address} />
        Hogwarts House: <select name='house' onChange={this.handleChange} value={this.state.house} />
          <select name='house' value={this.state.house} onChange={this.handleChange}>
            <option value='No House'>No House</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
          </select>
        Birthday: <input type='text' name='birthday' onChange={this.handleChange} />
        Organization: <input type='text' name='company' onChange={this.handleChange} />
        Job Title: <input type='text' name='title' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditContact
