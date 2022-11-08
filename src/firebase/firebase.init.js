// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPjn3Ai3FKPHhF5V0JwZDa5tjlg7Q826E",
  authDomain: "artihc-photography.firebaseapp.com",
  projectId: "artihc-photography",
  storageBucket: "artihc-photography.appspot.com",
  messagingSenderId: "201747827028",
  appId: "1:201747827028:web:925e2f5a4783e70450a0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;