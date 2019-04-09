import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';
import Popup from 'reactjs-popup';
import { rotateArrays, replace, reverseArrays } from 'historical-permutations';
import '../css/code.css';

function deepEquals(array1, array2) {
  array1.every((value, index) => {
    return value === array2[index];
  });
}

function reverseNonMutate(array) {
  const maxIndex = array.length - 1;
  return array.map((value, index) => {
    return array[maxIndex - index];
  });
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

const papersFolder = './papers/';

class Algorithm extends Component {
  state = {
    rotation: 0,
    reversePattern: false,
    reverseElements: false,
    infoOpen: false,
    showCode: false,
    rotationDirection: 1,
    originalPermutation: [],
    replacedPermutations: [],
    rotatedNumberArray: [],
    rotatedTextArray: []
  };

  componentWillMount() {
    this.permutationUpdate(0);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      numberOrText,
      numberOfElements,
      userSelectedArray,
      algorithmData
    } = this.props;

    const {
      rotation,
      reverseElements,
      reversePattern,
      rotationDirection
    } = this.state;

    if (
      numberOfElements !== prevProps.numberOfElements ||
      rotationDirection !== prevState.rotationDirection ||
      algorithmData.name !== prevProps.algorithmData.name ||
      userSelectedArray !== prevProps.userSelectedArray
    ) {
      // Number of Elements Changes
      this.permutationUpdate(0);
    } else if (
      reversePattern !== prevState.reversePattern ||
      reverseElements !== prevState.reverseElements ||
      numberOrText !== prevProps.numberOrText ||
      deepEquals(userSelectedArray, prevProps.userSelectedArray)
    ) {
      // pattern or elements are reversed or inputted user array changes
      this.permutationUpdate(1);
    } else if (rotation !== prevState.rotation) {
      // rotation changes
      this.permutationUpdate(2);
    }
  }

  generatePermutation = (
    algorithmData,
    arrayOfNumbers,
    numberOfElements,
    rotationDirection
  ) => {
    let originalPermutation;
    // 4 = steinhaus, 3 = My Gysin, 2 = 2 parameters, 1 = array, 0 = number
    if (algorithmData.arguments === 2) {
      originalPermutation = algorithmData.algorithm(
        arrayOfNumbers,
        rotationDirection
      );
    } else if (algorithmData.arguments === 4) {
      if (rotationDirection === -1) {
        originalPermutation = algorithmData.algorithm(numberOfElements, 'even');
      } else {
        originalPermutation = algorithmData.algorithm(numberOfElements);
      }
    } else if (algorithmData.arguments === 3) {
      originalPermutation = algorithmData.algorithm(
        numberOfElements,
        algorithmData.gysinVersion,
        rotationDirection
      );
    } else if (algorithmData.arguments === 1) {
      originalPermutation = algorithmData.algorithm(arrayOfNumbers);
    } else if (algorithmData.arguments === 0) {
      originalPermutation = algorithmData.algorithm(numberOfElements);
    }
    return originalPermutation;
  };

  permutationUpdate = amountToUpdate => {
    this.setState((state, props) => {
      const {
        arrayOfNumbers,
        numberOrText,
        userSelectedArray,
        algorithmData,
        numberOfElements
      } = props;

      const {
        reverseElements,
        reversePattern,
        rotation,
        rotationDirection
      } = state;

      let replacedPermutationsUpdate = state.replacedPermutations.map(x => x);

      // generate permutation
      const originalPermutationUpdate =
        amountToUpdate <= 0
          ? this.generatePermutation(
              algorithmData,
              arrayOfNumbers,
              numberOfElements,
              rotationDirection
            ).map(x => x)
          : state.originalPermutation.map(x => x);

      // reverse pattern or elements
      if (amountToUpdate <= 1) {
        const reversedPattern = reversePattern
          ? reverseArrays(originalPermutationUpdate)
          : originalPermutationUpdate;
        const reversedElements = reverseElements
          ? reverseNonMutate(arrayOfNumbers)
          : arrayOfNumbers;
        const numberTextArray = numberOrText
          ? userSelectedArray
          : arrayOfNumbers;
        replacedPermutationsUpdate = replace(
          reversedPattern,
          reversedElements,
          numberTextArray,
          2
        );
      }

      // rotate array
      const rotatedNumberArray =
        rotation === 0
          ? replacedPermutationsUpdate[0]
          : rotateArrays(replacedPermutationsUpdate[0], rotation);

      const rotatedTextArray =
        rotation === 0
          ? replacedPermutationsUpdate[1]
          : rotateArrays(replacedPermutationsUpdate[1], rotation);

      return {
        originalPermutation: originalPermutationUpdate,
        replacedPermutations: replacedPermutationsUpdate,
        rotatedNumberArray,
        rotatedTextArray,
        orderArray: props.orderArray
      };
    });
  };

  shiftHandler = event => {
    this.setState({ rotation: parseInt(event.target.value, 10) });
  };

  reverseCheckbox = event => {
    this.setState({ reversePattern: event.target.checked });
  };

  reverseElements = event => {
    this.setState({ reverseElements: event.target.checked });
  };

  openCloseInfo = () => {
    this.setState(state => ({ infoOpen: !state.infoOpen }));
  };

  showHideCode = () => {
    this.setState(state => ({ showCode: !state.showCode }));
  };

  rotationDirection = event => {
    const newState = event.target.checked ? -1 : 1;
    this.setState({ rotationDirection: newState });
  };

  render() {
    const { algorithmData, numberOfElements, coloredOrNot } = this.props;

    const {
      orderArray,
      rotatedNumberArray,
      rotatedTextArray,
      infoOpen,
      showCode
    } = this.state;

    return (
      <div className="indivAlg">
        <header>
          <h1>{`${algorithmData.name} (${algorithmData.year})`}</h1>
          <div className="info">
            {infoOpen && (
              <>
                <div className="writing">
                  <p>{algorithmData.info}</p>
                  {algorithmData.references.map((reference, index) => (
                    <p key={reference[1] + String(index)}>
                      <a href={`${papersFolder}${reference[1]}`}>
                        {reference[0]}
                      </a>
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
            max={numberOfElements - 1}
            min={0 - (numberOfElements - 1)}
            key={`${algorithmData.name}shift`}
          />
          <div className="checkFonts">
            <label htmlFor={`${algorithmData.name}checkbox`}>
              Reverse Pattern:
            </label>
            <input
              type="checkbox"
              name={`${algorithmData.name}checkbox`}
              id={`${algorithmData.name}checkbox`}
              onChange={e => this.reverseCheckbox(e)}
            />
          </div>
          <div className="checkFonts">
            <label htmlFor={`${algorithmData.name}checkbox`}>
              Reverse Elements:
            </label>
            <input
              type="checkbox"
              name={`${algorithmData.name}RevElementsCheckbox`}
              id={`${algorithmData.name}RevElementsCheckbox`}
              onChange={e => this.reverseElements(e)}
            />
          </div>
          {algorithmData.arguments >= 2 && (
            <div className="checkFonts">
              <label htmlFor={`direction${algorithmData.name}checkbox`}>
                Direction:
              </label>
              <input
                type="checkbox"
                name={`direction${algorithmData.name}checkbox`}
                id={`direction${algorithmData.name}checkbox`}
                onChange={e => this.rotationDirection(e)}
              />
            </div>
          )}
        </section>
        <section className="indivcolumns">
          {orderArray.map((permNumber, index) => (
            <div
              key={`${algorithmData.name}${index}Perm`}
              className="allColumns"
            >
              {coloredOrNot
                ? rotatedTextArray[permNumber].map((element, secondIndex) => (
                    <div
                      key={`${
                        algorithmData.name
                      }${index}${secondIndex}${element}`}
                      className={`element${
                        rotatedNumberArray[index][secondIndex]
                      } indivElement`}
                    >
                      {element}
                    </div>
                  ))
                : rotatedTextArray[permNumber].join(' ')}
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
            {parse(md.render(algorithmData.code))}
          </div>
        </Popup>
      </div>
    );
  }
}

Algorithm.propTypes = {
  algorithmData: PropTypes.shape({
    algorithm: PropTypes.func,
    code: PropTypes.string,
    year: PropTypes.number,
    name: PropTypes.string,
    arguments: PropTypes.number,
    info: PropTypes.string,
    references: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired,
  coloredOrNot: PropTypes.bool.isRequired,
  numberOrText: PropTypes.bool.isRequired,
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  numberOfElements: PropTypes.number.isRequired,
  userSelectedArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderArray: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Algorithm;
