import React from "react";
import { logout, signInWithGoogle } from "./firestore-config";

const Authentication = ({ isLoggedIn, getLogged, getLoggedOut, saveUID }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className="signout-welcome-container">
          <p className="welcome">Welcome, {localStorage.getItem("name")}</p>
          <button
            className="google-signin"
            onClick={() => logout(getLoggedOut)}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="google-signin"
          onClick={() => signInWithGoogle(getLogged, saveUID)}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Authentication;
