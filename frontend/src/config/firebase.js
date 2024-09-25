import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config (Get this from Firebase Console)

const firebaseConfig = {
    apiKey: "AIzaSyDke1Cvq4wdpqn3rzsf-45a7AQb1Od-eGc",
    authDomain: "cherry-on-top-590e0.firebaseapp.com",
    projectId: "cherry-on-top-590e0",
    storageBucket: "cherry-on-top-590e0.appspot.com",
    messagingSenderId: "923563795774",
    appId: "1:923563795774:web:884794b2b311354565b86f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();