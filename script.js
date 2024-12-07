// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW2h1bq8fVxf4sQBfo8XMUWOTv8mRQjSo",
  authDomain: "email-authentication-4f93e.firebaseapp.com",
  projectId: "email-authentication-4f93e",
  storageBucket: "email-authentication-4f93e.firebasestorage.app",
  messagingSenderId: "337861350216",
  appId: "1:337861350216:web:2900a1d44e0824c7f2597d",
  measurementId: "G-H1DWTDBSPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


