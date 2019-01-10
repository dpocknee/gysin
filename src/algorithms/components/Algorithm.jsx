import React, { Component } from 'react';
import algorithmDatabase from '../data/papers.json';
import { arrayShift, substituteContent, rotate } from '../utils/utils';
import { reverse } from 'lodash';
import Prism from 'prismjs';
import Parser from 'html-react-parser';
import '../css/prism.css';
import '../css/code.css';

class Algorithm extends Component {
  state = {
    shift: 0,
    reverse: false,
  };
  shiftHandler = event => {
    this.setState({ shift: parseInt(event.target.value) });
  };

  render() {
    const originalPermutations = this.props.algorithmType.arguments
      ? this.props.algorithmType.algorithm(this.props.order, 1)
      : this.props.algorithmType.algorithm(this.props.order);

    const shiftedPermutations =
      this.state.shift === 0
        ? originalPermutations
        : arrayShift(originalPermutations, this.state.shift);

    const reversedPermutations = this.state.reverse
      ? shiftedPermutations.map(row => reverse(row))
      : shiftedPermutations;

    const substitutedContent = this.props.numberNotText
      ? substituteContent(reversedPermutations, this.props.order, this.props.content)
      : reversedPermutations.map(row => [row, row]);

    const algRef = this.props.algorithmType.references;
    const codeTest = this.props.algorithmType.algorithm.toString();
    const highlightedCode = Prism.highlight(codeTest, Prism.languages.javascript, 'javascript');
    return (
      <div className="indivAlg">
        <header>
          <h1>{this.props.algorithmType.name}</h1>
          <p>{this.props.algorithmType.info}</p>
          {algRef.map((reference, index) => (
            <p key={reference + String(index)}>
              {algorithmDatabase[algRef[index]].author}
              <br />
              <a href={'papers/' + algorithmDatabase[algRef[index]].link}>
                {algorithmDatabase[algRef[index]].title}
              </a>{' '}
              ({algorithmDatabase[algRef[index]].year})
            </p>
          ))}
        </header>
        <section className="shift">
          <input
            type="number"
            placeholder="0"
            onChange={this.shiftHandler}
            max={this.props.order.length - 1}
            min={0 - (this.props.order.length - 1)}
            key={this.props.algorithmType.name + 'shift'}
          />
          <label htmlFor={`${this.props.algorithmType.name}checkbox`}>Reverse:</label>
          <input
            type="checkbox"
            name={`${this.props.algorithmType.name}checkbox`}
            id={`${this.props.algorithmType.name}checkbox`}
            onChange={this.reverseCheckbox}
          />
        </section>
        <section>
          <div className="indivcolumns">
            {substitutedContent.map((perm, index) => (
              <div key={this.props.algorithmType.name + index} className="allColumns">
                {this.props.plainTextBox &&
                  perm[1].map((element, secondIndex) => (
                    <div
                      key={
                        this.props.algorithmType.name + index + secondIndex + perm[0][secondIndex]
                      }
                      className={`element${perm[0][secondIndex]} indivElement`}
                    >
                      {element}
                    </div>
                  ))}
                {!this.props.plainTextBox && perm[1].join(' ')}
              </div>
            ))}
          </div>
        </section>
        <div className="code">
          <pre>
            <code>{Parser(highlightedCode)}</code>
          </pre>
        </div>
      </div>
    );
  }
  reverseCheckbox = event => {
    const boxState = event.target.checked;
    this.setState({ reverse: boxState });
  };
  componentDidMount() {
    console.log(`../algorithms/${this.props.algorithmType.code}`);
  }
}

export default Algorithm;
