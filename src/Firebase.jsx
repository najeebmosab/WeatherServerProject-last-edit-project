import { initializeApp } from "firebase/app";
import  firebase  from "firebase/app";
import  "firebase/auth"  ;
import  "firebase/firestore"  ;
import  "firebase/storage"  ;
const firebaseConfig = {
  apiKey: "AIzaSyDWIFz5r5FEE6su4aKqu2EKP57mJDZ7TuA",
  authDomain: "weatherserver-c7c97.firebaseapp.com",
  projectId: "weatherserver-c7c97",
  storageBucket: "weatherserver-c7c97.appspot.com",
  messagingSenderId: "345095470276",
  appId: "1:345095470276:web:7f9c42f7b72749f1dfdd91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const timestamp = firebase.firestore.fieldValue.serverTimestamp;