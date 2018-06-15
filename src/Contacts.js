/* global localStorage */
import App from './App'
import React, { Component } from 'react'
// import { request } from 'https'
import request from 'superagent'
import './App.css'
import firebase from './firebase.js'

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

  // deleteContact (event) {
  //   let contactId = event.target.id
  //   // parseint used above because contactId is string and in filter would compare to numbers
  //   request
  //     .delete(`http://localhost:8000/contacts/${contactId}`)
  //     .auth(this.props.username, this.props.password)
  //     .then(response => {
  //       console.log('deleted')
  //       this.setState(prevState => ({
  //         contactList: prevState.contactList.filter(contact => contact.id !== contactId)})
  //       )
  //     })
  // }

  render () {
    return (
      <div className='contactListDisplay'>
        <h1 className='header'>Accio Contacts</h1>
        <p className='contactSubheaderText'>Keep Track of Your Magical and Muggle Friends</p>
        <button className='addContactButton' onClick={this.props.addingContactFn}
        >Add Contact</button>
        {this.state.contacts.map((contact) => (
          <div key={contact.id} className='contactDiv'>
            <h3 className='name'>{contact.name}</h3>
            <p className='email'><span className='textSpan'>Email: </span>{contact.email}</p>
            <p className='address'><span className='textSpan'>Address: </span>{contact.address}</p>
            <p className='house'><span className='textSpan'>Hogwarts House: </span>{contact.house}</p>
            <p className='birthday'><span className='textSpan'>Birthday: </span>{contact.birthday}</p>
            <p className='company'><span className='textSpan'>Organization: </span>{contact.company}</p>
            <p className='title'><span className='textSpan'>Job Title: </span>{contact.title}</p>
            <div>
              <button className='editButton' // onClick={<EditContact {contactList=this.state.contactList} />}//
              >Edit</button>
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
