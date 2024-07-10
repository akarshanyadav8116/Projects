// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1DgHVVqup7Ila2ZNSoXFeAlDOkTfF0M",
  authDomain: "vite-contact-745cb.firebaseapp.com",
  projectId: "vite-contact-745cb",
  storageBucket: "vite-contact-745cb.appspot.com",
  messagingSenderId: "81051465965",
  appId: "1:81051465965:web:d646fa5a3ec1b05620f4e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);