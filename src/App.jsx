import React from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Home from './home/components/Home';
import Algorithms from './algorithms/Algorithms';
import './index.css';

const App = () => (
  <div className="app">
    <Header />
    <Router>
      <Home path="/" />
      <Algorithms path="/algorithms" />
    </Router>
    <Home />
  </div>
);

export default App;
