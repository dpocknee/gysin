import React from 'react';
import PropTypes from 'prop-types';
import './Comparison.css';

const PoemMenu = props => {
  const { poemDatabase, choosePoem } = props;
  const poemMenu = poemDatabase.reduce((poemObj, bookOrCd) => {
    bookOrCd.poems.forEach(poem => {
      if (!poemObj[poem.name] && poem.version === bookOrCd.name) {
        poemObj[poem.name] = 1;
      } else if (poemObj[poem.name] && poem.version === bookOrCd.name) {
        poemObj[poem.name] = poemObj[poem.name] + 1;
      }
    });
    return poemObj;
  }, {});
  const listOfPoems = Object.keys(poemMenu).map(poem => [
    `${poem} (${poemMenu[poem]})`,
    poem
  ]);

  return (
    <div className="poemMenu">
      {listOfPoems.map((poem, index) => (
        <button
          key={`poemCount${index}`}
          type="button"
          className="poemMenuButton"
          onClick={() => choosePoem(poem[1])}
        >
          <strong>{poem[0]}</strong>
        </button>
      ))}
      <p>Number of Poems: {listOfPoems.length}</p>
    </div>
  );
};

PoemMenu.propTypes = {
  choosePoem: PropTypes.func.isRequired,
  poemDatabase: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PoemMenu;
