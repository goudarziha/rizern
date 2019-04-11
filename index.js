import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./src/reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
