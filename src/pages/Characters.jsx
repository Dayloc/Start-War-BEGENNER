import React, { useEffect } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetPeople } from '../services/fetchs';
import { Link } from 'react-router-dom';

function Characters() {
    const { store, dispatch } = useGlobalReducer();
    const { characters } = store;
    
    useEffect(() => {
        GetPeople(dispatch);
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Star Wars Characters</h1>
            {characters.length > 0 ? (
                <div className="row g-4">
                    {characters.map((character, index) => (
                        <div className="col-lg-4 col-md-6" key={character._id}>
                            <Link 
                                to={`/specificCharacters/${character._id}`}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100 shadow-sm hover-effect">
                                    <div className="ratio ratio-16x9">
                                        <img 
                                            src={character.image} 
                                            className="card-img-top object-fit-cover"
                                            alt={`Portrait of ${character.name}`}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x225?text=Character+Image';
                                                e.target.className = 'card-img-top object-fit-contain bg-light';
                                            }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-truncate">{character.name}</h5>
                                        <ul className="list-unstyled mt-auto">
                                            <li><strong>Height:</strong> {character.height || 'Unknown'} cm</li>
                                            <li><strong>Mass:</strong> {character.mass || 'Unknown'} kg</li>
                                            <li><strong>Hair Color:</strong> {character.hair_color || 'Unknown'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
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