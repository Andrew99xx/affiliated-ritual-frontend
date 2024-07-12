// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARRCfmMP6v3ZHaPHQ97H3mgTLRzpOJgas",
    authDomain: "affiliated-ritual.firebaseapp.com",
    projectId: "affiliated-ritual",
    storageBucket: "affiliated-ritual.appspot.com",
    messagingSenderId: "221732790906",
    appId: "1:221732790906:web:0aced04a382624056fd1c3",
    measurementId: "G-K4TY0MFZC9"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the Firebase services for use in your components
export { app, auth, db, storage, analytics };
