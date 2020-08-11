import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTC2aGZ4OD45cBxcZ936EUxRweDlxMtdQ",
    authDomain: "slack-clone-e2ba3.firebaseapp.com",
    databaseURL: "https://slack-clone-e2ba3.firebaseio.com",
    projectId: "slack-clone-e2ba3",
    storageBucket: "slack-clone-e2ba3.appspot.com",
    messagingSenderId: "341468645988",
    appId: "1:341468645988:web:5d3fae4cc2a9c9e585ad71",
    measurementId: "G-3L0XVWPXNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db;