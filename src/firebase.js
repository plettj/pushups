import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);

// Get Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {
  db,
  auth,
  analytics,
  googleProvider
};
