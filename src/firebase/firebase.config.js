import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBiaEB6VxCmSKdJDxRXf6wtnVDUBI-IAkw",
    authDomain: "workradio-faea4.firebaseapp.com",
    databaseURL: "https://workradio-faea4.firebaseio.com",
    projectId: "workradio-faea4",
    storageBucket: "workradio-faea4.appspot.com",
    messagingSenderId: "946247199142",
    appId: "1:946247199142:web:59e2cd11079237485fc767",
    measurementId: "G-DZ4J2XCK59"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

// export utils/refs
export {
  firebase,
  db,
}