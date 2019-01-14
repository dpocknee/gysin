import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PoemViewer extends Component {
  state = {
    isLoading: false,
    textFile: null,
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
    return stanzas.map(stanza => {
      const textLines = stanza.split('\n');
      return (
        <div className="stanza">
          {textLines.map(line => {
            const splitline = line.split('|');
            return (
              <div className="poemRow">
                {splitline.map(column => (
                  <div className="poemColumn">
                    <div className="poemElement">{column.replace(/\s/g, '\u00a0')}</div>
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
      <div className="textFile">{textFile}</div>
    );
  }
}

PoemViewer.propTypes = {
  textAddress: PropTypes.string.isRequired,
};
