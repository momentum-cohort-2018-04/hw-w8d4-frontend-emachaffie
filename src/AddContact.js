import React, { Component } from 'react'
import './App.css'
import uuid from 'uuid/v4'
import firebase from './firebase.js'
import { Link } from 'react-router-dom'

let database = firebase.database()

class AddContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      email: '',
      address: '',
      house: null,
      birthday: null,
      company: '',
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const newId = uuid()
    const newContactList = database.ref('contacts/')
    const newContact = {
      id: newId,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      house: this.state.house,
      birthday: this.state.birthday,
      company: this.state.company,
      title: this.state.title
    }
    newContactList.push(newContact)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h2 className='header'>Add a Contact</h2>
        <p>Muggles and those who have not passed Year 3 Incantations, please fill out this form. Otherwise, you may use the <em>'addendum contacto'</em> spell.</p>
        <form className='addContactForm' type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' onChange={this.handleChange} />
        Email: <input type='text' name='email' onChange={this.handleChange} />
        Address: <input type='text' name='address' onChange={this.handleChange} />
        Hogwarts House:
          <select name='house' onChange={this.handleChange}>
            <option value='NoHouse'>No House</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
          </select>
        Birthday: <input type='text' name='birthday' onChange={this.handleChange} />
        Organization: <input type='text' name='company' onChange={this.handleChange} />
        Job Title: <input type='text' name='title' onChange={this.handleChange} />
          <button className='submitButton' type='submit'>Submit</button>
          <Link to='/'><button className='cancelButton fakeButton'>Cancel</button></Link>
        </form>
      </div>
    )
  }
}

export default AddContact
