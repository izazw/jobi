//firebase.js

import { initializeApp } from "firebase/app";

//initialize Firebase
//configuration

const firebaseConfig = {
  apiKey: "AIzaSyBTRZLJspNcIW10hh4K0zK5B9w_IQ2n4Z4",
  authDomain: "jobi-c811f.firebaseapp.com",
  projectId: "jobi-c811f",
  storageBucket: "jobi-c811f.appspot.com",
  messagingSenderId: "154621102649",
  appId: "1:154621102649:web:be3cd2d5d2ebc2deb5dbe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;