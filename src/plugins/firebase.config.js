import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDcKTCmJRy4f5ut2GLL1_ilD2B3vdtI0iY',
  authDomain: 'mbv-app.firebaseapp.com',
  projectId: 'mbv-app',
  storageBucket: 'mbv-app.appspot.com',
  messagingSenderId: '864056027637',
  appId: '1:864056027637:web:4d3349dd4c8860a16018bc',
  measurementId: 'G-GY97JF5GKJ',
}


// init firebase
initializeApp(firebaseConfig)

const auth = getAuth()
auth.languageCode = 'ru'

const db = getFirestore()

const storage = getStorage()

export {
  auth,
  db,
  storage,
}
