// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIqbAugQ2Y5eZqIF6zcCVp2BsW7htmLs",
  authDomain: "oz-appleapp.firebaseapp.com",
  projectId: "oz-appleapp",
  storageBucket: "oz-appleapp.appspot.com",
  messagingSenderId: "932324558197",
  appId: "1:932324558197:web:8f1d81f2c2ead87c987f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;