// using ES6 modules
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home.js";
import Portfolio from "./screens/Portfolio.js";

function initializeReactGA() {
  ReactGA.initialize("UA-140777720-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div className="preload body">
      <div className="my-container">
        <Router>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
