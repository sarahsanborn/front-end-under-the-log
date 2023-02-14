const functions = require("@google-cloud/functions-framework");
const axios = require("axios");

functions.http("getTrefleToken", (req, res) => {
  const origin = `${req.origin}`;

  axios
    .get(
      `https://trefle.io/api/auth/claim?token=${process.env.REACT_APP_TREFLE_KEY}&origin=${origin}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log("getTrefleToken failed", err);
      res.send({});
    });
});
