import axios from "axios";

// EXPORT CONSTANTS

export const getData = () => dispatch => {
  
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log('res data',res.data);

    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);

    });
};

export const addSmurf= (smurfData) => dispatch => {

  console.log('from addsmurf: ', smurfData);
  axios
  .post('http://localhost:3333/smurfs', 
  {
    name: smurfData.name,
    age: smurfData.age,
    height: smurfData.height
  })
  .then(postRes => {

    console.log('post postRes: ', postRes.data);
  })
  .catch(postErr => {
    console.log('post postErr: ', postErr);

  });
  
}//end addSmurf

export const deleteSmurf= (smurf) => dispatch => {

  console.log('from delete, smurf id: ', smurf.id);
  axios
  .delete(`http://localhost:3333/smurfs/${smurf.id}`)
  .then(delRes => {
    console.log('delRes.data: ', delRes.data);

  })
  .catch(delErr => {

    console.log('delError', delErr);
  })
  
}//deleteSmurf


