const url= "https://starwars-databank-server.vercel.app/api/v1/";


export const GetPeople = async (dispatch) => {
    try {
        const response = await fetch(`${url}characters`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({type: 'GET_CHARACTERS',payload: data.data});       
        return data.data;
    } catch (error) {
        console.error("Error fetching people:", error);
        throw error;
    }
}

export const EspecificPeople = async (id,dispatch) => {
    try {
        const response = await fetch(`${url}characters/${id}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({type: 'GET_SPECIFIC_CHARACTER', payload: data});
        return data;
    } catch (error) {
        console.error("Error fetching specific person:", error);
        throw error;
    }
}

export const GetAllLocations = async (dispatch) => {
    try {
        const response = await fetch(`${url}locations`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({type: 'GET_LOCATIONS', payload: data.data});
        return data;
    } catch (error) {
        console.error("Error fetching planets:", error);
        throw error;
    }
}