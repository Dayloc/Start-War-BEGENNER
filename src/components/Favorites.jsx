import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function Favorites() {
  const { store, dispatch } = useGlobalReducer();
  const { favoritos } = store;

  const removeFavorite = (name) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: name });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">My Favorites ❤️</h1>

      {favoritos.length > 0 ? (
        <ul className="list-group">
          {favoritos.map((name, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {name}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFavorite(name)}
              >
                ❌ Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-5">
          <h5>No favorites yet!</h5>
          <p>Browse and add some to your list ❤️</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
