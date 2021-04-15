import React from "react";
import Card from "./components/Card";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Web from './views/Web';

function App() {
  return (
    <Router>
      <div style={{ marginBottom: "80px" }}>
        <Switch>
          <Route path="/">
            <Web />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
