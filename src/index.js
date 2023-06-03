import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoffesProvider from "./context/CoffesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CoffesProvider>
      <App />
    </CoffesProvider>
);
