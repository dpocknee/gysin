import React, { Component } from 'react';
import Algorithm from '../algorithms/components/Algorithm';
import ComparisonPoemViewer from './ComparisonPoemViewer';
import PoemMenu from './PoemMenu';
import poemDatabase from '../database/poemDatabase';

export default class Comparison extends Component {
  state = {
    selectedPoem: null,
    selectedAlgorithm: null,
  };

  choosePoem = poemChosen => {
    this.setState({ selectedPoem: poemChosen });
  };

  filterPoems = selectedPoem => poemDatabase.reduce((filteredArr, bookOrCd) => {
    const validPoems = bookOrCd.poems.filter(
      poem => poem.name === selectedPoem && poem.version === bookOrCd.name,
    );
    if (validPoems.length > 0) return [...filteredArr, ...validPoems];
    return filteredArr;
  }, []);

  render() {
    const { selectedPoem } = this.state;
    const filteredPoems = this.filterPoems(selectedPoem);
    return (
      <div>
        <section>
          <h1>Comparison</h1>
        </section>
        <PoemMenu poemDatabase={poemDatabase} choosePoem={this.choosePoem} />
        <div className="comparisonPoems">
          {filteredPoems.map((poem, index) => (
            <ComparisonPoemViewer key={`filteredPoems${index}`} textAddress={poem.file} />
          ))}
        </div>
      </div>
    );
  }
}
