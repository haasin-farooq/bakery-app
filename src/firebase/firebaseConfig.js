import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDESHL_PJKaeUbzWyJNNdGp59XSTWP1h18",
    authDomain: "bakery-app-a184b.firebaseapp.com",
    databaseURL: "https://bakery-app-a184b.firebaseio.com",
    projectId: "bakery-app-a184b",
    storageBucket: "bakery-app-a184b.appspot.com",
    messagingSenderId: "949581561597",
    appId: "1:949581561597:web:1b93ef08b2b32950e28894"
};
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;