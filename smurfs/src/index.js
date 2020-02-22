import React from "react";
import ReactDOM from "react-dom";

//components
import App from "./components/App";

//redux
import {smurfsReducer} from './reducers/smurfsReducer';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

//styles
import "./index.scss";

const store = createStore(smurfsReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store= {store}>
  <App />
</Provider>, document.getElementById("root"));
