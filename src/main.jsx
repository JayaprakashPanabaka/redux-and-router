import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import accountStore from "./bankStore/store.js";
import counterStore from './store/store.js'
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
