import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import contactReducer from "./redux/reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(contactReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))