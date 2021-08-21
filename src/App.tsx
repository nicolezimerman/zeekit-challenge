import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Game from "../src/pages/Game";
import End from "../src/pages/End";
const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      <Route path="/end" exact component={End} />
      <Redirect to="/" />
    </Router>
  );
};

export default App;
