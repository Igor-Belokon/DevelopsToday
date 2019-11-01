import React from "react";

import { Provider } from "react-redux";

import Board from "./components/board/board.js";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Board></Board>
      </div>
    </Provider>
  );
}

export default App;
//
