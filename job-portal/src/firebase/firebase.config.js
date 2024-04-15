// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAShJuPn0edp3--YIeTA0mgYz8fJweRdb8",
  authDomain: "mern-job-portal-7557d.firebaseapp.com",
  projectId: "mern-job-portal-7557d",
  storageBucket: "mern-job-portal-7557d.appspot.com",
  messagingSenderId: "419414566234",
  appId: "1:419414566234:web:ba6686309b1a70359dbf63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app