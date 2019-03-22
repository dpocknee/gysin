import React from 'react';
import { Router } from '@reach/router';
import Header from './Header';
import Home from './home/components/Home';
import Algorithms from './algorithms/components/AlgorithmPage';
import Poems from './poems/Poems';
import Timeline from './timeline/Timeline';
import Comparison from './comparison/Comparison';
import Bibliography from './bibliography/Bibliography';
import Error from './error/Error';
import './index.css';

const App = () => (
  <div className="app">
    <Header />
    <Router basepath="/gysin">
      <Home path="/" />
      <Algorithms path="/algorithms" />
      <Poems path="/poems" />
      <Timeline path="/timeline" />
      <Comparison path="/comparison" />
      <Bibliography path="/bibliography" />
      <Error default />
    </Router>
  </div>
);

export default App;
