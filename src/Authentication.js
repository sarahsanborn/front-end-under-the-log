import { signOut } from "firebase/auth";
import React from "react";
import { logout, signInWithGoogle } from "./firestore-config";
// import { MdOutlineClear } from "react-icons/md";

const Authentication = ({ isLoggedIn, getLogged, getLoggedOut }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className="signout-welcome-container">
          <p className="welcome">Welcome, {localStorage.getItem("name")}</p>
          <button className="google-signin" onClick={() => logout(getLoggedOut)}>Sign Out</button>
        </div>
      ) : (
        <button
          className="google-signin"
          onClick={() => signInWithGoogle(getLogged)}
        >
          Sign In
        </button>
      )}

      {/* <p>{localStorage.getItem("email")}</p> */}
    </div>
  );
};

export default Authentication;
