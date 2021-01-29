
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <Router basename="/employee-directory">
      <div className="App">
        <Header />
        <Wrapper />
      </div>
    </Router>
  );
}

export default App;