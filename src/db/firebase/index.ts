import { initializeApp } from "firebase/app"
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID
} = process.env

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

export default app