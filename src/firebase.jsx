// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD84Ich5LUM8dub-bMWKF2Nlj3XCsF5HCM",
  authDomain: "my-project-4dcb1.firebaseapp.com",
  databaseURL:
    "https://my-project-4dcb1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-project-4dcb1",
  storageBucket: "my-project-4dcb1.appspot.com",
  messagingSenderId: "319787031139",
  appId: "1:319787031139:web:1a626b12a5b7a1ae92f656",
  measurementId: "G-G4N4Q02408",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
