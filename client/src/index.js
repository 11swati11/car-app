import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from './store';

import App from "./components/App";

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);