import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'prismjs';
// import  from 'html-react-parse';
import Popup from 'reactjs-popup';
import {
  rotate,
  rotateArrays,
  replace,
  reverseArrays
} from 'historical-permutations';
import '../css/prism.css';
import '../css/code.css';

function deepEquals(array1, array2) {
  array1.every((value, index) => {
    return value === array2[index];
  });
}

class Algorithm extends Component {
  state = {
    rotation: 0,
    reversePattern: false,
    reverseElements: false,
    infoOpen: false,
    showCode: false,
    tompkinsDirection: 1,
    originalPermutation: [],
    replacedPermutations: [],
    rotatedPermutations: [],
    cssReference: {}
  };

  componentDidMount() {
    const { arrayOfNumbers, userSelectedArray } = this.props;

    const originalPermutation = this.generatePermutation();
    const replacedPermutations = replace(
      originalPermutation,
      arrayOfNumbers,
      userSelectedArray,
      0
    );
    this.setState({
      originalPermutation,
      replacedPermutations,
      rotatedPermutations: replacedPermutations
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      numberOrText,
      numberOfElements,
      userSelectedArray,
      arrayOfNumbers
    } = this.props;

    const { rotation, reverseElements, reversePattern } = this.state;

    // Number of Elements Changes

    if (
      numberOfElements !== prevProps.numberOfElements &&
      deepEquals(userSelectedArray, prevProps.userSelectedArray)
    ) {
      const originalPermutation = this.generatePermutation();

      const reversedPattern = reversePattern
        ? reverseArrays(originalPermutation)
        : originalPermutation;
      const reversedElements = reverseElements
        ? arrayOfNumbers.reverse()
        : arrayOfNumbers;

      const numberTextArray =
        numberOrText === 'number' ? arrayOfNumbers : userSelectedArray;

      const replacedPermutations = replace(
        reversedPattern,
        reversedElements,
        numberTextArray,
        0
      );
      const cssReference = numberTextArray.reduce(
        (referenceObject, value, index) => {
          referenceObject[String(value)] = reverseElements[index];
          return referenceObject;
        },
        {}
      );

      const permutationShown =
        numberOrText === 'number'
          ? replacedPermutations[0]
          : replacedPermutations[1];

      const rotatedPermutations =
        rotation === 0
          ? permutationShown
          : rotateArrays(permutationShown, rotation);

      this.setState({
        originalPermutation,
        replacedPermutations,
        rotatedPermutations,
        cssReference
      });
    }
  }

  permutationUpdate = amountToUpdate => {
    const { arrayOfNumbers, numberOrText, userSelectedArray } = this.props;
    const { reverseElements, reversePattern, rotation } = this.state;

    const originalPermutation =
      amountToUpdate >= 0
        ? this.generatePermutation()
        : state.originalPermutation;

    let reversedPattern;
    let reversedElements;
    let replacedPermutations = state.replacedPermutations;
    let numberTextArray;
    let permutationShown =
      numberOrText === 'number'
        ? replacedPermutations[0]
        : replacedPermutations[1];
    let cssReference = state.cssReference;

    if (amountToUpdate >= 1) {
      reversedPattern = reversePattern
        ? reverseArrays(originalPermutation)
        : originalPermutation;
      reversedElements = reverseElements
        ? arrayOfNumbers.reverse()
        : arrayOfNumbers;
      numberTextArray =
        numberOrText === 'number' ? arrayOfNumbers : userSelectedArray;
    }
    if (amountToUpdate >= 2) {
      replacedPermutations = replace(
        reversedPattern,
        reversedElements,
        numberTextArray,
        0
      );
      cssReference = numberTextArray.reduce((referenceObject, value, index) => {
        referenceObject[String(value)] = reverseElements[index];
        return referenceObject;
      }, {});
    }
    if (amountToUpdate >= 3) {
      permutationShown =
        numberOrText === 'number'
          ? replacedPermutations[0]
          : replacedPermutations[1];
    }
    const rotatedPermutations =
      rotation === 0
        ? permutationShown
        : rotateArrays(permutationShown, rotation);
    this.setState({
      originalPermutation,
      replacedPermutations,
      rotatedPermutations,
      cssReference
    });
  };

  generatePermutation = () => {
    const { algorithmData, arrayOfNumbers, numberOfElements } = this.props;
    const { tompkinsDirection } = this.state;

    let originalPermutation;
    // 2 = 2 parameters, 1 = array, 0 = number
    if (algorithmData.arguments === 2) {
      originalPermutation = algorithmData.algorithm(
        arrayOfNumbers,
        tompkinsDirection
      );
    } else if (algorithmData.arguments === 1) {
      originalPermutation = algorithmData.algorithm(arrayOfNumbers);
    } else if (algorithmData.arguments === 0) {
      originalPermutation = algorithmData.algorithm(numberOfElements);
    }
    return originalPermutation;
  };

  replaceContent = (originalPermutation, reverseElements, reversePattern) => {
    // console.log(originalPermutation, reverseElements, reversePattern);
    const { userSelectedArray, arrayOfNumbers, numberOrText } = this.props;
    const reversePatternOrNot = reversePattern
      ? reverseArrays(originalPermutation)
      : originalPermutation;
    const numberOrTextArray = numberOrText ? arrayOfNumbers : userSelectedArray;
    // console.log(
    //   'numberOrText',
    //   numberOrTextArray,
    //   numberOrText,
    //   arrayOfNumbers,
    //   userSelectedArray
    // );
    const reversedElementsOrNot = reverseElements
      ? numberOrTextArray.reverse()
      : numberOrTextArray;
    // console.log(
    //   'replace',
    //   reversePatternOrNot,
    //   arrayOfNumbers,
    //   reversedElementsOrNot
    // );
    return replace(
      reversePatternOrNot,
      arrayOfNumbers,
      reversedElementsOrNot,
      1
    );
  };

  reversePattern = permutation => {
    const { reversePattern } = this.state;
    return reversePattern ? reverseArrays(permutation) : permutation;
  };

  rotateOutputArray = () => {
    const { numberOrText } = this.props;
    this.setState(state => {
      const {
        originalPermutation,
        rotatedReversedPermutations,
        rotation
      } = state;
      const arrayToUse = numberOrText
        ? originalPermutation
        : rotatedReversedPermutations;
      return { displayedPermutation: rotate(arrayToUse, rotation) };
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

  tompkinsDirection = event => {
    const newState = event.target.checked ? -1 : 1;
    this.setState({ tompkinsDirection: newState });
  };

  render() {
    const { algorithmData, numberOfElements, coloredOrNot } = this.props;
    const { displayedPermutation, infoOpen, showCode } = this.state;
    console.log('displayedPermutation', displayedPermutation);

    const paperAddress = 'papers';
    const highlightedCode = algorithmData.code; // Prism.highlight(algorithmData.code, Prism.languages.javascript, 'javascript');
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
                      <a href={`${paperAddress}/${reference[1]}`}>
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
          {algorithmData.name === 'Tompkins-Paige Algorithm' && (
            <div className="checkFonts">
              <label htmlFor={`direction${algorithmData.name}checkbox`}>
                Direction:
              </label>
              <input
                type="checkbox"
                name={`direction${algorithmData.name}checkbox`}
                id={`direction${algorithmData.name}checkbox`}
                onChange={e => this.tompkinsDirection(e)}
              />
            </div>
          )}
        </section>
        <section className="indivcolumns">
          {displayedPermutation.map((perm, index) => (
            <div key={`${algorithmData.name}${index}`} className="allColumns">
              {coloredOrNot &&
                perm.map((element, secondIndex) => (
                  <div
                    key={`${algorithmData.name}${index}${secondIndex}${
                      perm[secondIndex]
                    }`}
                    className={`element${perm[secondIndex]} indivElement`}
                  >
                    {element}
                  </div>
                ))}
              {!coloredOrNot && perm.join(' ')}
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
              {/* <code>{Parser(highlightedCode)}</code> */}
              <code>{highlightedCode}</code>
            </pre>
          </div>
        </Popup>
      </div>
    );
  }
}

Algorithm.propTypes = {
  algorithmData: PropTypes.func.isRequired,
  order: PropTypes.arrayOf(PropTypes.number).isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOrText: PropTypes.bool.isRequired,
  coloredOrNot: PropTypes.bool.isRequired
};

export default Algorithm;
