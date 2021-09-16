import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

import {Provider} from "react-redux"
import {store, persistore} from './Redux/store/store';
import {PersistGate} from "redux-persist/integration/react";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";



ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistore}>
      <App/>   
  </PersistGate>
  </Provider> 
    ,
  document.querySelector("#root")
);
