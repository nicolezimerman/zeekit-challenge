import {FunctionComponent} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from '../src/pages/Home';
const App: FunctionComponent = ()=> {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Router>
  );
}

export default App;
