// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc9H2w9VI6BkKkKR6CJ4NIzLaWqlU_cTs",
  authDomain: "under-the-log.firebaseapp.com",
  projectId: "under-the-log",
  storageBucket: "under-the-log.appspot.com",
  messagingSenderId: "626253878707",
  appId: "1:626253878707:web:3a7621351332a54026a7c6",
  measurementId: "G-8H1YFHEJ45",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// auth is user
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// function that represents sign in for google
export const signInWithGoogle = async (getLogged, saveUID) => {
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
    }

    getLogged(user.uid);
    saveUID(user.uid);
  } catch (err) {
    console.error(err);
  }
};

export const logout = (getLoggedOut) => {
  signOut(auth);
  getLoggedOut();
};
