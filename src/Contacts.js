/* global localStorage */
import App from './App'
import React, { Component } from 'react'
// import { request } from 'https'
import request from 'superagent'
import './App.css'

class Contacts extends Component {
  constructor (props) {
    super()
    this.state = {
      contactList: []
    }
    this.getContacts = this.getContacts.bind(this)
  }

  // Call at componentDidmount or will looooop
  componentDidMount () {
    this.getContacts()
  }
  getContacts () {
    // event.preventDefault()
    request
      .get(`http://localhost:8000/contacts/`)
      .auth(this.props.username, this.props.password)
      .then(response => {
        let contactListArray = response.body
        console.log(contactListArray)
        this.setState({contactList: contactListArray})
        console.log(this.state.contactList)
      })
  }

  render () {
    // console.log(this.props.username)
    return (
      <div className='contactListDisplay'>
        <h1>Accio Contacts</h1>
        <p>Keep Track of Your Magical and Muggle Friends</p>
        {this.state.contactList.map((contact, i) => (
          <div key={contact.id} className='contactDiv'>
            <h3 className='name'>{contact.name}</h3>
            <p className='email'><span className='textSpan'>Email: </span>{contact.email}</p>
            <p className='address'><span className='textSpan'>Address: </span>{contact.address}</p>
            <p className='house'><span className='textSpan'>Hogwarts House: </span>{contact.email}</p>
            <p className='birthday'><span className='textSpan'>Birthday: </span>{contact.birdthday}</p>
            <p className='company'><span className='textSpan'>Organization: </span>{contact.company}</p>
            <p className='title'><span className='textSpan'>Job Title: </span>{contact.title}</p>
          </div>
        )
        )}
      </div>
    )
  }
}

// runSearch (event) {
//   event.preventDefault()
//   console.log(this.state.searchInput)
//   request
//     .get(`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${this.state.searchInput}`)
//     .then(response => {
//       let searchResults = response.body.results
//       // console.log(searchResults)
//       if (searchResults.length === 0) {
//         this.setState({
//           noSearchResults: 'Sorry, no photos were found.'
//         })
//       } else {
//         this.setState({
//           photoArray: searchResults})
//         this.setState({
//           noSearchResults: ''
//         })
//       }
//     })

export default Contacts
