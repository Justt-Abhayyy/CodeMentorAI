import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./styles/globals.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#18181b",
          color: "#ffffff",
          border: "1px solid #27272a",
          borderRadius: "14px",
        },
      }}
    />

  </React.StrictMode>

);