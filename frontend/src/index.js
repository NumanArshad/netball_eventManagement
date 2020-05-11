import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import './index.css';
//import App from "./components/App";
import registerServiceWorker from './registerServiceWorker';
//import { Router,Route } from 'react-router'
import { browserHistory } from 'react-router';
//import Root from './routes'
import './index.css';
import Root from './routes'
// import { PersistGate } from "redux-persist/lib/integration/react";
const font = "'Varela Round', sans-serif";

render(
  <Provider store={store} >
    {/* <PersistGate persistor={persistantStore}> */}
    <Root />
    {/* </PersistGate> */}
      

  </Provider>,
  document.getElementById("root")
);
