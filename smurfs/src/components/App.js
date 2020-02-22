import React from "react";

//redux
import { connect } from 'react-redux';
import { getData, deleteSmurf } from '../actions';

//components
import Smurfs from './Smurfs/Smurfs';
import Form from './Form/Form';

//styles
import "./App.scss";

const App = (props) => {
  const smufCount= props.smurfs.length;

  const getSmurfData = e => {
    e.preventDefault();
    props.getData();
    console.log('clicked!');
  }

  const handleDelete= (smurf) => {
    console.log('delete');
    props.deleteSmurf(smurf);
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smufCount <2 && <button onClick={e => { getSmurfData(e) }}>Check Out Our Smurfs</button>}
      <div className= 'form-smurfs-cont'>
        <Form />
        <Smurfs handleDelete={handleDelete} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { getData, deleteSmurf }
)(App);
