import React, { Component } from 'react';
import Algorithm from '../algorithms/components/Algorithm';
import ComparisonPoemViewer from './ComparisonPoemViewer';
import PoemMenu from './PoemMenu';
import poemDatabase from '../database/poemDatabase';
import algorithmDatabase from '../algorithms/data/algorithmDatabase';

export default class Comparison extends Component {
  state = {
    selectedPoem: null,
    poemTitleArray: [],
    arrayOfNumbers: [],
    orderArray: [],
    chosenAlgorithm: {}
  };

  componentWillMount() {
    this.setState({ chosenAlgorithm: algorithmDatabase[0] });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedPoem } = this.state;
    if (selectedPoem !== prevState.selectedPoem && selectedPoem) {
      const poemTitleArray = selectedPoem.split(' ');
      const arrayOfNumbers = poemTitleArray.map((el, i) => i + 1);
      const factorial = arrayOfNumbers.reduce(
        (outputFactorial, value, index) => {
          return outputFactorial * value;
        },
        1
      );
      const orderArray = Array.from(
        { length: factorial },
        (value, index) => index
      );
      this.setState({
        arrayOfNumbers,
        orderArray,
        poemTitleArray
      });
    }
  }

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
    const chosenAlgorithm = algorithmDatabase.find(
      (algorithm, index) => algorithm.name === event.target.value
    );
    this.setState({ chosenAlgorithm });
  };

  render() {
    const {
      selectedPoem,
      arrayOfNumbers,
      orderArray,
      chosenAlgorithm,
      poemTitleArray
    } = this.state;
    const filteredPoems = this.filterPoems(selectedPoem);

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
                    <option value="" defaultValue>
                      Please choose
                    </option>
                    {algorithmDatabase.map(algorithm => (
                      <option
                        key={`algoOptions_${algorithm.name.split(' ')[0]}`}
                        value={algorithm.name}
                      >
                        {algorithm.name}
                      </option>
                    ))}
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
              key={`algorithmComp${chosenAlgorithm.name.split(' ')[0]}`}
              algorithmData={chosenAlgorithm}
              coloredOrNot={false}
              numberOrText
              arrayOfNumbers={arrayOfNumbers}
              numberOfElements={poemTitleArray.length}
              userSelectedArray={poemTitleArray}
              orderArray={orderArray}
            />
          )}
        </div>
      </div>
    );
  }
}
