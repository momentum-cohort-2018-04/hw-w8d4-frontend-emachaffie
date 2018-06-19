import React, { Component } from 'react'
// import { request } from 'https'
// import request from 'superagent'
import './App.css'
import firebase from './firebase.js'
import { Link } from 'react-router-dom'

let database = firebase.database()

class Contacts extends Component {
  constructor (props) {
    super()
    this.state = {
      contacts: []
    }
    this.deleteContact = this.deleteContact.bind(this)
  }

  componentDidMount () {
    console.log('loading contacts')
    const contactsList = database.ref('contacts')
    contactsList.once('value').then((snapshot) => {
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
    // return <div>Hello</div>
    return (
      <div className='contactListDisplay'>
        <h1 className='header'>Accio Contacts</h1>
        <img src='https://images.pottermore.com/bxd3o8b291gf/1iNLIKPMMAos48U6ywGas2/b5a6d1fd6c0677d567520cdfa34198a8/wand-black-quite_long-carved_handle.png?w=1200' className='wandImage' alt='wand' />
        <p className='contactSubheaderText'>Keep Track of Your Magical and Muggle Friends</p>
        <Link to='/add'><button className='fakeButton addButton'>Add Contact</button></Link>
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
              <Link to={`/edit/${contact.id}`}><button className='fakeButton editButton'>Edit</button></Link>
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
