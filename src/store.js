export const initialStore=()=>{
  return{
    message: null,
    characters:[],
    specificCharacter: null,
    locations: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'GET_CHARACTERS':
      return {...store,characters: action.payload};
    case 'GET_SPECIFIC_CHARACTER':
      return {...store, specificCharacter: action.payload};
    case 'GET_LOCATIONS':
      return {...store, locations: action.payload};  
    default:
      throw Error('Unknown action.');
  }    
}
