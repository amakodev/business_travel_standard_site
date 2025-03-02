// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArdHrVsKIRaNV4cab1WUXBlACCi24V7Z0",
  authDomain: "okamalabs-main.firebaseapp.com",
  databaseURL: "https://okamalabs-main-default-rtdb.firebaseio.com",
  projectId: "okamalabs-main",
  storageBucket: "okamalabs-main.firebasestorage.app",
  messagingSenderId: "146376197215",
  appId: "1:146376197215:web:c56722a56a5b41af9047ea",
  measurementId: "G-QWV8EDSZPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);