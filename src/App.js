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

let changeBodyThemeClass = (target, remove) => {
  document.body.classList.add(target);
  document.body.classList.remove(remove);
};

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeLoaded: false,
  });
  React.useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true';
    setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true });
    if(lsDark)changeBodyThemeClass("dark", "light");
    //preload class disabled all css transition, so there won't be a flicker on load
    document.body.classList.remove("preload");
  }, []);
  return [themeState, setThemeState];
};

function App() {
  const [themeState, setThemeState] = useEffectDarkMode();

  let toggleTheme = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });

    if(dark)changeBodyThemeClass("dark", "light");
    else changeBodyThemeClass("light", "dark");
  };

  useEffect(() => {
    initializeReactGA();
  }, []);

  if (!themeState.hasThemeLoaded) {
      return <div/>;
  }

  return (
    <div>
      <div id="bg"/>
      <ThemeToggleButton toggleTheme={toggleTheme} theme={themeState}/>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
