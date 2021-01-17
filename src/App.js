// using ES6 modules
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home.js";
import Portfolio from "./screens/Portfolio.js";
import ThemeToggleButton from "./components/ThemeToggleButton.js";

function initializeReactGA() {
  ReactGA.initialize("UA-140777720-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  const [themeClass, setThemeClass] = useState("dark");

  useEffect(() => {
    toggleTheme();
  }, [])

  let changeBodyThemeClass = (target) => {
    document.body.classList.add(target);
    document.body.classList.remove(themeClass);
    setThemeClass(target);
  }

  let toggleTheme = () => {
    if (themeClass == "dark") changeBodyThemeClass("light");
    else changeBodyThemeClass("dark");
  };

  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <div>
      <div id="bg"></div>
      <ThemeToggleButton toggleTheme={toggleTheme}/>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
