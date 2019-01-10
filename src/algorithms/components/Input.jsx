import React, { Component } from 'react';
import Algorithm from './Algorithm';
import algorithmData from '../algorithms';

class Input extends Component {
  render() {
    const content = this.props.content;
    const order = content.map((el, i) => i + 1);
    return (
      <div className="algorithmWrapper">
        <Algorithm
          algorithmType={algorithmData.tompkins}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
        <Algorithm
          algorithmType={algorithmData.lehmer}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
        <Algorithm
          algorithmType={algorithmData.wells}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
        <Algorithm
          algorithmType={algorithmData.shenShimratFischer}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
        <Algorithm
          algorithmType={algorithmData.steinhausJohnsonTrotter}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
        <Algorithm
          algorithmType={algorithmData.heap}
          order={order}
          plainTextBox={this.props.plainTextBox}
          numberNotText={this.props.numberNotText}
          content={content}
        />
      </div>
    );
  }
}

export default Input;
