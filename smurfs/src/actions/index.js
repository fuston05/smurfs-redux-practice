// ****************** ACTIONS ****************** //
// ******************************************** //

import axios from "axios";

// EXPORT CONSTANTS
export const FETCH_DATA= 'FETCH_DATA';
export const UPDATE_SMURF= 'UPDATE_SMURF';
export const DELETE_SMURF= 'DELETE_SMURF';
export const SET_ERROR= 'SET_ERROR';

export const getData = () => dispatch => {
  dispatch({type: FETCH_DATA});
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log('res data',res.data);
      dispatch({ type: UPDATE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({type: SET_ERROR, payload: 'Error Fetching Your Village.'});
    });
};

export const addSmurf= (smurfData) => dispatch => {
  dispatch({type: FETCH_DATA });
  console.log('from addsmurf: ', smurfData);
  axios
  .post('http://localhost:3333/smurfs', 
  {
    name: smurfData.name,
    age: smurfData.age,
    height: smurfData.height
  })
  .then(postRes => {
    dispatch({type: UPDATE_SMURF, payload: postRes.data})
    console.log('post postRes: ', postRes.data);
  })
  .catch(postErr => {
    console.log('post postErr: ', postErr);
    dispatch({type: SET_ERROR, payload: 'Error Adding Smurf.'});
  });
  
}//end addSmurf

export const deleteSmurf= (smurf) => dispatch => {
  dispatch({type: FETCH_DATA});
  console.log('from delete, smurf id: ', smurf.id);
  axios
  .delete(`http://localhost:3333/smurfs/${smurf.id}`)
  .then(delRes => {
    console.log('delRes.data: ', delRes.data);
    dispatch({type: UPDATE_SMURF, payload: delRes.data});
  })
  .catch(delErr => {
    dispatch({type: SET_ERROR, payload: 'Error Deleting Smurf'});
    console.log('delError', delErr);
  })
  
}//deleteSmurf


