import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import Config from './config'

const app = firebase.initializeApp(Config)

const auth = app.auth()
const db = app.firestore()
const store = app.storage()

export {auth,db,store,app as default}

