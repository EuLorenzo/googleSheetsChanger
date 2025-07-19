// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2VMTSqVTdrBn43XypxZ2KS9dd9FFQfE",
  authDomain: "sheetschanger.firebaseapp.com",
  projectId: "sheetschanger",
  storageBucket: "sheetschanger.firebasestorage.app",
  messagingSenderId: "292229444970",
  appId: "1:292229444970:web:56027acce5a0ca0798e113",
  measurementId: "G-JXPWHRX2LE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/spreadsheets");
provider.addScope("https://www.googleapis.com/auth/drive.readonly");

export { app, analytics, auth, provider };
