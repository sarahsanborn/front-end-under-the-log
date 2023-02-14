import ReactMap from "./ReactMap";
import Dropdown from "./Dropdown";
import Authentication from "./Authentication";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { db } from "./firestore-config";
import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import About from "./About";
import Responsibility from "./Responsibility";
import "./App.css";
import edibleList from "./edibleList";
import newedibleList from "./newedibleList";
import FavSidebar from "./FavSidebar";

function App() {
  const [observationsList, setObservationsList] = useState([]);
  const [filteredObservationsList, setFilteredObservationsList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainDisplay, setMainDisplay] = useState("React Map");
  const [selectNavItem, setSelectedNavItem] = useState("React Map");
  // FIRESTORE DATA
  // const userCurations = collection(db, "users");
  // MAP STATE
  const [viewState, setViewState] = useState({
    latitude: 47.31,
    longitude: -120.485,
    zoom: 6.1,
  });
  const [liked, setLiked] = useState(false);
  const mapRef = useRef(null);
  const [popupInfo, setPopupInfo] = useState(null);
  // SEARCH BAR STATE
  const [formData, setFormData] = useState("");
  const [trefleToken, setTrefleToken] = useState("");
  // DROPDOWN STATE
  const [allSelected, setAllSelected] = useState(true);
  // const [plantsSelected, setPlantsSelected] = useState(false);!!!!!!
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // FAVORITES BOX STATE
  const [favOpen, setFavOpen] = useState(false);
  const [favIDs, setFavIDs] = useState([]);
  // LOGGEDIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const INAT_URL = "https://api.inaturalist.org/v1";
  const TREFLE_URL = "https://trefle.io/api/v1";

  // if you set new state multiple times, make sure your function is not capturing data from the
  // previous render
  // this was uses useDSate hook to get the incremental updates that are available to you in the hooks
  // this is the reducer pattern; supplying a less complicated reducer function to the setstate
  // "here is a function that does "
  // reducer = state +action produces new state --> always stateless
  // what use state is doing under the hood
  // https://blog.logrocket.com/using-react-usestate-object/
  // };

  // *********************************************LOGIN FUNCTIONS START***********************************************
  const getLogged = (uid) => {
    console.log("in get logged");
    console.log(uid);
    setIsLoggedIn(true);
    getUserCurations(uid);
  };

  // *********************************************LOGIN FUNCTIONS END***********************************************
  // *********************************************MAP FUNCTIONS START***********************************************

  const changeMapView = (newview) => {
    setViewState(newview);
  };

  // const mapEase = useRef.current.easeTo();

  const resetMapView = () => {
    console.log("inside resetMapView");
    // console.log(mapRef);
    // mapEase({
    //       center: event.features[0].geometry.coordinates,
    //       zoom: 10,
    //       duration: 500,
    //     });
    // Can this ease to zoom level?
    setViewState({
      longitude: -120.485,
      latitude: 47.31,
      zoom: 6.4,
      // transitionDuration: 8000,
      // transitionInterpolator: new FlyToInterpolator(),
    });
  };

  // const popupSetter = (info) => {
  //   setPopupInfo(info);
  // };

  // const mapsSelector = () => {
  //   window.open(
  //     `https://maps.google.com/maps?daddr=${popupInfo.latitude},${popupInfo.longitude}&amp;ll=`
  //   );
  // }

  const onClickMap = (event) => {
    try {
      const feature = event.features[0];
      let clusterID = feature.properties.cluster_id;
      const mapboxSource = mapRef.current.getSource("taxa");

      if (feature["layer"]["id"] === "unclustered-point") {
        clusterID = feature.properties.id;
        setPopupInfo(feature["properties"]);
        // mapRef.current.easeTo({
        //   center: feature.geometry.coordinates,
        //   zoom: 10,
        //   duration: 500,
        // });
      } else {
        mapboxSource.getClusterExpansionZoom(clusterID, (err, zoom) => {
          if (err) {
            console.log("I'm in the error!");
            return;
          }

          mapRef.current.easeTo({
            center: feature.geometry.coordinates,
            zoom,
            duration: 500,
          });
        });
      }
    } catch (err) {
      console.log("That's not a point!");
    }
  };

  // *********************************************MAP FUNCTIONS END********************************************************
  // *********************************************CURATION LIST FUNCTIONS START********************************************

  // pull list of saved observations from doc associated with testuser
  // move to only pulling authenticated user
  const getUserCurations = async (uid) => {
    let userFavIds = [];

    const docRef = doc(
      db,
      "users",
      `${uid}`,
      "curations",
      "favorites",
      "fav_Ids"
    );

    // Get a document, forcing the SDK to fetch from the offline cache.
    try {
      const targetDocCached = await getDocFromCache(docRef);
      // Document was found in the cache. If no cached document exists,
      // an error will be returned to the 'catch' block below.
      userFavIds = targetDocCached.data().observationIDs;
      console.log("Cached document data:", userFavIds);
    } catch (e) {
      console.log("Error getting cached document:", e);
      const targetDoc = await getDoc(docRef);
      userFavIds = targetDoc.data().observationIDs;
      console.log("Server collection data:", userFavIds);
    }
    setFavIDs((currentIDs) => [...currentIDs, ...userFavIds]);
    // CHEESE

    // getObservationByID(favIDs);
  };

  // sort through user docs in user collection
  // if user email matching authenticated email
  // access curation collection for that user
  // return list of observations ids
  // pass to api call --> edit data unpack to take favorites and...
  // store unpacked results in state variable (user favorites)
  // CHECK TO SEE IF UNPACK WORKS/ IF THE DATA IS RETURNED IN SAME FORMAT AS OTHER CALL

  const getObservationByID = async (id_list) => {
    const resultObjectsList = [];
    console.log(id_list);
    for (let id of id_list) {
      try {
        const response = await axios.get(`${INAT_URL}/observations/`, {
          params: {
            id: id,
          },
        });

        resultObjectsList.push(dataUnpacker(response.data.results, "favs"));
        console.log("success!", response.data.results);
      } catch (err) {
        console.log("ERROR! getObservationByID failed", err);
      }
    }

    setFavoritesList(resultObjectsList);
  };

  const displayHeart = (reset = false) => {
    if (isLoggedIn) {
      return null;
    }
    console.log("in toggle heart");
    if (reset === "reset") {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  const handleFavorite = (id) => {
    setLiked(!liked);
    if (isLoggedIn) {
      if (favIDs.includes(id)) {
        // remove it from favorites list
        setFavIDs((currentIDs) =>
          currentIDs.filter((i) => {
            return i !== id;
          })
        );
      } else {
        // add it to favorites list
        setFavIDs((currentIDs) => [...currentIDs, id]);
      }
    } else {
      window.alert("Please login to add an observation to your favorites.");
    }
  };

  const seeFavorites = () => {
    favOpen ? setFavOpen(false) : setFavOpen(true);
  };

  useEffect(() => {
    getObservationByID(favIDs);
  }, [favIDs]);

  // *********************************************CURATION LIST FUNCTIONS END**********************************************
  // *********************************************SEARCH BAR FUNCTIONS START***********************************************

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  // THIS IS FOR DROPDOWN, BUT NEEDS TO BE ABOVE HANDLSEARCHSUBMIT
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
    if (allSelected === false) {
      setAllSelected(true);
      const allSpecies = newedibleList.map((species) => species.label);
      setSelectedSpecies(allSpecies);
    } else {
      handleDropdownClear();
    }
  };

  const alternateOpenClose = () => {
    setIsOpen(!isOpen);
  };

  // !!!!!!!!
  // const handlePlantsSelected = () => {
  //   setPlantsSelected(!plantsSelected);
  //   setAllSelected(false);
  //   setSelectedSpecies([]);
  //   const filteredPlants = newedibleList.filter(object => object.type === 'plant');
  //   setFilteredObservationsList(filteredPlants);
  //   }
  // //   handleDropdownClear();
  // //   setPlantsSelected(!plantsSelected);
  // //   if (plantsSelected) {
  // //     console.log('in the if')
  // //     return;
  // //   }
  // //   console.log('in the else')
  // //   const newPlants = newedibleList.filter((species) => species.type === 'plant');
  // //   setSelectedSpecies((prevSelectedSpecies) => [
  // //     ...prevSelectedSpecies,
  // //     newPlants.map((species) => species.label),
  // //   ])
  // //   console.log(selectedSpecies);
  // // };
  // //   if (plantsSelected === false) {
  // //     setPlantsSelected(true);
  // //     for (species of newedibleList) {
  // //       if (species.type === 'plant') {
  // //         console.log("new one")
  // //         console.log(species.label);
  // //         // selectedSpecies.includes(species.label)
  // //         setSelectedSpecies(...species.label, species.label)
  // //       };
  // //     };
  // //   } else {
  // //     handleDropdownClear();
  // //     setPlantsSelected(false);
  // //   }
  // // };
  // !!!!!!!!!!!!!

  // *********************************************DROPDOWN FUNCTIONS END**************************************************

  const resetFilteredObservations = (temp = false) => {
    if (temp) {
      setFilteredObservationsList([{}]);
      console.log("we're in temp");
    } else {
      setFilteredObservationsList([]);
    }
  };

  // filter list comes from dropdown and search bar
  const sortFilterParameters = (filterList) => {
    if (typeof filterList === "string") {
      filterList = [filterList];
    }
    let dbSearchTaxa = [];
    let apiSearchTaxa = [];

    // takes list of common names
    // loops through, and for each adds latin to return list:
    const filtersAccountedFor = [];

    for (let item of newedibleList) {
      for (let filter of filterList) {
        if (item.label.toLowerCase() === filter.toLowerCase()) {
          dbSearchTaxa = dbSearchTaxa.concat(item.value);
          filtersAccountedFor.push(filter);
        }
      }
    }

    for (let filter of filterList) {
      if (!filtersAccountedFor.includes(filter)) {
        apiSearchTaxa.push(filter);
      }
    }

    // but what happens if they plug in latin names? --> goes to api
    // what if name doesn't exist in db??? --> same

    return [dbSearchTaxa, apiSearchTaxa];
  };

  // calls cloud function and retrieves user temp api key to
  // use in checkedEdibleSearch
  // const retrieveUserTrefleToken = async () => {

  // }

  const checkEdibleSearch = async (taxa) => {
    let newTaxa = taxa;
    // const token = retrieveUserTrefleToken()
    const token = "cheese";

    try {
      const response = await axios.get(
        `${TREFLE_URL}/plants/search?token=${token}&q=${taxa}`
        // {
        //   params: {
        //     q: taxa,
        //     token: process.env.TREFLE_KEY,
        //     // filter[edible]: true,
        //     // filter_not[scientific_name]: null
        //   },
        // }
      );
      newTaxa = await response.data[0]["scientific_name"];
      // newTaxa = await response.data.data[0]["scientific_name"]
    } catch (err) {
      console.log("species not found in trefle", err);
    }
    // try
    // make an api call to trefle to get edible scientific name
    // await response
    // assign to newTaxa
    // except
    // newTaxa = taxa

    console.log(newTaxa);
    // getObservationsByTaxon(newTaxa, true);
  };

  const pullFilteredObservations = (filterList) => {
    const results = sortFilterParameters(filterList);
    const dbSearchTaxa = results[0];
    const apiSearchTaxa = results[1];
    console.log(results);

    const updatedObservations = [];

    if (apiSearchTaxa.length !== 0) {
      for (let taxa of apiSearchTaxa) {
        // TO SWITCH TO EDIBLE PLANT API CROSS REFERENCE:
        // checkEdibleSearch(taxa);
        // and comment out line below
        getObservationsByTaxon(taxa, true);
      }
      console.log("Im in the apiSearchTaxa handler");
    }

    if (dbSearchTaxa.length !== 0) {
      console.log("Im in the dbSearchTaxa handler");

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
      console.log("updated observation", updatedObservations);
      // setFavoritesList((currentObservations) => [
      //   ...currentObservations,
      //   ...updatedObservations,
      // ]);
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
        // CALL FUNCTION RECURSIVELY WITH CURRENT PAGE
        getObservationsByTaxon(taxon, filter, currentPage);
      }
    } catch (err) {
      console.log("ERROR!", err);
    }
  };

  // useEffect(() =>{
  //   // getUserCurations(UID?!?);
  // change fav button and box to appear
  // remove signin button, replace with welcome message
  // }, [isLoggedIn]
  // )

  useEffect(() => {
    for (let item of newedibleList) {
      for (let taxa of item.value) {
        getObservationsByTaxon(taxa);
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // getObservationsByTaxon does not have any dependencies that change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-container">
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
          <Authentication isLoggedIn={isLoggedIn} getLogged={getLogged} />
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
            <button
              className={
                favOpen ? "favorite-button-clicked" : "favorite-button"
              }
              onClick={() => seeFavorites()}
            >
              See Favorites
            </button>
            <Dropdown
              handleSelection={handleSelection}
              handleDone={handleDone}
              handleSelectAll={handleSelectAll}
              alternateOpenClose={alternateOpenClose}
              allSelected={allSelected}
              selectedSpecies={selectedSpecies}
              isOpen={isOpen}
              // handlePlantsSelected={handlePlantsSelected}
            />
            <SearchBar
              // className="search-bar"
              handleChange={handleChange}
              handleSearchSubmit={handleSearchSubmit}
              handleClear={handleSearchClear}
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
        {/* {isLoading ? (
          <Loading />
        ) : ( */}

        {/* )} */}
      </main>
    </div>
  );
}

export default App;
