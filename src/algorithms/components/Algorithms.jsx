import React, { Component } from 'react';
import Input from './Input';
import SelectContent from './SelectContent';
import '../css/Algorithms.css';

export default class Algorithms extends Component {
  state = {
    content: ['I', 'AM', 'THAT', 'I', 'AM'],
    coloredOrNot: false,
    numberOrText: false,
  };

  clickHandler = (event, allState) => {
    event.preventDefault();
    const contentArray = [
      allState.element1,
      allState.element2,
      allState.element3,
      allState.element4,
      allState.element5,
      allState.element6,
    ];

    const sectionOfArray = contentArray.slice(0, parseInt(allState.numberOfElements, 10));
    this.setState({
      content: sectionOfArray,
      coloredOrNot: allState.coloredOrNot,
      numberOrText: allState.numberOrText,
    });
  };

  render() {
    const { content, coloredOrNot, numberOrText } = this.state;
    return (
      <div className="algwrapper">
        <section>
          <h1>Permutation Algorithms</h1>
        </section>
        <SelectContent clickHandler={this.clickHandler} onChangeHandler={this.onChangeHandler} />
        <Input content={content} coloredOrNot={coloredOrNot} numberOrText={numberOrText} />
      </div>
    );
  }
}
