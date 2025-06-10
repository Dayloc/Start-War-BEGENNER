import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { EspecificPeople } from '../services/fetchs';

function SpecificCharacters() {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const { specificCharacter } = store;

    useEffect(() => {
        EspecificPeople(id, dispatch);
    }, [id, dispatch]);

    if (!specificCharacter) {
        return <div className="container mt-4">Loading character details...</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Character Details</h1>
            <div className="card">
                <div className="card-body">
                    <img 
                        className='detalle img-fluid rounded' 
                        src={specificCharacter.image} 
                        alt={specificCharacter.name || 'Character image'} 
                    />
                    <h2 className="mt-3">{specificCharacter.name}</h2>
                    <div className="character-details mt-3">
                        <p><strong>Description:</strong> {specificCharacter.description}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificCharacters;