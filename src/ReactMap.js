import Map, { Source, Layer, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useRef } from "react";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./Layers";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function ReactMap({
  viewState,
  changeMapView,
  dataGeoJSON,
  liked,
  displayHeart,
  favIDs,
  handleFavorite,
}) {
  const mapRef = useRef(null);
  const [popupInfo, setPopupInfo] = useState(null);

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
        if (favIDs.includes(feature.properties.id)) {
          displayHeart();
        }
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

  const closePopup = () => {
    setPopupInfo(null);
    displayHeart("reset");
  };

  function mapsSelector() {
    window.open(
      `https://maps.google.com/maps?daddr=${popupInfo.latitude},${popupInfo.longitude}&amp;ll=`
    );
  }

  const likeOrNot = liked ? <AiFillHeart /> : <AiOutlineHeart />;

  return (
    <div className="map-container">
      <Map
        {...viewState}
        onMove={(event) => changeMapView(event.viewState)}
        style={{ width: "100vw", height: "85vh" }}
        mapStyle="mapbox://styles/foragingcapstone/cldc9qo4i001m01lexygzvftr"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
        onClick={onClickMap}
        ref={mapRef}
      >
        <Source
          id="taxa"
          type="geojson"
          data={dataGeoJSON}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={70}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>

        {popupInfo && (
          <Popup
            anchor="top"
            id={Number(popupInfo.id)}
            latitude={Number(popupInfo.latitude)}
            longitude={Number(popupInfo.longitude)}
            onClose={() => closePopup()}
            maxWidth="1000px"
          >
            <div className="popup-container">
              <img
                id="observation-image"
                src={popupInfo.image_url}
                alt="observed species"
              ></img>
              <div>
                <h1 className="popup-common-name">{popupInfo.common_name}</h1>
                <h2>{popupInfo.latin_name}</h2>
                <p>Date Observed: {popupInfo.date}</p>
                <p>Native: {popupInfo.native.toString()}</p>
                <div id="button-container">
                  <button
                    id="get-directions-button"
                    onClick={() => mapsSelector()}
                  >
                    Get Directions
                  </button>
                  <p
                    id="favorite-heart"
                    onClick={() => handleFavorite(popupInfo.id)}
                  >
                    {likeOrNot}
                  </p>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default ReactMap;
