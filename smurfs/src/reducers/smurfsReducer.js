//imort actions
import {
  FETCH_DATA,
  UPDATE_SMURFS,
  SET_ERROR
} from '../actions/getSmurf';
import {ADD_SMURF} from '../actions/addSmurf';
import {DELETE_SMURF} from '../actions/deleteSmurf';

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
      id: Date.now()*Math.random(),
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