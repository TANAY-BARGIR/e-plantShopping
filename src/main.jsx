// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js"; // Import the configured store [cite: 276]

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap App with Provider [cite: 281] */}
      <App />
    </Provider>
  </React.StrictMode>
);
