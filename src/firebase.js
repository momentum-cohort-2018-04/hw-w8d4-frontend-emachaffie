import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let config = {
  apiKey: 'AIzaSyCK2dJ8U6566F5pNCDJBQvokNA7efRhS0Q',
  authDomain: 'accio-contacts.firebaseapp.com',
  databaseURL: 'https://accio-contacts.firebaseio.com',
  projectId: 'accio-contacts',
  storageBucket: 'accio-contacts.appspot.com',
  messagingSenderId: '194780843503'
}

firebase.initializeApp(config)

export default firebase
