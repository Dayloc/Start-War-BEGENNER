import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { SpecificSpecies } from '../services/fetchs';

function SpecificSpecie() {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const { specificSpecie } = store;

  useEffect(() => {
    SpecificSpecies(id, dispatch);
  }, [id, dispatch]);

  if (!specificSpecie || Object.keys(specificSpecie).length === 0) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading species details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Species Details</h1>
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
          <img
            className="img-fluid rounded mb-3"
            src={specificSpecie.image}
            alt={specificSpecie.name || 'Species image'}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300?text=No+Image";
              e.target.className = "img-fluid rounded bg-light";
            }}
          />
          <h2 className="mt-2">{specificSpecie.name}</h2>
          <div className="character-details mt-3 text-start">
            <p>
              <strong>Description:</strong> {specificSpecie.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificSpecie;
