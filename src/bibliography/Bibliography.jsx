import React, { Component } from 'react';
import poemDatabase from '../database/poemDatabase';
import databaseReference from '../database/databaseReference';
import PoemViewer from './PoemViewer';
import BibliographyTable from './BibliographyTable';
import './Bibliography.css';

function stringToUrl(string) {
  const splitWords = string.split(' ');
  const decapitalize = splitWords.map(word => `${word[0].toLowerCase()}${word.slice(1)}`);
  return decapitalize.join('-');
}

function titleToTextFile(string) {
  const splitWords = string.split(' ');
  const decapitalize = splitWords.map(word => `${word.toLowerCase()}`);
  return decapitalize.join('-');
}

export default class Bibliography extends Component {
  state = {
    textFile: '',
    popup: false,
  };

  textAddressUrl = url => {
    this.setState({ textFile: url, popup: true });
  };

  render() {
    const { textAddress, popup, textFile } = this.state;
    const poemMenu = poemDatabase.reduce((poemObj, bookOrCd) => {
      bookOrCd.poems.forEach(poem => {
        if (!poemObj[poem.name] && poem.version === bookOrCd.name) {
          poemObj[poem.name] = 1;
        }
        if (poemObj[poem.name] && poem.version === bookOrCd.name) {
          poemObj[poem.name] = poemObj[poem.name] + 1;
        }
      });
      return poemObj;
    }, {});
    const listOfPoems = Object.keys(poemMenu).map(poem => `${poem} (${poemMenu[poem]})`);
    return (
      <div>
        <div className="bibliographyTable">
          <h1>
            A Bibliography of all Gysin's <i>Permutation Poems</i>
          </h1>
          {/* <BibliographyTable /> */}
        </div>
        <div className="poemMenu">
          {listOfPoems.map((poem, index) => (
            <span key={`poemCount${index}`} style={{ marginRight: '5px' }}>
              <strong>{poem}</strong>
              {' | '}
            </span>
          ))}
        </div>
        <div className="biblographySplit">
          <div className="bibliography">
            {poemDatabase.map((media, mediaIndex) => {
              const authorArray = media.authors.map(author => author).join(', ');
              const convertName = stringToUrl(media.name);
              const poemsOutput = media.poems.map((poem, poemIndex) => (
                <p key={`poemIndex${poemIndex}`}>
                  <strong>{poem.name}</strong> (<i>{poem.version}</i> version){' '}
                  {poem.file && (
                    <button type="button" onClick={() => this.textAddressUrl(poem.file)}>
                      poem
                    </button>
                  )}
                  {/* <a
                  href={`../${databaseReference[media.name]}/text/${titleToTextFile(
                    poem.name,
                  )}.txt`}
                >
                  link
                </a> */}
                </p>
              ));
              return (
                <div key={`mediaIndex${mediaIndex}`}>
                  <h2>{`${media.name} (${media.year}) [${media.medium}]`}</h2>
                  <h3> - {authorArray}</h3>
                  {poemsOutput}
                </div>
              );
            })}
          </div>
          {popup && <PoemViewer textAddress={textFile} />}
        </div>
      </div>
    );
  }
}
