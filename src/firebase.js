import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjMzeUPZmD2hI6BgQrrleSjB7FOSFSqUc",
  authDomain: "clone-demo-app-5c20c.firebaseapp.com",
  databaseURL: "https://clone-demo-app-5c20c-default-rtdb.firebaseio.com",
  projectId: "clone-demo-app-5c20c",
  storageBucket: "clone-demo-app-5c20c.appspot.com",
  messagingSenderId: "588453625892",
  appId: "1:588453625892:web:257468777ee204cfca18b1",
  measurementId: "G-Y2YZ5TBDMH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
