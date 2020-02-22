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
      {
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