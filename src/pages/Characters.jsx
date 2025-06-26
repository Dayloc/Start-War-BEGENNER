import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetPeople } from "../services/fetchs";
import { Link } from "react-router-dom";

function Characters() {
  const { store, dispatch } = useGlobalReducer();
  const { characters, favoritos } = store;

  useEffect(() => {
    GetPeople(dispatch);
  }, [dispatch]);

  // ✅ Toggle simple con name
  const toggleFavorite = (characterName) => {
    if (favoritos.includes(characterName)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: characterName });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: characterName });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Star Wars Characters</h1>
      {characters.length > 0 ? (
        <div className="row g-4">
          {characters.map((character) => {
            const isFavorite = favoritos.includes(character.name);

            return (
              <div className="col-lg-4 col-md-6" key={character._id}>
                <div className="card h-100 hover-effect" id="efecto">
                  <Link
                    to={`/specificCharacters/${character._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="ratio ratio-16x9">
                      <img
                        src={character.image}
                        className="card-img-top object-fit-cover"
                        alt={`Portrait of ${character.name}`}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x225?text=Character+Image";
                          e.target.className = "card-img-top object-fit-contain bg-light";
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-truncate">{character.name}</h5>
                      <ul className="list-unstyled mt-auto">
                        <li>
                          <strong>Description:</strong>{" "}
                          {character.description.slice(0, 50)}...
                        </li>
                      </ul>
                    </div>
                  </Link>

                  <div className="card-footer bg-transparent border-0">
                    <button
                      type="button"
                      className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"} w-100`}
                      onClick={() => toggleFavorite(character.name)}
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
          <p className="mt-3">Loading characters...</p>
        </div>
      )}
    </div>
  );
}

export default Characters;
