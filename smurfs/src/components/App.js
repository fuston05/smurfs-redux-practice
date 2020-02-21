import React from "react";

//redux
import { connect } from 'react-redux';
import { getData } from '../actions/getSmurf';

//components
import Smurfs from './Smurfs/Smurfs';
import Form from './Form/Form';

//styles
import "./App.css";

const App = (props) => {

  const getSmurfData = e => {
    e.preventDefault();
    props.getData();
    console.log('clicked!');
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        <Form />
        <button onClick={e => { getSmurfData(e) }}>Check Out Our Smurfs</button>
        <Smurfs />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { getData }
)(App);
