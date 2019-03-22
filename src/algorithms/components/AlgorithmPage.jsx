import React, { Component } from 'react';
import Algorithm from './Algorithm';
import algorithmDatabase from '../data/algorithmDatabase';
import Form from './Form';
import '../css/Algorithms.css';

export default class Algorithms extends Component {
  state = {
    userSelectedArray: ['I', 'AM', 'THAT', 'I', 'AM'],
    coloredOrNot: true,
    numberOrText: true,
    numberOfElements: 5,
    arrayOfNumbers: [1, 2, 3, 4, 5],
    orderArray: []
  };

  componentWillMount() {
    const numberOfElements = 5;
    const newSetup = this.orderArrayGenerator(numberOfElements);
    this.setState({ ...newSetup });
  }

  orderArrayGenerator = numberOfElements => {
    const arrayOfNumbers = Array.from(
      { length: numberOfElements },
      (value, index) => index + 1
    );
    const factorial = arrayOfNumbers.reduce((outputFactorial, value, index) => {
      return outputFactorial * value;
    }, 1);
    const orderArray = Array.from(
      { length: factorial },
      (value, index) => index
    );
    return { arrayOfNumbers, orderArray };
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

    const numberOfElements = parseInt(allState.numberOfElements, 10);
    const userSelectedArray = contentArray.slice(0, numberOfElements);
    const newSetup = this.orderArrayGenerator(numberOfElements);
    this.setState({
      userSelectedArray,
      coloredOrNot: allState.coloredOrNot,
      numberOrText: allState.numberOrText,
      numberOfElements,
      ...newSetup
    });
  };

  render() {
    const {
      coloredOrNot,
      numberOrText,
      numberOfElements,
      arrayOfNumbers,
      userSelectedArray,
      orderArray
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
              orderArray={orderArray}
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
