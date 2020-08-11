import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAYykpZEzaoeTIWEp6MvJjrZqgdl6WBgrE",
  authDomain: "slackclone-9efd0.firebaseapp.com",
  databaseURL: "https://slackclone-9efd0.firebaseio.com",
  projectId: "slackclone-9efd0",
  storageBucket: "slackclone-9efd0.appspot.com",
  messagingSenderId: "997157361776",
  appId: "1:997157361776:web:6f07f4a595744f19c23cb5",
  measurementId: "G-CVBQ9Y9BS8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db;