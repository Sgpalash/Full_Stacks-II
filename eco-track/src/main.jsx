import React from "react";
import ReactDOM from "react-dom/client";
import { HighImpact } from "./pages/logs";
import Headers from "./pages/Header";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headers />
    <HighImpact />
  </React.StrictMode>
);