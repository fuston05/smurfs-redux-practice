// ****************** SRC INDEX ****************** //
// ********************************************** //

import React from "react";
import ReactDOM from "react-dom";

//components
import App from "./components/App";

// *************** REDUX IMPORTS *************** //
// ******************************************** //

//{createStore, applyMiddleware} from .. redux
import {createStore, applyMiddleware} from 'redux';

//thunk from redux-thunk
import thunk from 'redux-thunk';

//{Provider}/ react-redux
import {Provider} from 'react-redux';

//REDUCER
import {smurfsReducer as reducer} from './reducers/smurfsReducer';



//styles
import "./index.scss";

// ******* CREATE STORE ******* //
// takes in reducer and applyMiddleware
//applyMiddleware() takes in middleware
const store= createStore(reducer, applyMiddleware(thunk));

//WRAP APP IN Provider .. takes in the {store}
ReactDOM.render(
<Provider store= {store}>
  <App />
</Provider>, document.getElementById("root"));
