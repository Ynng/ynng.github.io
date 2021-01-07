// using ES6 modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home.js'
import Projects from './Projects.js'

function App() {
  return (
    <div className="preload body">
      <div className="my-container">
        <Router>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
