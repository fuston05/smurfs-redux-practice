import React from 'react';

//styles
import './SmurfCard.scss';

const SmurfCard = ({smurf}) => {
  return (
    <div className= 'smurfCard'>
      <h2>{smurf.name}</h2>
      <p><b>Name: </b>{smurf.name}</p>
      <p><b>Age: </b>{smurf.age}</p>
      <p><b>Height: </b>{smurf.height}</p>
    </div>
  )
}

export default SmurfCard;
