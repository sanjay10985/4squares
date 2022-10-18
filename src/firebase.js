// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiiooR7mGg0edGBY4q3I8cyRLY2f8wJqU",
  authDomain: "react-one-304ba.firebaseapp.com",
  projectId: "react-one-304ba",
  storageBucket: "react-one-304ba.appspot.com",
  messagingSenderId: "964287880160",
  appId: "1:964287880160:web:8ee70157dc4516c10f2985"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);