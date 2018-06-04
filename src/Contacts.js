/* global localStorage */
import App from './App'
import React, { Component } from 'react'
// import contacts from './db.json'

class Contacts extends Component {
  render () {
    return (
      <div className='contactListDisplay'>
        {this.props.contactList.map((contact, i) => (
          <div key={contact.id}>
            <h3 className='name'>Name: {contact.name}</h3>
            <p className='email'>Email: {contact.email}</p>
            <p className='address'>Address: {contact.address}</p>
            <p className='house'>Hogwarts House: {contact.email}</p>
            <p className='birthday'>Birthday: {contact.birdthday}</p>
            <p className='company'>Organization: {contact.company}</p>
            <p className='title'>Job Title: {contact.title}</p>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Contacts
