// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA914PbOPf-rzt2k3bzhyLmR1e0l1xrYZg",
  authDomain: "clone-500af.firebaseapp.com",
  projectId: "clone-500af",
  storageBucket: "clone-500af.appspot.com",
  messagingSenderId: "893037475454",
  appId: "1:893037475454:web:c7b7afe10f0521411e0a2f",
  measurementId: "G-HV58S36PRL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };