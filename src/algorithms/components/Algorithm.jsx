import React, { Component } from 'react';
import Prism from 'prismjs';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { reverse } from 'lodash';
import algorithmDatabase from '../data/papers.json';
import { arrayShift, substituteContent } from '../utils/utils';
import '../css/prism.css';
import '../css/code.css';

class Algorithm extends Component {
  state = {
    shift: 0,
    reverseBox: false,
    infoOpen: false,
    showCode: false,
    originalPermutation: [],
  };

  componentDidMount() {
    const { algorithmType, order } = this.props;
    const originalPermutation = algorithmType.arguments
      ? algorithmType.algorithm(order, 1)
      : algorithmType.algorithm(order);

    this.setState({ originalPermutation });
  }

  componentDidUpdate(prevProps) {
    const { algorithmType, order  } = this.props;
    if (prevProps.order !== order) {
      const originalPermutation = algorithmType.arguments
        ? algorithmType.algorithm(order, 1)
        : algorithmType.algorithm(order);
      this.setState({ originalPermutation });
    }
  }

  shiftHandler = event => {
    this.setState({ shift: parseInt(event.target.value, 10) });
  };

  reverseCheckbox = event => {
    this.setState({ reverseBox: event.target.checked });
  };

  openCloseInfo = () => {
    this.setState(state => ({ infoOpen: !state.infoOpen }));
  };

  showHideCode = () => {
    this.setState(state => ({ showCode: !state.showCode }));
  };

  render() {
    const {
      algorithmType, order, numberOrText, content, coloredOrNot,
    } = this.props;
    const {
      shift, reverseBox, infoOpen, originalPermutation, showCode,
    } = this.state;

    const shiftedPermutations = shift === 0 ? originalPermutation : arrayShift(originalPermutation, shift);

    const reversedPermutations = reverseBox
      ? shiftedPermutations.map(row => reverse([...row]))
      : shiftedPermutations;

    const substitutedContent = numberOrText
      ? substituteContent(reversedPermutations, order, content)
      : reversedPermutations.map(row => [row, row]);

    const algRef = algorithmType.references;
    const codeTest = algorithmType.algorithm.toString();
    const highlightedCode = Prism.highlight(codeTest, Prism.languages.javascript, 'javascript');
    return (
      <div className="indivAlg">
        <header>
          <h1>{`${algorithmType.name} (${algorithmType.year})`}</h1>
          <div className="info">
            {infoOpen && (
              <>
                <div className="writing">
                  <p>{algorithmType.info}</p>
                  {algRef.map((reference, index) => (
                    <p key={reference + String(index)}>
                      {algorithmDatabase[algRef[index]].author}
                      <br />
                      <a href={`papers/${algorithmDatabase[algRef[index]].link}`}>
                        {algorithmDatabase[algRef[index]].title}
                      </a>{' '}
                      ({algorithmDatabase[algRef[index]].year})
                    </p>
                  ))}
                </div>
                <div className="buttonwrapper">
                  <div>
                    <button type="button" onClick={() => this.openCloseInfo()}>
                      Close Info
                    </button>
                  </div>
                  <div>
                    <button type="button" onClick={() => this.showHideCode()}>
                      Show Code
                    </button>
                  </div>
                </div>
              </>
            )}
            {!infoOpen && (
              <div className="buttonwrapper">
                <button type="button" onClick={() => this.openCloseInfo()}>
                  More info
                </button>
              </div>
            )}
          </div>
        </header>
        <section className="shift">
          <input
            type="number"
            placeholder="0"
            onChange={e => this.shiftHandler(e)}
            max={order.length - 1}
            min={0 - (order.length - 1)}
            key={`${algorithmType.name}shift`}
          />
          <label htmlFor={`${algorithmType.name}checkbox`}>Reverse:</label>
          <input
            type="checkbox"
            name={`${algorithmType.name}checkbox`}
            id={`${algorithmType.name}checkbox`}
            onChange={e => this.reverseCheckbox(e)}
          />
        </section>
        <section className="indivcolumns">
          {substitutedContent.map((perm, index) => (
            <div key={`${algorithmType.name}${index}`} className="allColumns">
              {coloredOrNot
                && perm[1].map((element, secondIndex) => (
                  <div
                    key={`${algorithmType.name}${index}${secondIndex}${perm[0][secondIndex]}`}
                    className={`element${perm[0][secondIndex]} indivElement`}
                  >
                    {element}
                  </div>
                ))}
              {!coloredOrNot && perm[1].join(' ')}
            </div>
          ))}
        </section>
        <Popup open={showCode}>
          <div
            className="popup code"
            tabIndex={0}
            role="button"
            onClick={() => this.showHideCode()}
            onKeyDown={() => this.showHideCode()}
          >
            <pre>
              <code>{Parser(highlightedCode)}</code>
            </pre>
          </div>
        </Popup>
      </div>
    );
  }
}

Algorithm.propTypes = {
  algorithmType: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  numberOrText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  coloredOrNot: PropTypes.string.isRequired,
};

export default Algorithm;
