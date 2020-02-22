import React from 'react';

//components
import SmurfCard from '../SmurfCard/SmurfCard';

//redux
import {connect} from 'react-redux';

//styles
import './Smurfs.scss';

const Smurfs = (props) => {
  return (
    <div className= 'smurfsCont'>
      {/* if no smurfs display 'add smurf' message */}
      {props.smurfs.length == 0 ? <p>add a smurf</p> :
      props.smurfs.map( smurf => {
        return <SmurfCard handleDelete= {() => {props.handleDelete(smurf)}} key= {smurf.id} smurf= {smurf} />
      } )
      }
    </div>
  )
}

const mapStateToProps= state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {}
)(Smurfs);