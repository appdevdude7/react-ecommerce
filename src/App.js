import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Header from './components/header/Header';
import Login from './pages/login/Login';

import Shop from './pages/shop/Shop';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;