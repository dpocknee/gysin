import React from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Home from './home/components/Home';
import Algorithms from './algorithms/Algorithms';
import Bibliography from './bibliography/Bibliography';
import Timeline from './timeline/Timeline';
import Iamthatiam from './iamthatiam/Iamthatiam';
import Error from './error/Error';
import './index.css';

const App = () => (
  <div className="app">
    <Header />
    <Router basepath="/gysin">
      <Home path="/" />
      <Algorithms path="/algorithms" />
      <Bibliography path="/bibliography" />
      <Timeline path="/timeline" />
      <Iamthatiam path="/iamthatiam" />
      <Error default />
    </Router>
  </div>
);

export default App;
