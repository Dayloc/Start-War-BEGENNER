import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetAllSpecies } from "../services/fetchs.js";
import { Link } from "react-router-dom";

function Species() {
  const { store, dispatch } = useGlobalReducer();
  const { species, favoritos } = store;

  useEffect(() => {
    GetAllSpecies(dispatch);
  }, [dispatch]);

  const toggleFavorite = (specieName) => {
    if (favoritos.includes(specieName)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: specieName });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: specieName });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Star Wars Species</h1>
      {species.length > 0 ? (
        <div className="row g-4">
          {species.map((specie) => {
            const isFavorite = favoritos.includes(specie.name);

            return (
              <div className="col-lg-4 col-md-6" key={specie._id}>
                <div className="card h-100 hover-effect" id="efecto">
                  <Link
                    to={`/specificSpecies/${specie._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="ratio ratio-16x9">
                      <img
                        src={specie.image}
                        className="card-img-top object-fit-cover"
                        alt={`Image of ${specie.name}`}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x225?text=Species+Image";
                          e.target.className = "card-img-top object-fit-contain bg-light";
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-truncate">{specie.name}</h5>
                      <ul className="list-unstyled mt-auto">
                        <li>
                          <strong>Description:</strong>{" "}
                          {specie.description?.slice(0, 50) ?? "No description"}...
                        </li>
                      </ul>
                    </div>
                  </Link>

                  <div className="card-footer bg-transparent border-0">
                    <button
                      type="button"
                      className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"} w-100`}
                      onClick={() => toggleFavorite(specie.name)}
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
          <p className="mt-3">Loading species...</p>
        </div>
      )}
    </div>
  );
}

export default Species;
