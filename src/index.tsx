import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No element with id 'root' found");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
