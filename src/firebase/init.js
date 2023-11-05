// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"; TipTrack\src\firebase\init.js
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCepH1_yUBz09YwCwztpDGP6IJnGGlpYKk",
  authDomain: "tiptrack-8aac0.firebaseapp.com",
  projectId: "tiptrack-8aac0",
  storageBucket: "tiptrack-8aac0.appspot.com",
  messagingSenderId: "140450121391",
  appId: "1:140450121391:web:28d6b9cac5484a2016765a",
  measurementId: "G-CES2JPTD6R"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// init firestore service
const db = getFirestore();
const auth = getAuth(app); 

export  { db, auth };