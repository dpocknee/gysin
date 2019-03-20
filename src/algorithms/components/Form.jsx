import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Algorithms.css';

class Form extends Component {
  state = {
    element1: 'I',
    element2: 'AM',
    element3: 'THAT',
    element4: 'I',
    element5: 'AM',
    element6: '6',
    numberOfElements: 5,
    coloredOrNot: false,
    numberOrText: false,
    ordering: 'numerical',
  };

  onChangeHandler = event => {
    const inputType = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [event.target.id]: inputType,
    });
  };

  render() {
    const { clickHandler } = this.props;
    const { numberOfElements, numberOrText, coloredOrNot } = this.state;
    return (
      <div className="blockRed" style={{ maxWidth: '800px' }}>
        <div className="header">
          <div className="header1Red">Permutation Input</div>
        </div>
        <div className="algorithmsParams">
          <form>
            Element 1:
            <input
              type="text"
              id="element1"
              placeholder="I"
              size="10"
              onChange={this.onChangeHandler}
            />
            Element 2:
            <input
              type="text"
              id="element2"
              placeholder="AM"
              size="10"
              onChange={this.onChangeHandler}
            />
            Element 3:
            <input
              type="text"
              id="element3"
              placeholder="THAT"
              size="10"
              onChange={this.onChangeHandler}
            />
            <br />
            Element 4:
            <input
              type="text"
              id="element4"
              placeholder="I"
              size="10"
              onChange={this.onChangeHandler}
            />
            Element 5:
            <input
              type="text"
              id="element5"
              placeholder="AM"
              size="10"
              onChange={this.onChangeHandler}
            />
            Element 6:
            <input
              type="text"
              id="element6"
              placeholder="6"
              size="10"
              onChange={this.onChangeHandler}
            />
            <br />
            Number of elements:
            <input
              type="number"
              id="numberOfElements"
              min="2"
              max="6"
              value={numberOfElements}
              onChange={this.onChangeHandler}
            />
            <br />
            <input type="checkbox" id="coloredOrNot" onChange={this.onChangeHandler} />
            {coloredOrNot ? 'Colour Permutations' : 'Show Permutations as Plain Text'}
            <input type="checkbox" id="numberOrText" onChange={this.onChangeHandler} />
            {numberOrText
              ? 'Show Permutations Using the Elements Above'
              : 'Show Permutations as Numbers'}
            <br />
            <input
              type="submit"
              value="Submit"
              onClick={event => clickHandler(event, this.state)}
            />
            Ordering{' '}
            <select id="ordering" name="ordering" onChange={this.onChangeHandler}>
              <option select="numerical">Numerical</option>
              {/* <option select="lcg">LCG</option>
              <option select="fischerYates">Fischer-Yates</option> */}
            </select>
          </form>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Form;
