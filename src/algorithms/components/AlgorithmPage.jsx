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
    orderArray: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119
    ]
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
              numberOrText={numberOrText}
              arrayOfNumbers={arrayOfNumbers}
              numberOfElements={numberOfElements}
              userSelectedArray={userSelectedArray}
              orderArray={orderArray}
            />
          ))}
        </div>
      </div>
    );
  }
}
