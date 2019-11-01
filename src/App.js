import React from "react";
import "./style.css";

import { Provider } from "react-redux";

import { Board } from "./components/board";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Board></Board>
      </div>
    </Provider>
  );
}

export default App;
//
