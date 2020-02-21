//imort actions
import {
  FETCH_DATA,
  UPDATE_SMURFS,
  SET_ERROR
} from '../actions/getSmurf';
import {ADD_SMURF} from '../actions/addSmurf';

//initial state
const initialState= {
  smurfs: [
    {
      id: '10',
      name: 'burpy',
      age: '200',
      height: '6cm'
    }
  ],
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
  
    default:
      return state;
  }
}//end reducer