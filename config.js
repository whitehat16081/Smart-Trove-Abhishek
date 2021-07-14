import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBkPM5SO8ID77R_yRRDmICIaVBhTqJW0fo",
    authDomain: "smart-trove.firebaseapp.com",
    projectId: "smart-trove",
    storageBucket: "smart-trove.appspot.com",
    messagingSenderId: "157216986682",
    appId: "1:157216986682:web:1348be2445defb2605c703",
    measurementId: "G-EJBER0LR6V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();