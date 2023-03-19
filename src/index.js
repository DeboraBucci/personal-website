import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import LanguageProvider from "./context/LanguageProvider";

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
