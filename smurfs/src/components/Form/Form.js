import React, { useState } from 'react';

//redux
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';

//styles
import './Form.scss';

const Form = (props) => {

  const [value, setValue] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  });

  const handleSubmit = (e, value) => {
    e.preventDefault();
    //dont allow an empty form submit
    if (value.name.length !== 0) {
      props.addSmurf(value);
      setValue({
        name: '',
        age: '',
        height: '',
        id: ''
      });
    }//end if
  }//end handleSubmit

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, value)}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          placeholder='Name'
          id='name'
          name='name'
          value={value.name}
          onChange={e => handleChange(e)}
        />
        <label htmlFor='age'>Age</label>
        <input
          type='text'
          placeholder='Age'
          id='age'
          name='age'
          value={value.age}
          onChange={e => handleChange(e)}
        />
        <label>Height: </label>
        <input
          type='text'
          placeholder='Height'
          id='height'
          name='height'
          value={value.height}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { addSmurf }
)(Form);