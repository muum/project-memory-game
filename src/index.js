import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { GlobalProvider } from "./context/GlobalState";

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
