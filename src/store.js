export const initialStore = () => ({
  message: null,
  characters: [],
  specificCharacter: null,
  locations: [],
  specificLocation: null,
  species: [],
  specificSpecie: null,
  favoritos: [] // única lista para todo, con type + data
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
      const { type, data } = action.payload;
      const exists = store.favoritos.some(
        fav => fav.type === type && fav.data._id === data._id
      );
      if (exists) return store;
      return {
        ...store,
        favoritos: [...store.favoritos, { type, data }]
      };
    }

    case 'REMOVE_FAVORITE': {
      const { type, data } = action.payload;
      return {
        ...store,
        favoritos: store.favoritos.filter(
          fav => !(fav.type === type && fav.data._id === data._id)
        )
      };
    }

    default:
      throw new Error('Unknown action.');
  }
}
