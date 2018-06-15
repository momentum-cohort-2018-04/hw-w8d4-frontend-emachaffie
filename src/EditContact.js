/* global localStorage */
import Dashboard from './Dashboard'
import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import uuid from 'uuid/v4'
import firebase from './firebase'

class EditContact extends Component {
  constructor (props) {
    super()
    this.state = {
      id: this.props.id,
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

  // handleSubmit (event) {
  //   // const newId = parseInt(uuid())
  //   // this.setState({id: newId})
  //   const body = {
  //     id: this.state.id,
  //     name: this.state.name,
  //     email: this.state.email,
  //     address: this.state.address,
  //     house: this.state.house,
  //     birthday: this.state.birthday,
  //     company: this.state.company,
  //     title: this.state.title}
  //   console.log(body)
  //   event.preventDefault()
  //   request
  //     .put(`http://localhost:8000/contacts/${id}`)
  //     .auth(localStorage.username, localStorage.password)
  //     .send(body)
  //     .end()
  //   this.props.notAddingContact()
  // }

  render () {
    return (
      <div>
        <h2>Add a Contact</h2>
        <p>You may add with the spell 'addendum contacto'. Muggles and those who have not passed Year 3 Incantations, please fill out this form.</p>
        <form type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' onChange={this.handleChange} value={this.props.name} />
        Email: <input type='text' name='email' onChange={this.handleChange} value={this.props.email} />
        Address: <input type='text' name='address' onChange={this.handleChange} value={this.props.address} />
        Hogwarts House: <select name='house' onChange={this.handleChange} value={this.props.house} />
          <select name='house' onChange={this.handleChange}>
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
