// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6a345.firebaseapp.com",
  projectId: "mern-blog-6a345",
  storageBucket: "mern-blog-6a345.appspot.com",
  messagingSenderId: "781047900586",
  appId: "1:781047900586:web:4084bcf26aaa4ef424a3d3",
  measurementId: "G-ZZ0R1YWY55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
