const FavSidebar = ({ favoritesList }) => {

  return (
    <div className="favsidebar-container">
      <h1 id="fave-title">Your Favorites</h1>
      <ul className="fave-list-ul">
        {favoritesList.length > 0
          ? favoritesList.map((species) => (
              <li
                key={species.properties.id}
                className="favorite-list-item"
              >
                <img
                  id="fave-image"
                  src={species.properties.image_url}
                  alt="observed species"
                ></img>
                <section>
                  <h1 id="fave-header">{species.properties.common_name}</h1>
                  <p id="fave-text">{species.properties.date}</p>
                  <p id="fave-text">
                    Native: {species.properties.native.toString()}
                  </p>
                </section>
              </li>
            ))
          : "Observations you favorite will appear here and on the map."}
      </ul>
    </div>
  );
};

export default FavSidebar;
