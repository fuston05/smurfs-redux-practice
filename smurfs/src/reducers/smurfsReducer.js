//imort actions
import {
  FETCH_DATA,
  UPDATE_SMURFS,
  SET_ERROR
} from '../actions';

//initial state
const initialState= {
  smurfs: [
    {
      id: '',
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
      error: false
    }

    case UPDATE_SMURFS: 
    return{
      ...state,
      isLoading: false,
      error: false,
      smurfs: [...state.smurfs, ...action.payload]
    }
  
    default:
      return state;
  }
}//end reducer