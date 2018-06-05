/* global localStorage */
import App from './App'
import React, { Component } from 'react'
// import { request } from 'https'
import request from 'superagent'
import './App.css'
import EditContact from './EditContact'
import AddContact from './AddContact'
import DeleteContact from './DeleteContact'

class Contacts extends Component {
  constructor (props) {
    super()
    this.state = {
      contactList: []
    }
    this.getContacts = this.getContacts.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  componentDidMount () {
    this.getContacts()
  }
  getContacts () {
    request
      .get(`http://localhost:8000/contacts/`)
      .auth(this.props.username, this.props.password)
      .then(response => {
        let contactListArray = response.body
        console.log(contactListArray)
        this.setState({contactList: contactListArray})
        console.log(this.state.contactList)
        console.log(this.props.password)
      })
  }

  deleteContact (id) {
    console.log(id.target.id)
    console.log(this.props.password)
    let contactId = id.target.id
    request
      .delete(`http://localhost:8000/contacts/${contactId}`)
      .auth(this.props.username, this.props.password)
      .then(response => {
        console.log('deleted')
        this.setState(prevState => ({
          contactList: prevState.contactList.filter(contact => contact.id !== contactId)})
        )
      })
  }

  render () {
    // console.log(this.props.username)
    return (
      <div className='contactListDisplay'>
        <h1>Accio Contacts</h1>
        <p>Keep Track of Your Magical and Muggle Friends</p>
        <button className='addContact' // onClick={<AddContact />}//
        >Add Contact</button>
        {this.state.contactList.map((contact, i) => (
          <div key={contact.id} className='contactDiv'>
            <h3 className='name'>{contact.name}</h3>
            <p className='email'><span className='textSpan'>Email: </span>{contact.email}</p>
            <p className='address'><span className='textSpan'>Address: </span>{contact.address}</p>
            <p className='house'><span className='textSpan'>Hogwarts House: </span>{contact.email}</p>
            <p className='birthday'><span className='textSpan'>Birthday: </span>{contact.birdthday}</p>
            <p className='company'><span className='textSpan'>Organization: </span>{contact.company}</p>
            <p className='title'><span className='textSpan'>Job Title: </span>{contact.title}</p>
            <div>
              <button className='editButton' //onClick={<EditContact {contactList=this.state.contactList} />}//
              >Edit</button>
              <button className='deleteButton' id={contact.id} onClick={this.deleteContact}
              >Delete</button>
              {console.log(contact.id)}
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Contacts
