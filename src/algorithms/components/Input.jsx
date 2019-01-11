import React from 'react';
import PropTypes from 'prop-types';
import Algorithm from './Algorithm';
import algorithmData from '../algorithms';

const Input = props => {
  const { content, coloredOrNot, numberOrText } = props;
  const order = content.map((el, i) => i + 1);
  return (
    <div className="algorithmWrapper">
      <Algorithm
        algorithmType={algorithmData.tompkins}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.lehmer}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.wells}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.shenShimratFischer}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.steinhausJohnsonTrotter}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
      <Algorithm
        algorithmType={algorithmData.heap}
        order={order}
        coloredOrNot={coloredOrNot}
        numberOrText={numberOrText}
        content={content}
      />
    </div>
  );
};

Input.propTypes = {
  content: PropTypes.string.isRequired,
  coloredOrNot: PropTypes.bool.isRequired,
  numberOrText: PropTypes.bool.isRequired,
};

export default Input;
