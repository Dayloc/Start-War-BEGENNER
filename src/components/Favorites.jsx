import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function Favorites() {
  const { store, dispatch } = useGlobalReducer();
  const { favoritos } = store;

  // Función para quitar favorito desde aquí
  const removeFavorite = (fav) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: fav });
  };

  // Para obtener la ruta correcta por tipo
  const getDetailRoute = (fav) => {
    switch (fav.type) {
      case "character":
        return `/specificCharacters/${fav.data._id}`;
      case "location":
        return `/specificLocation/${fav.data._id}`;
      case "species":
        return `/specificSpecies/${fav.data._id}`;
      default:
        return "#";
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">My Favorites ❤️</h1>

      {favoritos.length > 0 ? (
        <div className="row g-4">
          {favoritos.map((fav) => (
            <div className="col-lg-4 col-md-6" key={`${fav.type}-${fav.data._id}`}>
              <div className="card h-100">
                <Link
                  to={getDetailRoute(fav)}
                  className="text-decoration-none text-dark"
                >
                  <div className="ratio ratio-16x9">
                    <img
                      src={fav.data.image}
                      className="card-img-top object-fit-cover"
                      alt={`Portrait of ${fav.data.name}`}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x225?text=Image+Not+Available";
                        e.target.className = "card-img-top object-fit-contain bg-light";
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{fav.data.name}</h5>
                    <p className="card-text">
                      <strong>Description:</strong> {fav.data.description?.slice(0, 50) ?? "No description"}...
                    </p>
                    <span className="badge bg-primary">{fav.type}</span>
                  </div>
                </Link>

                <div className="card-footer bg-transparent border-0">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    onClick={() => removeFavorite(fav)}
                  >
                    ❌ Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <h5>No favorites yet!</h5>
          <p>Browse characters, locations or species and add some to your list ❤️</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
