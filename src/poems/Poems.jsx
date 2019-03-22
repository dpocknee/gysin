import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import ReactAudioPlayer from 'react-audio-player';
import poemDatabase from '../database/poemDatabase';
import PoemViewer from './PoemViewer';
import ImageViewer from './ImageViewer';
import './Poems.css';

export default class Poems extends Component {
  state = {
    textFile: '',
    popup: false,
    showImages: false,
    images: false,
    folder: false,
    playAudio: false
  };

  textAddressUrl = url => {
    this.setState({ textFile: url, popup: true });
  };

  showImages = (images, folder) => {
    this.setState(state => ({ showImages: true, images, folder }));
  };

  hideImages = () => {
    this.setState({ showImages: false });
  };

  showAudio = (audio, folder) => {
    this.setState(state => ({
      playAudio: require(`../database/${folder}/audio/${audio}`)
    }));
  };

  render() {
    const {
      popup,
      textFile,
      showImages,
      images,
      folder,
      playAudio
    } = this.state;
    return (
      <div className="generalBibliography">
        <section>
          <h1>
            A Bibliography of all Gysin's <strong>Permutation Poems</strong>
          </h1>
        </section>
        <div className="biblographySplit">
          <div className="bibliography">
            {playAudio && (
              <div>
                <ReactAudioPlayer src={playAudio} autoPlay controls />
                {/* <audio src={playAudio} type="audio/mp3" control /> */}
              </div>
            )}
            {poemDatabase.map((media, mediaIndex) => {
              const authorArray = media.authors
                .map(author => author)
                .join(', ');
              const poemsOutput = media.poems.map((poem, poemIndex) => (
                <p key={`poemIndex${poemIndex}`}>
                  <strong>{poem.name}</strong> (<i>{poem.version}</i> version){' '}
                  {poem.file && (
                    <button
                      className="poemButton"
                      type="button"
                      onClick={() => this.textAddressUrl(poem.file)}
                    >
                      poem
                    </button>
                  )}
                  {poem.images && (
                    <button
                      type="button"
                      className="imageButton"
                      onClick={() => this.showImages(poem.images, poem.folder)}
                    >
                      images
                    </button>
                  )}
                  {poem.audio &&
                    poem.audio.map((audioFile, audioButtonIndex) => (
                      <button
                        type="button"
                        className="audioButton"
                        key={`audioButton${poem.name}${audioButtonIndex}`}
                        onClick={() => this.showAudio(audioFile, poem.folder)}
                      >
                        audio
                      </button>
                    ))}
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
          <Popup open={showImages} onClose={() => this.hideImages()}>
            <div className="popup code" tabIndex={0} role="button">
              <ImageViewer imagesArray={images} folder={folder} />
            </div>
          </Popup>
        </div>
      </div>
    );
  }
}
