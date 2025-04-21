// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHKdL30ItG0keGWW13sg9GG4V_x-cOLXI",
  authDomain: "boombuy-d17d4.firebaseapp.com",
  projectId: "boombuy-d17d4",
  storageBucket: "boombuy-d17d4.firebasestorage.app",
  messagingSenderId: "298247434462",
  appId: "1:298247434462:web:c346b61bcbb63caf78d24f",
  measurementId: "G-HCB2JLB5G9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);