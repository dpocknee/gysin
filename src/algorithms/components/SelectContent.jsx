import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectContent extends Component {
  state = {
    element1: 'I',
    element2: 'AM',
    element3: 'THAT',
    element4: 'I',
    element5: 'AM',
    element6: '6',
    numberOfElements: 5,
    plainTextBox: false,
    numberNotText: true,
    ordering: 'numerical'
  };
  render() {
    return (
      <section>
        <h3>Permutation Input</h3>
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
            value={this.state.numberOfElements}
            // placeholder="5"
            onChange={this.onChangeHandler}
          />
          <br />
          <input
            type="checkbox"
            id="plainTextBox"
            onClick={this.onChangeHandler}
          />
          css/plain-text
          <input
            type="checkbox"
            id="numberNotText"
            onChange={this.onChangeHandler}
          />
          number/text
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={event => this.props.clickHandler(event, this.state)}
          />
          Ordering{' '}
          <select id="ordering" name="ordering" onChange={this.onChangeHandler}>
            <option select="numerical">Numerical</option>
            <option select="grayCode">Gray code</option>
          </select>
        </form>
      </section>
    );
  }
  onChangeHandler = event => {
    console.log(event.target.id);
    const inputType =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    this.setState({
      [event.target.id]: inputType
    });
  };
}

SelectContent.propTypes = {};

export default SelectContent;
