import { useEffect, useState } from "react";

export function useGetTrefleToken() {
  const [userTrefleToken, setUserTrefleToken] = useState("");
  const url = "OUR PATH FOR THE CLOUD FUNCTION"

  useEffect(() => {
    const response = await axios.get(`${url}/getTrefleToken`)
  }, []);

  return userTrefleToken
}


// ONLY CALLED ON USER LOGIN
// called everytime they login?
// what if the key times out between logins?