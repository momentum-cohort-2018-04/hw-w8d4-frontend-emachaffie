/* global localStorage */
import App from './App'
import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import Contacts from './Contacts'

class AddContact extends Component {
  constructor (props) {
    super()
    this.state = {
      name: '',
      email: '',
      address: '',
      house: '',
      birthday: null,
      company: '',
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let value = event.target.value
    console.log(value)
    // this.setState.value({value: value})
    // See kb link on line 12 https://github.com/momentum-cohort-2018-04/kb/blob/master/w7--frontend/examples/alarm-clock/src/components/AddAlarmForm.js
  }

  handleSubmit (event) {
    event.preventDefault()
    request
      .post(`http://localhost:8000/contacts/`)
      .auth(localStorage.username, localStorage.password)
      .send(// You left off here!// 
      )
      .then(response => {  
      })
  }

  render () {
    return (
      <div>
        {/* Get in random id thing */}
        <form type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' value='name' onChange={this.handleChange} />
        Email: <input type='text' value='email' onChange={this.handleChange} />
        // Make email an email
        Address: <input type='text' value='address' onChange={this.handleChange} />
        Hogwarts House: <select value={this.state.house} onChange={this.handleChange} />
          <select value={this.state.house} onChange={this.handleChange}>
            <option value='No House'>No House</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
          </select>
        Birthday: <input type='text' value='birthday' onChange={this.handleChange} />
        // Make birthday a date selection
        Organization: <input type='text' value='company' onChange={this.handleChange} />
        Job Title: <input type='text' value='title' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddContact
