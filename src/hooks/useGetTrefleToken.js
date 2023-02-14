import { useEffect, useState } from "react";
const axios = require("axios");

export function useGetTrefleToken() {
  const [userTrefleToken, setUserTrefleToken] = useState("");
  const url = "OUR PATH FOR THE CLOUD FUNCTION";

  useEffect(() => {
    axios
      .get(`${url}/getTrefleToken`)
      .then((response) => {
        setUserTrefleToken(response);
      })
      .catch((err) => {
        console.log("useGetTrefleToken failed", err);
      });
  }, []);

  return userTrefleToken;
}

// ONLY CALLED ON USER LOGIN
// called everytime they login?
// what if the key times out between logins?
