// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEDmMmV-5NikdbeV8g9chsQJIwCquOCpI",
    authDomain: "delight-departures.firebaseapp.com",
    projectId: "delight-departures",
    storageBucket: "delight-departures.appspot.com",
    messagingSenderId: "35451733638",
    appId: "1:35451733638:web:533c883490b71f96ecf307",
    measurementId: "G-WGQ5BDE961"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore();

export {db} ;