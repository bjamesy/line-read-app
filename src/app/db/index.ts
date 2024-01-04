// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBns8gq0hgjBuC_lJpAEicW2oZcJL10KTs",
  authDomain: "line-read-app.firebaseapp.com",
  projectId: "line-read-app",
  storageBucket: "line-read-app.appspot.com",
  messagingSenderId: "477343881975",
  appId: "1:477343881975:web:8249b0094c4203baa1d1f2",
  measurementId: "G-23KB6JTTEZ"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)