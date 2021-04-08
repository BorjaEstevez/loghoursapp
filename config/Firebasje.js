import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAS8aRic-PN04KPhCZiqKrFTiw8Mi0T5fc",
    authDomain: "loghours-571d5.firebaseapp.com",
    databaseURL: "https://loghours-571d5.firebaseio.com",
    projectId: "loghours-571d5",
    storageBucket: "loghours-571d5.appspot.com",
    messagingSenderId: "114516881391",
    appId: "1:114516881391:web:cbc88e7d1b8b861379901a",
    measurementId: "G-37WDBKWFKW"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase