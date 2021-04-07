import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCiZE1nvX0FX156qMQoL61ASJS-QrtYAGk",
    authDomain: "loghours-3309e.firebaseapp.com",
    databaseURL: "https://loghours-3309e.firebaseio.com",
    projectId: "loghours-3309e",
    storageBucket: "loghours-3309e.appspot.com",
    messagingSenderId: "937481984887",
    appId: "1:937481984887:web:47adb80e5e845806261f72",
    measurementId: "G-J2JV8JBLQ9",
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase