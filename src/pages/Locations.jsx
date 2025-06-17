import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetAllLocations } from "../services/fetchs.js";
import { Link } from "react-router-dom";

function Locations() {
  const { store, dispatch } = useGlobalReducer();
  const { locations, favoritos } = store;

  useEffect(() => {
    GetAllLocations(dispatch);
  }, [dispatch]);

  // ✅ Función genérica para toggle
  const toggleFavorite = (type, data) => {
    const isFavorite = favoritos.some(
      fav => fav.type === type && fav.data._id === data._id
    );
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { type, data } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { type, data } });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Star Wars Locations</h1>
      {locations.length > 0 ? (
        <div className="row g-4">
          {locations.map((location) => {
            const isFavorite = favoritos.some(
              fav => fav.type === "location" && fav.data._id === location._id
            );

            return (
              <div className="col-lg-4 col-md-6" key={location._id}>
                <div className="card h-100 hover-effect" id="efecto">
                  <Link
                    to={`/specificLocation/${location._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="ratio ratio-16x9">
                      <img
                        src={location.image}
                        className="card-img-top object-fit-cover"
                        alt={`Portrait of ${location.name}`}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x225?text=Location+Image";
                          e.target.className = "card-img-top object-fit-contain bg-light";
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-truncate">{location.name}</h5>
                      <ul className="list-unstyled mt-auto">
                        <li>
                          <strong>Description:</strong>{" "}
                          {location.description.slice(0, 50)}...
                        </li>
                      </ul>
                    </div>
                  </Link>

                  <div className="card-footer bg-transparent border-0">
                    <button
                      type="button"
                      className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"} w-100`}
                      onClick={() => toggleFavorite("location", location)}
                    >
                      {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading locations...</p>
        </div>
      )}
    </div>
  );
}

export default Locations;
