import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/currency" component={Info} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
