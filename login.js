// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW2h1bq8fVxf4sQBfo8XMUWOTv8mRQjSo",
  authDomain: "email-authentication-4f93e.firebaseapp.com",
  projectId: "email-authentication-4f93e",
  storageBucket: "email-authentication-4f93e.appspot.com",
  messagingSenderId: "337861350216",
  appId: "1:337861350216:web:2900a1d44e0824c7f2597d",
  measurementId: "G-H1DWTDBSPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Grab input and submit button fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('loginButton');

// Event Listener for the login button
submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page refresh

    const email = emailInput.value;
    const password = passwordInput.value;
    // alert('testing');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating account...");
            window.location.href = "signed.html" // Redirect you to signed.html (verified sign in) 

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage); 
        });
});
