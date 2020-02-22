import React from "react";

//redux


//components


//styles
import "./App.scss";

const App = () => {
  const smufCount= props.smurfs.length;

  const getSmurfData = e => {
    e.preventDefault();
    console.log('get smurf clicked!');
  }

  const handleDelete= (smurf) => {
    console.log('delete clicked');
  }

  return (
    <div className="App">
      <h1>SMURFS VILLAGE</h1>
      {smufCount <2 && <button onClick={e => { getSmurfData(e) }}>Check Out Our Smurfs</button>}
      <div className= 'form-smurfs-cont'>
        <Form />
        <Smurfs handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
