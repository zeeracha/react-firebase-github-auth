// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADn-mr1j4v_tsj5KreWUel5pRRr162iQc",
  authDomain: "react-github-auth-943ee.firebaseapp.com",
  projectId: "react-github-auth-943ee",
  storageBucket: "react-github-auth-943ee.appspot.com",
  messagingSenderId: "722594989304",
  appId: "1:722594989304:web:f9bc266156906c00fb270d",
  measurementId: "G-FHBM62925E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Auth
const auth = getAuth();
// Initialize Firebase Firestore
const db = getFirestore();
export { auth, db } 