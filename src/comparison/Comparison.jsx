import React, { Component } from 'react';
import Algorithm from '../algorithms/components/Algorithm';
import ComparisonPoemViewer from './ComparisonPoemViewer';
import PoemMenu from './PoemMenu';
import poemDatabase from '../database/poemDatabase';
import algorithmData from '../algorithms/data/algorithmDatabase';

export default class Comparison extends Component {
  state = {
    selectedPoem: null,
    selectedAlgorithm: 'tompkins'
  };

  choosePoem = poemChosen => {
    this.setState({ selectedPoem: poemChosen });
  };

  filterPoems = selectedPoem =>
    poemDatabase.reduce((filteredArr, bookOrCd) => {
      const validPoems = bookOrCd.poems.filter(
        poem => poem.name === selectedPoem && poem.version === bookOrCd.name
      );
      if (validPoems.length > 0) return [...filteredArr, ...validPoems];
      return filteredArr;
    }, []);

  changeAlgorithm = event => {
    this.setState({ selectedAlgorithm: event.target.value });
  };

  render() {
    const { selectedPoem, selectedAlgorithm } = this.state;
    const filteredPoems = this.filterPoems(selectedPoem);
    const content = selectedPoem ? selectedPoem.split(' ') : null;
    const order = selectedPoem ? content.map((el, i) => i + 1) : null;
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <section>
              <h1>Comparison</h1>
            </section>
            <div className="blockRed" style={{ width: '400px' }}>
              <div className="header">
                <div className="header1Red">Select Algorithm</div>
                <div className="algorithmsParams" style={{ padding: '10px' }}>
                  <label htmlFor="algorithmSelect">Choose Algorithm</label>
                  <select
                    id="algorithmSelect"
                    name="algorithmSelect"
                    onChange={e => this.changeAlgorithm(e)}
                  >
                    <option value="" selected>
                      Please choose
                    </option>
                    <option value="tompkins">Tompkins-Paige</option>
                    <option value="lehmer">Lehmer Constant Difference</option>
                    <option value="wells">Wells</option>
                    <option value="shenShimratFischer">
                      Reverse Lexicographic
                    </option>
                    <option value="steinhausJohnsonTrotter">
                      Steinhaus-Johnson-Trotter
                    </option>
                    <option value="heap">Heap</option>
                  </select>
                </div>
              </div>
            </div>
            <PoemMenu
              poemDatabase={poemDatabase}
              choosePoem={this.choosePoem}
            />
            <div className="comparisonPoems">
              {filteredPoems.map((poem, index) => (
                <ComparisonPoemViewer
                  key={`filteredPoems${index}`}
                  textAddress={poem.file}
                />
              ))}
            </div>
          </div>
          {selectedPoem && (
            <Algorithm
              algorithmType={algorithmData[selectedAlgorithm]}
              order={order}
              coloredOrNot={false}
              numberOrText
              content={content}
            />
          )}
        </div>
      </div>
    );
  }
}

{
  /* <Algorithm
key={`algorithm${algorithm.name.split(' ')[0]}${index}`}
algorithmData={algorithm}
coloredOrNot={coloredOrNot}
numberOrText={numberOrText}
arrayOfNumbers={arrayOfNumbers}
numberOfElements={numberOfElements}
userSelectedArray={userSelectedArray}
orderArray={orderArray}
/> */
}
