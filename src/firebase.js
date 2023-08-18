// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy96KOadLuuBZW6WetOV8SzmCEXU3F9A8",
  authDomain: "chat-react-native-26baf.firebaseapp.com",
  projectId: "chat-react-native-26baf",
  storageBucket: "chat-react-native-26baf.appspot.com",
  messagingSenderId: "341867455020",
  appId: "1:341867455020:web:db5cbcb67304b9b2f96789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
