import React from "react";
import { signInWithGoogle } from "./firestore-config";
// import { MdOutlineClear } from "react-icons/md";

const Authentication = ({ isLoggedIn, getLogged }) => {
  return (
    <div>
      {isLoggedIn ? (
        <button
          className="google-signin"
          onClick={() => signInWithGoogle(getLogged)}
        >
          Sign In
        </button>
      ) : (
        <p>Welcome, {localStorage.getItem("name")}!</p>
      )}

      {/* <p>{localStorage.getItem("email")}</p> */}
    </div>
  );
};

export default Authentication;
