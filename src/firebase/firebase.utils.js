import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPb9gsLxU3HEoD4jQd53v2tXKKwPWlvwg",
    authDomain: "udemy-crown-clothings.firebaseapp.com",
    databaseURL: "https://udemy-crown-clothings.firebaseio.com",
    projectId: "udemy-crown-clothings",
    storageBucket: "udemy-crown-clothings.appspot.com",
    messagingSenderId: "970903146090",
    appId: "1:970903146090:web:b24f1c4a6be1920dfcc413",
    measurementId: "G-TVCETPY1VR"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;