import firebase from 'firebase/app';
import 'firebase/firestore';
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

  // pass the userAuth into this function in app.js
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if userAuth doesnt exist, return out
    if (!userAuth) return;

    // if it exists, set userRef to the .doc of the users collection 
    // with the proper uid
    // this is aslo known as a QueryReference
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // also, get a snapshot of that userrefs information
    // for later use
    // this contains the property 'exists'
    const snapShot = await userRef.get();

    // if the snapshot does not exist, we will create 
    // the data. If it does, just return the userRef
    if (!snapShot.exists) {
      // get the display name and email from the userauth object
      const { displayName, email } = userAuth;
      // get the time stamp of when it was created
      const createdAt = new Date();

      // async request to our database to actually 
      // store this user info
      try {
        // .set will create the user 
        // pass in all the data you want to have
        // on the user object
        await userRef.set({
          displayName,
          email,
          createdAt,
          // any additional data we might want later 
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  // ***** initialize firebase *****
  firebase.initializeApp(config);

  // export these, now the rest of the app has access 
  // if they need auth or database access
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // google sign in provider from firebase
  const provider = new firebase.auth.GoogleAuthProvider();

  // custom parameters below
  // always trigger google pop-up when using google sign in
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;