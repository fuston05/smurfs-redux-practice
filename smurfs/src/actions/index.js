import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const DELETE_SMURF = "DELETE_SMURF";

export const getData = () => dispatch => {
  // console.log('get a smurf');
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log('res data',res.data);
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};

export const addSmurf= (smurfData) => dispatch => {
  dispatch({ type: FETCH_DATA });
  console.log('from actions: ', smurfData);
  axios
  .post('http://localhost:3333/smurfs', 
  {
    name: smurfData.name,
    age: smurfData.age,
    height: smurfData.height
  })
  .then(postRes => {
    dispatch({ type: UPDATE_SMURFS, payload: postRes.data });
    console.log('post postRes: ', postRes.data);
  })
  .catch(postErr => {
    console.log('post postErr: ', postErr);
    dispatch({ type: SET_ERROR, payload: "Error adding smurf" });
  });
  
}//end addSmurf

export const deleteSmurf= (smurf) => dispatch => {
  dispatch({ type: FETCH_DATA });
  console.log('from delete, smurf id: ', smurf.id);
  axios
  .delete(`http://localhost:3333/smurfs/${smurf.id}`)
  .then(delRes => {
    console.log('delRes.data: ', delRes.data);
    dispatch({ type: UPDATE_SMURFS, payload: delRes.data });
  })
  .catch(delErr => {
    dispatch({ type: SET_ERROR, payload: "Error delting smurf" });
    console.log('delError', delErr);
  })
  
}//deleteSmurf


