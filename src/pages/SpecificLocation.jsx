import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { SpecificLocation as fetchSpecificLocation } from '../services/fetchs';

function SpecificLocation() {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const { specificLocation } = store;

    useEffect(() => {
       fetchSpecificLocation(id, dispatch);
    }, [id, dispatch]);

    if (!specificLocation) {
        return <div className="container mt-4">Loading character details...</div>;
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Character Details</h1>
            <div className="card">
                <div className="card-body">
                    <img 
                        className='detalle img-fluid rounded' 
                        src={specificLocation.image} 
                        alt={specificLocation.name || 'Character image'} 
                    />
                    <h2 className="mt-3">{specificLocation.name}</h2>
                    <div className="character-details mt-3">
                        <p><strong>Description:</strong> {specificLocation.description}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificLocation;