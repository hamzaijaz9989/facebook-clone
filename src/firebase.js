import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpfzeeA9CPk5wuXbtvEVQUHI2oEDtIXsM",
  authDomain: "fb-clone1-6f6f1.firebaseapp.com",
  projectId: "fb-clone1-6f6f1",
  storageBucket: "fb-clone1-6f6f1.appspot.com",
  messagingSenderId: "283964346280",
  appId: "1:283964346280:web:48c1bb8f1ca697d5c3979d",
  measurementId: "G-P1H2PFJ01M"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  export {auth,provider};
  export default db






// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };