import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { PlayersProvider } from "./context/PlayersContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlayersProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PlayersProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
