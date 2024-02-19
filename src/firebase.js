import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALDFaj84qeJR7YJQJ7Hh71PRPtbNclpuk",
  authDomain: "pushups-mental-health.firebaseapp.com",
  projectId: "pushups-mental-health",
  storageBucket: "pushups-mental-health.appspot.com",
  messagingSenderId: "78466066851",
  appId: "1:78466066851:web:d24f93738f2b0b2a501216",
  measurementId: "G-WXNJ0TEJNV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const analytics = getAnalytics(app);
const db = firebase.firestore();

export default db;
