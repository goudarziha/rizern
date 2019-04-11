import React, { Component } from "react";
import RizeApp from "./src/RizeApp";
import { Provider } from "react-redux";
import store from "./src/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RizeApp />
      </Provider>
    );
  }
}

export default App;
