import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1dzYdJa4rYAnqRaezuyzHMzLcURGOQeI",
  authDomain: "english-simple-course.firebaseapp.com",
  databaseURL: "https://english-simple-course.firebaseio.com",
  projectId: "english-simple-course",
  storageBucket: "",
  messagingSenderId: "613357331515",
  appId: "1:613357331515:web:8b494dc5edadcf2e"
};

firebase.initializeApp (firebaseConfig);
firebase.firestore().settings({timestampsInSnapshot: true});

export default firebase;
