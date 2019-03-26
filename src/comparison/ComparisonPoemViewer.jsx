import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComparisonPoemViewer extends Component {
  state = {
    isLoading: false,
    textFile: null
  };

  componentDidMount() {
    const { textAddress } = this.props;
    return fetch(textAddress)
      .then(r => r.text())
      .then(textFile => {
        this.setState({ textFile: this.splitTextFile(textFile) });
      });
  }

  componentDidUpdate(prevProps) {
    const { textAddress } = this.props;
    if (prevProps.textAddress !== textAddress) {
      return fetch(textAddress)
        .then(r => r.text())
        .then(textFile => {
          this.setState({ textFile: this.splitTextFile(textFile) });
        });
    }
  }

  splitTextFile = text => {
    const stanzas = text.split('\n\n');
    return stanzas.map((stanza, index) => {
      const textLines = stanza.split('\n');
      const removeInfo = textLines.filter(line => line[2] !== '#');
      return (
        <div className="comparisonStanza" key={`stanza${index}`}>
          {removeInfo.map((line, textLineIndex) => {
            const splitline = line.split('|');
            return (
              <div
                className="comparisonPoemRow"
                key={`poemRow${textLineIndex}`}
              >
                {splitline.map((column, poemColumnIndex) => (
                  <div
                    className="comparisonPoemColumn"
                    key={`poemColumn${poemColumnIndex}`}
                  >
                    <div className="comparisonPoemElement">
                      {column.replace(/\s/g, '\u00a0')}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      );
    });
  };

  render() {
    const { isLoading, textFile } = this.state;
    return isLoading ? (
      <div>
        <p>Loading poem...</p>
      </div>
    ) : (
      <div className="comparisonTextFile">{textFile}</div>
    );
  }
}

ComparisonPoemViewer.propTypes = {
  textAddress: PropTypes.string.isRequired
};
