export const ADD_SMURF = "ADD_SMURF";

export const addSmurf= (smurfData) => dispatch => {
  console.log('from actions: ', smurfData);
  dispatch( {type: ADD_SMURF, payload: {
    name: smurfData.name,
    age: smurfData.age,
    height: smurfData.height
  } } );
}