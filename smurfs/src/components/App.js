import React from "react";

//{connect}
import {connect} from 'react-redux';

//import actions
import {deleteSmurf, getData} from '../actions';


//components
import Form from '../components/Form/Form';
import Smurfs from '../components/Smurfs/Smurfs';

//styles
import "./App.scss";

const App = (props) => {
  const smurfCount= props.smurfs.length;

  const getSmurfData = e => {
    props.getData();
    e.preventDefault();
    console.log('get smurf clicked!');
  }

  const handleDelete= (smurf) => {
    props.deleteSmurf(smurf);
    console.log('delete clicked');
  }

  return (
    <div className="App">
      <h1>SMURFS VILLAGE</h1>
      {smurfCount <2 && <button onClick={e => { getSmurfData(e) }}>Check Out Our Smurfs</button>}
      <div className= 'form-smurfs-cont'>
        <Form />
        <Smurfs handleDelete={handleDelete} />
      </div>
    </div>
  );
}

//mapStateToProps
const mapStateToProps= state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getData, deleteSmurf}
)(App);
