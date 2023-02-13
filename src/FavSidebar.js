const FavSidebar = (favoritesList) => {
  console.log('fave')
  console.log(favoritesList);
  // console.log('first fave');
  // console.log(favoritesList);

  const fakeFavoritesList = [
    {
      geometry: {type: 'point'},
      properties: {
        common_name: "wrinkled thimble morel",
        date: "October 18, 2022",
        id: 139292223,
        image_url: "image url here",
        latin_name: "Verpa bohemica",
        latitude: 47.4314833333,
        longitude: -122.0841916667,
        native: false
      }
    },
    {
      geometry: {type: 'point'},
      properties: {
        common_name: "wrinkled thimble morel",
        date: "October 18, 2022",
        id: 139292223,
        image_url: "image url here",
        latin_name: "Verpa bohemica",
        latitude: 47.4314833333,
        longitude: -122.0841916667,
        native: false
      }
    }
  ]
  // console.log('here is fake list');
  // console.log(fakeFavoritesList[0].properties);

  return (
    <div className="favsidebar-container">
      <h1 id="fave-title">Your Favorites</h1>
        <ul className="fave-list-ul">
          <li className="favorite-list-item">
            <div id="fave-image"></div>
            <section>
              <h1 id="fave-header">{fakeFavoritesList[0].properties.common_name}</h1>
              <p id="fave-text">{fakeFavoritesList[0].properties.date}</p>
              <p id="fave-text">Native: {fakeFavoritesList[0].properties.native.toString()}</p>
            </section>
          </li>
          <li className="favorite-list-item">
            <div id="fave-image"></div>
            <section>
              <h1 id="fave-header">{fakeFavoritesList[0].properties.common_name}</h1>
              <p id="fave-text">{fakeFavoritesList[0].properties.date}</p>
              <p id="fave-text">Native: {fakeFavoritesList[0].properties.native.toString()}</p>
            </section>
          </li>
          <li className="favorite-list-item">
            <div id="fave-image"></div>
            <section>
              <h1 id="fave-header">{fakeFavoritesList[0].properties.common_name}</h1>
              <p id="fave-text">{fakeFavoritesList[0].properties.date}</p>
              <p id="fave-text">Native: {fakeFavoritesList[0].properties.native.toString()}</p>
            </section>
          </li>
          <li className="favorite-list-item">
            <div id="fave-image"></div>
            <section>
              <h1 id="fave-header">{fakeFavoritesList[0].properties.common_name}</h1>
              <p id="fave-text">{fakeFavoritesList[0].properties.date}</p>
              <p id="fave-text">Native: {fakeFavoritesList[0].properties.native.toString()}</p>
            </section>
          </li>
          {/* {favoritesList.map((species) => (
              <li key={species.properties.id} className="fave-list-item">
                <section>
                  <h1>{species.properties.common_name}</h1>
                  <h2>{species.properties.latin_name}</h2>
                  <p>Date Observed: {species.properties.date}</p>
                  <p>Native: {species.properties.native.toString()}</p>
                </section>
              </li>
            ))} */}
      </ul>
    </div>
  );
};

export default FavSidebar;