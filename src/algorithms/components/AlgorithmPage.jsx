import React, { Component } from 'react';
import Algorithm from './Algorithm';
import algorithmDatabase from '../data/algorithmDatabase';
import Form from './Form';
import '../css/Algorithms.css';

export default class Algorithms extends Component {
  state = {
    userSelectedArray: ['I', 'AM', 'THAT', 'I', 'AM'],
    coloredOrNot: false,
    numberOrText: false,
    numberOfElements: 5,
    arrayOfNumbers: [1, 2, 3, 4, 5]
  };

  clickHandler = (event, allState) => {
    event.preventDefault();
    const contentArray = [
      allState.element1,
      allState.element2,
      allState.element3,
      allState.element4,
      allState.element5,
      allState.element6
    ];

    const userSelectedArray = contentArray.slice(
      0,
      parseInt(allState.numberOfElements, 10)
    );
    const numberOfElements = parseInt(allState.numberOfElements, 10);
    const arrayOfNumbers = Array.from(
      { length: numberOfElements },
      (v, i) => i + 1
    );
    this.setState({
      userSelectedArray,
      coloredOrNot: allState.coloredOrNot,
      numberOrText: allState.numberOrText,
      arrayOfNumbers,
      numberOfElements
    });
  };

  render() {
    const {
      coloredOrNot,
      numberOrText,
      numberOfElements,
      arrayOfNumbers,
      userSelectedArray
    } = this.state;
    return (
      <div className="algwrapper">
        <section>
          <h1>Permutation Algorithms</h1>
        </section>
        <Form clickHandler={this.clickHandler} />
        <div className="algorithmWrapper">
          {algorithmDatabase.map((algorithm, index) => (
            <Algorithm
              key={`algorithm${algorithm.name.split(' ')[0]}${index}`}
              algorithmData={algorithm}
              coloredOrNot={coloredOrNot}
              numberOrText={numberOrText}
              arrayOfNumbers={arrayOfNumbers}
              numberOfElements={numberOfElements}
              userSelectedArray={userSelectedArray}
            />
          ))}
        </div>
      </div>
    );
  }
}
