import React,{useEffect} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetAllLocations } from '../services/fetchs.js';


function Locations() {
      const { store, dispatch } = useGlobalReducer();
      const { locations } = store;

useEffect(() => {
    GetAllLocations(dispatch);
},[dispatch]);

console.log(locations);
  return (
    <div>Locations</div>
  )
}

export default Locations