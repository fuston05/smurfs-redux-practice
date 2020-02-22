import React from 'react';

//components
import SmurfCard from '../SmurfCard/SmurfCard';

//redux


//styles
import './Smurfs.scss';

const Smurfs = () => {
  return (
    <div className= 'smurfsCont'>
      {/* if no smurfs display 'add smurf' message */}
      {props.smurfs.length == 0 ? <p>Add A Smurf</p> :
      props.smurfs.map( smurf => {
        return <SmurfCard handleDelete= {() => {props.handleDelete(smurf)}} key= {smurf.id} smurf= {smurf} />
      } )
      }
    </div>
  )
}

export default Smurfs;