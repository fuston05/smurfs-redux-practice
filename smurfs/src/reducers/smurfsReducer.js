//imort actions
import {
  FETCH_DATA,
  UPDATE_SMURF,
  DELETE_SMURF,
  SET_ERROR
} from '../actions';


//initial state
const initialState = {
  smurfs: [
    {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  ],
  isLoading: false,
  error: ''
}


//reducer
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        error: false,
        smurfs: []
      }

    case UPDATE_SMURF:
      return {
        ...state,
        isLoading: false,
        error: false,
        smurfs:  action.payload
      }


    default:
      return state;
  }//end switch
}//end reducer