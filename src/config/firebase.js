
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcz9KyBzDduQkIGSGqwpn10D8xIAQLAq4",
    authDomain: "clone-app-5394f.firebaseapp.com",
    projectId: "clone-app-5394f",
    storageBucket: "clone-app-5394f.appspot.com",
    messagingSenderId: "916956354221",
    appId: "1:916956354221:web:7d73e804f7186f8dc31824",
    measurementId: "G-VW2F17VMJ8"
  };


  // Firebase //

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };