// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAc9H2w9VI6BkKkKR6CJ4NIzLaWqlU_cTs",
  authDomain: "under-the-log.firebaseapp.com",
  projectId: "under-the-log",
  storageBucket: "under-the-log.appspot.com",
  messagingSenderId: "626253878707",
  appId: "1:626253878707:web:3a7621351332a54026a7c6",
  measurementId: "G-8H1YFHEJ45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// set up Firestore DB
export const db = getFirestore(app);

// set up Authentication
// auth is user
export const auth = getAuth(app);
// set up Google Authentication
const provider = new GoogleAuthProvider();

// function that represents sign in for google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;

      // local storage is not encrypted
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
