import React from "react";
import { signInWithGoogle } from "./firestore-config";
// import { MdOutlineClear } from "react-icons/md";

const Authentication = () => {
  return (
    <div>
      <button className="google-signin" onClick={signInWithGoogle}>
        Sign In
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
    </div>
  );
};

export default Authentication;
