import firebase from 'firebase'
import secrets from './secrets.json'

var config = {
  apiKey: secrets.firebaseApiKey,
  authDomain: 'vueground.firebaseapp.com',
  databaseURL: 'http://localhost:5000',
  projectId: 'vueground',
  storageBucket: 'vueground.appspot.com',
  messagingSenderId: '688461864638'
}

firebase.initializeApp(config)

export default firebase
