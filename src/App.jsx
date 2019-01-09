import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Home from './components/Home';
import './css/App.css';

const App = () => (
  <div className="app">
    <Header />
    <Router>
      <Home path="/" />
    </Router>
    <Home />
  </div>
);

export default App;
