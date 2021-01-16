// using ES6 modules
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home.js";
import Portfolio from "./screens/Portfolio.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <div id="bg"></div>
      <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition key={location.key} timeout={450} classNames="fade">
          <Switch location={location}>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
