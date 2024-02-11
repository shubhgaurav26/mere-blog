// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cd889.firebaseapp.com",
  projectId: "mern-blog-cd889",
  storageBucket: "mern-blog-cd889.appspot.com",
  messagingSenderId: "405914691392",
  appId: "1:405914691392:web:f3acff7c4e62bef191bca5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);