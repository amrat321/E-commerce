import firebase from 'firebase'
import 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDfuaq5MOHzEZpNeBF4jvv9axTWsXRn8Jo",
    authDomain: "eccomerce-d0a23.firebaseapp.com",
    databaseURL: "https://eccomerce-d0a23.firebaseio.com",
    projectId: "eccomerce-d0a23",
    storageBucket: "eccomerce-d0a23.appspot.com",
    messagingSenderId: "760561271838",
    appId: "1:760561271838:web:32c3a3ab4dfd42152f5a0f"
  };
  // Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.FacebookAuthProvider();
let providerApp = provider.setCustomParameters({'display': 'popup'});
export {Firebase,providerApp}