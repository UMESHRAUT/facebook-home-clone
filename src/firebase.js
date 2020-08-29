import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC9F6rVSZLXa18yU1eOSvFZqjFaRUpougs",
    authDomain: "facebook-clone-37c41.firebaseapp.com",
    databaseURL: "https://facebook-clone-37c41.firebaseio.com",
    projectId: "facebook-clone-37c41",
    storageBucket: "facebook-clone-37c41.appspot.com",
    messagingSenderId: "683960108559",
    appId: "1:683960108559:web:4ccc182c964965305cc57a",
    measurementId: "G-QCN3Y4EZDK"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig); 
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;