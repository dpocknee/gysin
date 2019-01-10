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
          <Link to="/gysin">Introduction</Link>
        </li>
        <li>
          <Link to="/gysin/algorithms">Permutation Algorithms</Link>
        </li>
        <li>
          <Link to="/gysin/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/gysin/bibliography">Bibliography</Link>
        </li>
        <li>
          <Link to="/gysin/poems">The Poems</Link>
        </li>
        <li>
          <Link to="/gysin/iamthatiam">I AM THAT I AM</Link>
        </li>
        <li>
          <Link to="/gysin/comparison">Comparison</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
