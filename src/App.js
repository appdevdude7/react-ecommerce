import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import MenuItem from './components/menu-item/MenuItem';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </nav>
        <HomePage />
      </div>
      <Switch>
        <Route path="/menu">
          <MenuItem />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;