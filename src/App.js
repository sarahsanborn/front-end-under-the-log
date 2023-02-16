import ReactMap from "./ReactMap";
import Dropdown from "./Dropdown";
import Authentication from "./Authentication";
import axios from "axios";
import { useState, useEffect } from "react";
import { db } from "./firestore-config";
import { doc, getDoc, updateDoc, getDocFromCache } from "firebase/firestore";
import SearchBar from "./SearchBar";
import About from "./About";
import Responsibility from "./Responsibility";
import "./App.css";
import newedibleList from "./newedibleList";
import FavSidebar from "./FavSidebar";

function App() {
  const DISPLAYONRENDERSPECIES = [
    "Arrowleaf Balsamroot",
    "Black Landscape Morel",
    "Chanterelle",
    "Lady Fern Fiddlehead",
    "Oyster Mushroom",
    "Red Huckleberry",
    "Salmonberry",
    "Stinging Nettle",
    "Strawberry",
    "Wood Sorrel",
  ];

  const MONTHS = [
    "null",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [observationsList, setObservationsList] = useState([]);
  const [filteredObservationsList, setFilteredObservationsList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [mainDisplay, setMainDisplay] = useState("React Map");
  const [selectNavItem, setSelectedNavItem] = useState("React Map");
  // MAP STATE
  const [viewState, setViewState] = useState({
    latitude: 47.31,
    longitude: -120.485,
    zoom: 6.1,
  });
  const [liked, setLiked] = useState(false);
  // SEARCH BAR STATE
  const [formData, setFormData] = useState("");
  // const [trefleToken, setTrefleToken] = useState("");
  // DROPDOWN STATE
  const [allSelected, setAllSelected] = useState(true);
  const [selectedSpecies, setSelectedSpecies] = useState(
    DISPLAYONRENDERSPECIES
  );
  const [isOpen, setIsOpen] = useState(false);
  // FAVORITES BOX STATE
  const [favOpen, setFavOpen] = useState(false);
  const [favIDs, setFavIDs] = useState([]);
  // LOGGEDIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUid, setUserUid] = useState("");

  const INAT_URL = "https://api.inaturalist.org/v1";
  // const TREFLE_URL = "https://trefle.io/api/v1";

  // *********************************************LOGIN FUNCTIONS START***********************************************
  const getLogged = (uid) => {
    setIsLoggedIn(true);
    getUserCurations(uid);
  };

  const getLoggedOut = () => {
    setIsLoggedIn(false);
    setFavOpen(false);
    setUserUid("");
    setFavIDs([]);
  };

  const saveUID = (uid) => {
    setUserUid(uid);
  };

  // *********************************************LOGIN FUNCTIONS END***********************************************
  // *********************************************MAP FUNCTIONS START***********************************************

  const changeMapView = (newview) => {
    setViewState(newview);
  };

  const resetMapView = () => {
    setViewState({
      longitude: -120.485,
      latitude: 47.31,
      zoom: 6.1,
    });
  };

  // *********************************************MAP FUNCTIONS END********************************************************
  // *********************************************CURATION LIST FUNCTIONS START********************************************

  const getUserCurations = async (uid) => {
    let userFavIds = [];

    const docRef = doc(db, "users", `${uid}`, "curations", "favorites");

    try {
      const targetDocCached = await getDocFromCache(docRef);
      // Document was found in the cache. If no cached document exists,
      // an error will be returned to the 'catch' block below.
      userFavIds = targetDocCached.data().observationIDs;
      console.log("Cached document data:", userFavIds);
    } catch (e) {
      console.log("Error getting cached document:", e);
      const targetDoc = await getDoc(docRef);
      userFavIds = targetDoc.data().favIds;
      console.log("Server collection data:", userFavIds);
    }
    setFavIDs((currentIDs) => [...currentIDs, ...userFavIds]);
  };

  const getObservationByID = async (id_list) => {
    const resultObjectsList = [];
    for (let id of id_list) {
      try {
        const response = await axios.get(`${INAT_URL}/observations/`, {
          params: {
            id: id,
          },
        });

        resultObjectsList.push(dataUnpacker(response.data.results, "favs"));
        console.log("successly retreived observation!", response.data.results);
      } catch (err) {
        console.log("ERROR! getObservationByID failed", err);
      }
    }

    setFavoritesList(resultObjectsList);
  };

  const displayHeart = (reset = false) => {
    if (!isLoggedIn) {
      return null;
    } else {
      if (reset === "reset") {
        setLiked(false);
      } else {
        setLiked(true);
      }
    }
  };

  const handleFavorite = (id) => {
    setLiked(!liked);
    if (isLoggedIn) {
      if (favIDs.includes(id)) {
        setFavIDs((currentIDs) =>
          currentIDs.filter((i) => {
            return i !== id;
          })
        );
      } else {
        setFavIDs((currentIDs) => [...currentIDs, id]);
      }
    } else {
      window.alert("Please login to add an observation to your favorites.");
      setLiked(false);
    }
  };

  const seeFavorites = () => {
    favOpen ? setFavOpen(false) : setFavOpen(true);
    resetMapView();
  };

  const updateFavoritesInDB = () => {
    updateDoc(doc(db, "users", `${userUid}`, "curations", "favorites"), {
      favIds: [...favIDs],
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      getObservationByID(favIDs);
      updateFavoritesInDB();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favIDs]);

  // *********************************************CURATION LIST FUNCTIONS END**********************************************
  // *********************************************SEARCH BAR FUNCTIONS START***********************************************

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleDropdownClear = () => {
    setAllSelected(false);
    setSelectedSpecies([]);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
    handleDropdownClear();
    resetFilteredObservations(true);
    pullFilteredObservations(formData);
    resetMapView();
    setFavOpen(false);
  };

  const handleSearchClear = () => {
    setFormData("");
    resetFilteredObservations();
    setAllSelected(true);
  };

  // *********************************************SEARCH BAR FUNCTIONS END************************************************

  // *********************************************DROPDOWN FUNCTIONS START************************************************

  const handleSelection = (species) => {
    setAllSelected(false);
    if (selectedSpecies.includes(species)) {
      setSelectedSpecies(
        selectedSpecies.filter((selectedPlant) => selectedPlant !== species)
      );
    } else {
      setSelectedSpecies([...selectedSpecies, species]);
    }
  };

  const handleDone = () => {
    setIsOpen(false);

    resetFilteredObservations(true);
    setFavOpen(false);

    if (selectedSpecies) {
      pullFilteredObservations(selectedSpecies);
      setFormData("");
      resetMapView();
    }
  };

  const handleSelectAll = () => {
    console.log("allSelected", allSelected);
    if (allSelected === false) {
      setAllSelected(true);
      setSelectedSpecies(DISPLAYONRENDERSPECIES);
    } else {
      handleDropdownClear();
    }
  };

  const alternateOpenClose = () => {
    setIsOpen(!isOpen);
  };

  // *********************************************DROPDOWN FUNCTIONS END**************************************************

  const resetFilteredObservations = (temp = false) => {
    if (temp) {
      setFilteredObservationsList([{}]);
    } else {
      setFilteredObservationsList([]);
    }
  };

  const sortFilterParameters = (filterList) => {
    if (typeof filterList === "string") {
      filterList = [filterList];
    }
    let dbSearchTaxa = [];
    let apiSearchTaxa = [];

    const filtersAccountedFor = [];

    const lowerCaseRenderList = DISPLAYONRENDERSPECIES.map((item) =>
      item.toLowerCase()
    );

    for (let item of newedibleList) {
      for (let filter of filterList) {
        if (lowerCaseRenderList.includes(filter.toLowerCase())) {
          if (item.label.toLowerCase() === filter.toLowerCase()) {
            dbSearchTaxa = dbSearchTaxa.concat(item.value);
            filtersAccountedFor.push(filter);
          }
        }
      }
    }

    for (let filter of filterList) {
      if (!filtersAccountedFor.includes(filter)) {
        apiSearchTaxa.push(filter);
      }
    }

    return [dbSearchTaxa, apiSearchTaxa];
  };

  // MUST DEPLOY TREFLE FUNCTION BEFORE ACTIVATING:
  // const checkEdibleSearch = async (taxa) => {
  //   let newTaxa = taxa;
  //   const token = "state variable returned by useGetTrefleToken hook";

  //   try {
  //     const response = await axios.get(
  //       `${TREFLE_URL}/plants/search`,
  //       // `${TREFLE_URL}/plants/search?token=${token}&q=${taxa}`

  //       {
  //         params: {
  //           q: taxa,
  //           token: token,
  //           // filter[edible]: true,
  //           // filter_not[scientific_name]: null
  //         },
  //       }
  //     );
  //     newTaxa = await response.data[0]["scientific_name"];
  //     // newTaxa = await response.data.data[0]["scientific_name"]
  //   } catch (err) {
  //     console.log("species not found in trefle", err);
  //   }

  //   getObservationsByTaxon(newTaxa, true);
  // };

  const pullFilteredObservations = (filterList) => {
    const results = sortFilterParameters(filterList);
    const dbSearchTaxa = results[0];
    const apiSearchTaxa = results[1];

    const updatedObservations = [];

    if (apiSearchTaxa.length !== 0) {
      for (let taxa of apiSearchTaxa) {
        // TO SWITCH TO EDIBLE PLANT API CROSS REFERENCE:
        // checkEdibleSearch(taxa);
        // and comment out line below
        getObservationsByTaxon(taxa, true);
      }
    }

    if (dbSearchTaxa.length !== 0) {
      for (let observation of observationsList) {
        for (let latin of dbSearchTaxa) {
          if (latin === observation.properties.latin_name) {
            updatedObservations.push(observation);
          }
        }
      }
    }

    setFilteredObservationsList((currentObservations) => [
      ...currentObservations,
      ...updatedObservations,
    ]);
  };

  // DATA UNPACKER FOR GEOJSON

  const dataUnpacker = (results, filter) => {
    const updatedObservations = [];

    for (let i in results) {
      let newImgUrl = "";
      if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "jpg"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -10)}large.jpg`;
      } else if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "peg"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -11)}large.jpeg`;
      } else if (
        results[i]["observation_photos"][0]["photo"]["url"].slice(-3) === "png"
      ) {
        newImgUrl = `${results[i]["observation_photos"][0]["photo"][
          "url"
        ].slice(0, -10)}large.png`;
      } else {
        continue;
      }

      const initialDate = results[i]["created_at_details"]["date"];
      const newDate = `${
        MONTHS[parseInt(initialDate.slice(5, 7))]
      } ${initialDate.slice(8)}, ${initialDate.slice(0, 4)}`;

      const info = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: results[i]["geojson"]["coordinates"],
        },
        properties: {
          id: results[i]["id"],
          common_name: results[i]["taxon"]["preferred_common_name"],
          latin_name: results[i]["taxon"]["name"],
          date: newDate,
          image_url: newImgUrl,
          latitude: results[i]["geojson"]["coordinates"][1],
          longitude: results[i]["geojson"]["coordinates"][0],
          native: results[i]["taxon"]["native"],
        },
      };

      updatedObservations.push(info);
    }

    if (filter === false) {
      setObservationsList((currentObservations) => [
        ...currentObservations,
        ...updatedObservations,
      ]);
    } else if (filter === "favs") {
      return updatedObservations[0];
    } else {
      setFilteredObservationsList((currentObservations) => [
        ...currentObservations,
        ...updatedObservations,
      ]);
    }
  };

  const getObservationsByTaxon = async (taxon, filter = false, page = 1) => {
    try {
      const response = await axios.get(`${INAT_URL}/observations`, {
        params: {
          taxon_name: taxon,
          place_id: 46,
          year: [2021, 2022, 2023],
          photos: true,
          quality_grade: "research",
          captive: false,
          geoprivacy: "open",
          per_page: 200,
          page: page,
        },
      });

      const numOfPages = 1 + Math.floor(response.data.total_results / 200);

      if (numOfPages === 1) {
        if (filter && response.data.total_results === 0) {
          window.alert("This Search Produced No Results");
        } else {
          dataUnpacker(response.data.results, filter);
        }
      } else {
        let currentPage = page;
        dataUnpacker(response.data.results, filter);

        if (currentPage === numOfPages) {
          return null;
        }

        currentPage++;
        // Calls function recursively with current page
        getObservationsByTaxon(taxon, filter, currentPage);
      }
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  useEffect(() => {
    for (let item of newedibleList) {
      if (DISPLAYONRENDERSPECIES.includes(item.label)) {
        for (let taxa of item.value) {
          getObservationsByTaxon(taxa);
        }
      }
    }
    // getObservationsByTaxon does not have any dependencies that change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <div>
          <h1 className="title">UNDER THE LOG</h1>
          <p className="tagline">Your Washington State foraging companion</p>
        </div>
        <ul className="navbar-list">
          <li
            style={
              selectNavItem === "React Map"
                ? { fontWeight: "bold", background: "#00A6A6" }
                : {}
            }
            onClick={() => {
              setMainDisplay("React Map");
              setSelectedNavItem("React Map");
            }}
          >
            Map
          </li>
          <li
            style={
              selectNavItem === "About"
                ? { fontWeight: "bold", background: "#00A6A6" }
                : {}
            }
            onClick={() => {
              setMainDisplay("About");
              setSelectedNavItem("About");
            }}
          >
            About
          </li>
          <li
            style={
              selectNavItem === "Responsibility"
                ? { fontWeight: "bold", background: "#00A6A6" }
                : {}
            }
            onClick={() => {
              setMainDisplay("Responsibility");
              setSelectedNavItem("Responsibility");
            }}
          >
            Forage Responsibily
          </li>
        </ul>
        <div className="authentication">
          <Authentication
            isLoggedIn={isLoggedIn}
            getLogged={getLogged}
            getLoggedOut={getLoggedOut}
            saveUID={saveUID}
          />
        </div>
      </header>
      <main>
        {mainDisplay === "React Map" && (
          <ReactMap
            viewState={viewState}
            changeMapView={changeMapView}
            dataGeoJSON={{
              type: "FeatureCollection",
              features: favOpen
                ? favoritesList
                : filteredObservationsList.length !== 0
                ? filteredObservationsList
                : observationsList,
            }}
            displayHeart={displayHeart}
            liked={liked}
            favIDs={favIDs}
            handleFavorite={handleFavorite}
          />
        )}
        {mainDisplay === "React Map" && (
          <div className="dropsearch-container">
            {isLoggedIn ? (
              <button
                className={
                  favOpen ? "favorite-button-clicked" : "favorite-button"
                }
                onClick={() => seeFavorites()}
              >
                See Favorites
              </button>
            ) : null}
            <Dropdown
              handleSelection={handleSelection}
              handleDone={handleDone}
              handleSelectAll={handleSelectAll}
              alternateOpenClose={alternateOpenClose}
              allSelected={allSelected}
              selectedSpecies={selectedSpecies}
              isOpen={isOpen}
              displaySpecies={DISPLAYONRENDERSPECIES}
            />
            <SearchBar
              handleChange={handleChange}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchClear={handleSearchClear}
              formData={formData}
            />
          </div>
        )}
        {mainDisplay === "React Map" && favOpen === true ? (
          <div className="favSidebar-on-map">
            <FavSidebar favoritesList={favoritesList} />
          </div>
        ) : null}
        {mainDisplay === "About" && <About />}
        {mainDisplay === "Responsibility" && <Responsibility />}
      </main>
    </div>
  );
}

export default App;
