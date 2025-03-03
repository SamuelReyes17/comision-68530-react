// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCulsCHteSHBFTcKBVYrFH3UreU7aLuu4U",
  authDomain: "comision-68530-samuelreyes.firebaseapp.com",
  projectId: "comision-68530-samuelreyes",
  storageBucket: "comision-68530-samuelreyes.firebasestorage.app",
  messagingSenderId: "984305767273",
  appId: "1:984305767273:web:c8e728f3358a115650e3f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
