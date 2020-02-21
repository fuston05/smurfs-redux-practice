import React from "react";

//redux
import { connect } from 'react-redux';
import { getData } from '../actions/getSmurf';
import { deleteSmurf } from '../actions/deleteSmurf';

//components
import Smurfs from './Smurfs/Smurfs';
import Form from './Form/Form';

//styles
import "./App.css";

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
      <div>
        <Form />
        {smufCount <2 && <button onClick={e => { getSmurfData(e) }}>Check Out Our Smurfs</button>}
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
