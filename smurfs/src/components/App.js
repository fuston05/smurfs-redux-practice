import React from "react";

//redux
import {connect} from 'react-redux';
import {getData} from '../actions';

//components
import Smurfs from './Smurfs/Smurfs';

//styles
import "./App.css";

const App = (props) => {

  const handleClick= e =>{
    e.preventDefault();
    props.getData();
    console.log('clicked!');
  }

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick= {e => {handleClick(e)}}>Check Out Our Smurfs</button>
        <Smurfs />
      </div>
    );
}

const mapStateToProps= state => {
  return{

  }
}

export default connect(
  mapStateToProps,
  {getData}
)(App);
