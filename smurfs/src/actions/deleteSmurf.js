export const DELETE_SMURF = "DELETE_SMURF";

export const deleteSmurf= (smurf) => dispatch => {
  console.log('from delete: ', smurf);
  dispatch( {type: DELETE_SMURF, payload: {
    id: smurf.id,
    name: smurf.name,
    age: smurf.age,
    height: smurf.height
  } } );
}