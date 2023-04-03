import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./context/ThemeProvider";
import LanguageProvider from "./context/LanguageProvider";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
