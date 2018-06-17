/* global localStorage */
import Dashboard from './Dashboard'
import React, { Component } from 'react'
// import { request } from 'https'
// import request from 'superagent'
import './App.css'
import firebase from './firebase.js'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

let database = firebase.database()

class Contacts extends Component {
  constructor (props) {
    super()
    this.state = {
      contacts: []
    }
    // this.getContacts = this.getContacts.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  componentDidMount () {
    console.log('loading contacts')
    const contactsList = database.ref('contacts')
    contactsList.on('value', (snapshot) => {
      let contacts = snapshot.val()
      let newState = []
      for (let contact in contacts) {
        newState.push({
          id: contact,
          name: contacts[contact].name,
          email: contacts[contact].email,
          address: contacts[contact].address,
          house: contacts[contact].house,
          birthday: contacts[contact].birthday,
          company: contacts[contact].company,
          title: contacts[contact].title
        })
      }
      this.setState({
        contacts: newState
      })
    })
  }

  deleteContact (contactId) {
    const contactToRemove = database.ref(`/contacts/${contactId}`)
    contactToRemove.remove()
  }

  render () {
    return (
      <div className='contactListDisplay'>
        <h1 className='header'>Accio Contacts</h1>
        <p className='contactSubheaderText'>Keep Track of Your Magical and Muggle Friends</p>
        {/* <button className='addContactButton' onClick={this.props.addingContactFn}
        // Can use Link or keep as is nd push history on onClick
        >Add Contact</button> */}
        <Link to='/add' className='fakeButton addButton'>Add Contact</Link>
        {this.state.contacts.map((contact) => (
          <div key={contact.id} className='contactDiv'>
            <h3 className='name'>{contact.name}</h3>
            <div className='contactInfoDiv'>
              <p className='email'><span className='textSpan'>Email: </span>{contact.email}</p>
              <p className='address'><span className='textSpan'>Address: </span>{contact.address}</p>
              <p className='house'><span className='textSpan'>Hogwarts House: </span>{contact.house}</p>
              <p className='birthday'><span className='textSpan'>Birthday: </span>{contact.birthday}</p>
              <p className='company'><span className='textSpan'>Organization: </span>{contact.company}</p>
              <p className='title'><span className='textSpan'>Job Title: </span>{contact.title}</p>
            </div>
            <div className='contactButtonDiv'>
              <Link to={`/edit/${contact.id}`} className='fakeButton editButton'>Edit</Link>
              <button className='deleteButton' id={contact.id} onClick={() => this.deleteContact(contact.id)}
              >Delete</button>
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Contacts
