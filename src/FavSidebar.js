const FavSidebar = ({ favoritesList, openPopUp }) => {

  // const fakeFavoritesList = [
  //   {
  //     geometry: { type: "point" },
  //     properties: {
  //       common_name: "wrinkled thimble morel",
  //       date: "October 18, 2022",
  //       id: 139292223,
  //       image_url: "image url here",
  //       latin_name: "Verpa bohemica",
  //       latitude: 47.4314833333,
  //       longitude: -122.0841916667,
  //       native: false,
  //     },
  //   },
  //   {
  //     geometry: { type: "point" },
  //     properties: {
  //       common_name: "wrinkled thimble morel",
  //       date: "October 18, 2022",
  //       id: 139292223,
  //       image_url: "image url here",
  //       latin_name: "Verpa bohemica",
  //       latitude: 47.4314833333,
  //       longitude: -122.0841916667,
  //       native: false,
  //     },
  //   },
  // ];

  // console.log(favoritesList[0]['properties']);

  return (
    <div className="favsidebar-container">
      <h1 id="fave-title">Your Favorites</h1>
      <ul className="fave-list-ul">
        {favoritesList.length > 0 ? (favoritesList.map((species) => (
          <li key={species.properties.id} className="favorite-list-item" onClick={openPopUp}>
            <img
                id="fave-image"
                src={species.properties.image_url}
                alt="observed species"
              ></img>
              <section>
                <h1 id="fave-header">
                  {species.properties.common_name}
                </h1>
                <p id="fave-text">{species.properties.date}</p>
                <p id="fave-text">
                  Native: {species.properties.native.toString()}
                </p>
              </section>
          </li>
          )
        )) : "Observations you favorite will appear here and on the map."}
      </ul>
    </div>
  );
};

export default FavSidebar;
