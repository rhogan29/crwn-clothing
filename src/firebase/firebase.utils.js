import firebase from 'firebase/app';
// storage
import 'firebase/firestore';
// authentication
import 'firebase/auth';

// project config 
const config = {
    apiKey: "AIzaSyA3gU7_pe6H8q0AkzBtzRpNrswL8WOjfOQ",
    authDomain: "crwn-db-77695.firebaseapp.com",
    databaseURL: "https://crwn-db-77695.firebaseio.com",
    projectId: "crwn-db-77695",
    storageBucket: "",
    messagingSenderId: "23305190889",
    appId: "1:23305190889:web:14c8e808282d3c5d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  // always trigger google pop-up when using google sign in
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;