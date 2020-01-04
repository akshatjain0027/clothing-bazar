import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-wybgSVkI6xh8BHH51XVvmJ9HwXL6F7M",
    authDomain: "clothing-bazzar-db.firebaseapp.com",
    databaseURL: "https://clothing-bazzar-db.firebaseio.com",
    projectId: "clothing-bazzar-db",
    storageBucket: "clothing-bazzar-db.appspot.com",
    messagingSenderId: "610351590015",
    appId: "1:610351590015:web:3220493018cbfe30d2ad4a",
    measurementId: "G-54NM372NN7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting firebase authentication
export const auth = firebase.auth()
// exporting firebase firestore(database)
export const firestore = firebase.firestore()

// Managing google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase