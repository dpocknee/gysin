import React, { Component } from 'react';
import Input from './components/Input';
import SelectContent from './components/SelectContent';
import './css/Algorithms.css';

export default class Algorithms extends Component {
  state = {
    content: ['I', 'AM', 'THAT', 'I', 'AM'],
    plainTextBox: false,
    numberNotText: false,
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
      plainTextBox: allState.plainTextBox,
      numberNotText: allState.numberNotText,
    });
  };

  render() {
    const { content, plainTextBox, numberNotText } = this.state;
    return (
      <div className="algwrapper">
        <header>
          <h1>Permutation Algorithms</h1>
        </header>
        <SelectContent clickHandler={this.clickHandler} onChangeHandler={this.onChangeHandler} />
        <Input content={content} plainTextBox={plainTextBox} numberNotText={numberNotText} />
      </div>
    );
  }
}
