import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Game from "../src/pages/Game";
const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      <Redirect to="/" />
    </Router>
  );
};

export default App;
