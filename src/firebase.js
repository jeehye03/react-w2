// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbt4kCf4rL153N5e30ZQMVJSX-cSn4HLA",
  authDomain: "mydictionary-f3596.firebaseapp.com",
  projectId: "mydictionary-f3596",
  storageBucket: "mydictionary-f3596.appspot.com",
  messagingSenderId: "695570858033",
  appId: "1:695570858033:web:4b3f349e99a13ee13a5510",
  measurementId: "G-CCSMR4KM48",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// export const db = getFirestore();


const db = getFirestore();
export {db};


