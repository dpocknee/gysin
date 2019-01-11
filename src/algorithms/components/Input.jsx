import React from 'react';
import PropTypes from 'prop-types';
import Algorithm from './Algorithm';
import algorithmData from '../algorithms';

const Input = props => {
  const { content, plainTextBox, numberNotText } = props;
  const order = content.map((el, i) => i + 1);
  return (
    <div className="algorithmWrapper">
      <Algorithm
        algorithmType={algorithmData.tompkins}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.lehmer}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.wells}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.shenShimratFischer}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.steinhausJohnsonTrotter}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.heap}
        order={order}
        plainTextBox={plainTextBox}
        numberNotText={numberNotText}
        content={content}
      />
    </div>
  );
};

Input.propTypes = {
  content: PropTypes.string.isRequired,
  plainTextBox: PropTypes.bool.isRequired,
  numberNotText: PropTypes.bool.isRequired,
};

export default Input;
