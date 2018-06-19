import React, { Component } from 'react'
import './App.css'
import firebase from './firebase'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

let database = firebase.database()

class EditContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
    console.log(this.props)
    const contactId = this.props.match.params.id
    return (
      firebase.database().ref('/contacts/' + contactId)
        .once('value')
        .then((snapshot) => {
          console.log(snapshot.val())
          console.log(snapshot.val().name)

          // var name = snapshot.val().name
          // var email = snapshot.val().email
          // var address = snapshot.val().address
          // var house = snapshot.val().house
          // var birthday = snapshot.val().birthday
          // var company = snapshot.val().company
          // var title = snapshot.val().title
          this.setState({
            name: snapshot.val().name,
            email: snapshot.val().email,
            address: snapshot.val().address,
            house: snapshot.val().house,
            birthday: snapshot.val().birthday,
            company: snapshot.val().company,
            title: snapshot.val().title
          })
        }
        )
    )
  }

  // firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //   // ...
  // });

  // const contactsList = database.ref('contacts')
  //   contactsList.once('value').then((snapshot) => {
  //     let contacts = snapshot.val()
  //     let newState = []
  //     for (let contact in contacts) {
  //       newState.push({
  //         id: contact,
  //         name: contacts[contact].name,
  //         email: contacts[contact].email,
  //         address: contacts[contact].address,
  //         house: contacts[contact].house,
  //         birthday: contacts[contact].birthday,
  //         company: contacts[contact].company,
  //         title: contacts[contact].title
  //       })
  //     }
  //     this.setState({
  //       contacts: newState
  //     })
  //   })

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
    const contactId = this.props.match.params.id
    var editedContact = firebase.database().ref('/contacts/' + contactId)
    editedContact.update({
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
        <form className='addContactForm' type='submit' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
        Email: <input type='text' name='email' onChange={this.handleChange} value={this.state.email} />
        Address: <input type='text' name='address' onChange={this.handleChange} value={this.state.address} />
        Hogwarts House:
          <select name='house' value={this.state.house} onChange={this.handleChange}>
            <option value='No House'>No House</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
          </select>
        Birthday: <input type='text' name='birthday' onChange={this.handleChange} value={this.state.birthday} />
        Organization: <input type='text' name='company' onChange={this.handleChange} value={this.state.company} />
        Job Title: <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditContact
