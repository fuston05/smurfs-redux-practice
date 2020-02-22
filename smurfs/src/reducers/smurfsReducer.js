//imort actions
import {
  FETCH_DATA,
  UPDATE_SMURFS,
  SET_ERROR, 
  ADD_SMURF, DELETE_SMURF
} from '../actions';

//initial state
const initialState= {
  smurfs: [{}],
  isLoading: false,
  error: ''
}//end initialState

export const smurfsReducer= ( state= initialState, action ) => {
  switch (action.type) {
    case FETCH_DATA: 
    return{
      ...state,
      isLoading: true,
      error: false,
      smurfs: []
    }

    case UPDATE_SMURFS: 
    return{
      ...state,
      isLoading: false,
      error: false,
      smurfs: [...state.smurfs, ...action.payload]
    }

    case ADD_SMURF: 
    console.log('addSmurf fired from reducer');
    const newSmurf= {
      name: action.payload.name,
      age: action.payload.age,
      height: action.payload.height
    }
    return{
      ...state,
      isLoading: false,
      error: false,
      smurfs: [...state.smurfs, newSmurf]
    }

    case DELETE_SMURF: 
    const newArr= state.smurfs.filter( smurf => {
      return smurf.id != action.payload.id
    } );
      return{
        ...state,
        smurfs: [newArr]
      }
  
    default:
      return state;
  }
}//end reducer