import React from 'react';
import { Link } from '@reach/router';
import './Header.css';

const Header = () => (
  <>
    <header>
      <h1>
        Brion Gysin's <i>Permutation Poems</i>
      </h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link to="/">Introduction</Link>
        </li>
        <li>
          <Link to="/algorithms">Permutation Algorithms</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/bibliography">Bibliography</Link>
        </li>
        <li>
          <Link to="/poems">The Poems</Link>
        </li>
        <li>
          <Link to="/iamthatiam">I AM THAT I AM</Link>
        </li>
        <li>
          <Link to="/comparison">Comparison</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
