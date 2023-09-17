// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqrtT8-ZADGzptwmvCYZz9MoVd8gisq5I",
  authDomain: "vite-contacts-61c66.firebaseapp.com",
  projectId: "vite-contacts-61c66",
  storageBucket: "vite-contacts-61c66.appspot.com",
  messagingSenderId: "980714757709",
  appId: "1:980714757709:web:0fbbab321eca26c6c14604",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
