
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Characters from "./Characters.jsx";
import Location from "./Locations.jsx";
import Specie from "./Specie.jsx";

export const Home = () => {
  const {store, dispatch} =useGlobalReducer()
  

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<Characters />
			<Location />
			<Specie/>
			
		</div>
	);
}; 