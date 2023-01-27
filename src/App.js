import Map from "./Map";
import axios from "axios";
import ObservationsList from "./ObservationsList";
import { useState, useEffect } from "react";

function App() {
  const [observationsList, setObservationsList] = useState([]);

  const URL = "https://api.inaturalist.org/v1";

  // BELOW WILL CHANGE TO RETRIEVE FROM STATE ONCE
  // LARGER GET CALL IS SET UP
  const getObservationByID = (id) => {
    axios
      .get(`${URL}/identifications`, {
        params: {
          id: id,
        },
      })
      .then((response) => {
        console.log("success!", response.data);
      })
      // .then((response) => {
      //   setObservationsList(response.data)
      //   console.log("success!", observationsList);
      // })
      .catch((error) => {
        console.log("ERROR!", error.response.data);
      });
  };

  useEffect(() => {
    getObservationByID(147215905);
  }, []);

  return (
    <div>
      <header>
        <h1>Under The Log</h1>
        <p>Search Bar</p>
        <p>Dropdown Filter</p>
      </header>
      <main>
        <Map></Map>
      </main>
    </div>
  );
}

export default App;
