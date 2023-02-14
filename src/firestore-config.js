// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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
export const signInWithGoogle = async (getLogged) => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", `${user.uid}`), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
      await setDoc(doc(db, "users", `${user.uid}`, "curations", "favorites"), {
        favIds: [],
      });
      // await addDoc(collection(db, 'users', `${user.uid}`, 'curations'), {
      //   favIds: [],
      // })
    }

    getLogged(user.uid);
  } catch (err) {
    console.error(err);
  }
};
// signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//     const name = result.user.displayName;
//     const email = result.user.email;

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     name: result.user.name,
//     email: result.user.email,
//     uid: result.user.uid,
//   });
// }
// catch (error) {
//   console.error("Error adding document: ", error);
// }

// let usersRef = db.collection("users");

// usersRef.add({
//   displayEmail: {email},
//   displayName: {name}
// })
// .then(function(docRef) {
//   console.log("User added with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.log("Error adding user: ", error);
// })
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const logout = (getLoggedOut) => {
  signOut(auth);
  getLoggedOut();
};

// https://blog.logrocket.com/user-authentication-firebase-react-apps/
