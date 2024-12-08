import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

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
const emailInput = document.getElementById('createEmail');
const passwordInput = document.getElementById('createPassword');
const submitButton = document.getElementById('createAccountButton');

// Password Minimum Length (14)
// Password Must include 1 Special Character, Number, Uppercase

// Checking for password length
function passwordLength(password) {
    console.log('Password length', password.length);
    return password.length >= 14;
    }
// Checking if password includes special character
function passwordSpecial(password){
    let specialChar = /[@$!%*?&]/;
    return specialChar.test(password);
}
//Checking if password includes a number 
function passwordNumber(password){
    let numberChar = /\d/;
    return numberChar.test(password);
}
//Checking if password includes upper case 
function passwordUpper(password){
    let upperCaseChar = /[A-Z]/;
    return upperCaseChar.test(password);
}

// Event Listener for the create account button
submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page refresh

    const email = emailInput.value;
    const password = passwordInput.value;
    //alert('testing')
    
    // Individual password valdiation checks 
    if (!passwordLength(password)){
        alert("Password Must be at least 14 characters long.")
        return; 
    }
    if (!passwordSpecial(password)){
        alert("Password Must include at least 1 special character")
        return;
    }
    if (!passwordNumber(password)){
        alert("Password Must include at least 1 number")
        return;
    }
    if (!passwordUpper(password)){
        alert("Password Must include at least 1 uppercase")
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Creating account...");
            //Email Verifcation 
            sendEmailVerification(user)
            .then(() => {
                alert("Verification has been sent to your email. Please check your inbox!");
                window.location.href = "login.html"; // Redirect to login page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message);
        });
});