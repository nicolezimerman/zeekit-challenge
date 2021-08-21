import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import Game from "../src/pages/Game";
const App: FunctionComponent = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      {/* Use on deploy <Redirect to="/" /> */}
    </Router>
  );
};

export default App;
