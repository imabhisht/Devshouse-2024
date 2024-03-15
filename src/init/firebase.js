// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxPJ8J8louMizjYo9BmTryrXvmdoyLagU",
  authDomain: "buildify-ai.firebaseapp.com",
  projectId: "buildify-ai",
  storageBucket: "buildify-ai.appspot.com",
  messagingSenderId: "51882905310",
  appId: "1:51882905310:web:8ec3fab2874282b2587c4f",
  measurementId: "G-4V34Y3P9LK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);