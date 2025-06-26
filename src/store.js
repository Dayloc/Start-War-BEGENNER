export const initialStore = () => ({
  message: null,
  characters: [],
  specificCharacter: null,
  locations: [],
  specificLocation: null,
  species: [],
  specificSpecie: null,
  favoritos: [] 
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return { ...store, characters: action.payload };

    case 'GET_SPECIFIC_CHARACTER':
      return { ...store, specificCharacter: action.payload };

    case 'GET_LOCATIONS':
      return { ...store, locations: action.payload };

    case 'GET_SPECIFIC_LOCATION':
      return { ...store, specificLocation: action.payload };

    case 'GET_SPECIES':
      return { ...store, species: action.payload };

    case 'GET_SPECIFIC_SPECIE':
      return { ...store, specificSpecie: action.payload };

      case 'ADD_FAVORITE': {
        const name = action.payload;
        if (store.favoritos.includes(name)) return store; // ya está
        return {
          ...store,
          favoritos: [...store.favoritos, name]
        };
      }
  
      case 'REMOVE_FAVORITE': {
        const name = action.payload;
        return {
          ...store,
          favoritos: store.favoritos.filter(fav => fav !== name)
        };
      }
    default:
      throw new Error('Unknown action.');
  }
}
