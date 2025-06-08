import { StrictMode } from "react";

import "./index.css";
import App from "./App.jsx";
import { Provider } from "../src/components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
