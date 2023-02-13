import React from "react";
import { signInWithGoogle } from "./firestore-config";
// import { MdOutlineClear } from "react-icons/md";

const Authentication = () => {
  return (
    <div>
      <button className="google-signin" onClick={signInWithGoogle}>
        Sign In
      </button>
      <p>Welcome, {localStorage.getItem("name")}!</p>
      {/* <p>{localStorage.getItem("email")}</p> */}
    </div>
  );
};

export default Authentication;
