import React from 'react';

const Iamthatiam = () => (
  <div className="iamthatiam">
    <h1>
      The History of Brion Gysin's Poem <i>I AM THAT I AM</i>
    </h1>
    <div className="iamColumns">
      <div className="iamtitle">
        <h2>Minutes To Go (1960)</h2>
        <h3>[book] written with Sinclair Beiles, William Burroughs and Gregory Corso</h3>
        <h3>LOCATION: INTER-LIBRARY LOAN</h3>
        <p>Any other info here</p>
      </div>
      <div id="none" className="iamColumn" />
    </div>

    <div className="iamColumns">
      <div className="iamtitle">
        <h2>[The???] Exterminator! (1960)</h2>
        <h3>[book] written with William Burroughs</h3>
        <h3>LOCATION: MANCHSTER UNIVERSITY LIBRARY</h3>
        <p>
          <b>Notes:</b>
          <br />
          &#8226; "The second collection of cut-ups, with additional permutations and four pages of
          calligraphic drawings by Brion Gysin. Much of the material in it had been produced before
          'Minutes To Go' was published... Burroughs first sent the manuscript of 'The Exterminator'
          to Dave Haselwood in late December 1959, and after several alterations, deletions and
          additions over the course of the following months, it was finally published in July 1960
          by Haselwood's Auerhahn Press in San Francisco." <br />
          <a href="https://www.beatbooks.com/pages/books/37214/william-s-burroughs-brion-gysin/the-exterminator">
            https://www.beatbooks.com/pages/books/37214/william-s-burroughs-brion-gysin/the-exterminator
          </a>
        </p>
      </div>
      <div id="none" className="iamColumn" />
    </div>

    <div className="iamColumns">
      <div className="iamtitle">
        <h2>1960? computerized version</h2>
        <h3>[manuscript?] reproduced in "tuning into the multimedia age"</h3>
        <h3>LOCATION: ?</h3>
        <p>
          <b>Notes:</b>
          <br />
          &#8226; This is in another, completely different order.
          <br />
          &#8226; This looks to be using a reversed lexicographic order; either on a [AM,THAT, I,
          AM, I] array, with a -1 rotation. Or on the normal array with a -1 rotation, and the
          example is taken from further down the output! Although this is quote in the Funkhauser
          article, it may be taken from the <i>Third Mind</i> output.
        </p>
      </div>
      <div id="none" className="iamColumn">
        I AM THAT I AM <br />
        I THAT AM I AM <br />
        I AM I THAT AM <br />
        I I AM THAT AM <br />
        I THAT I AM AM <br />
        I I THAT AM AM <br />
        I AM THAT AM I <br />
        I THAT AM AM I <br />
        I AM AM THAT I <br />
        I AM AM THAT I <br />
        I THAT AM AM I <br />
        I AM THAT AM I <br />
        I AM I AM THAT <br />
        I I AM AM THAT <br />
        [TO DO: transcribe the rest of this from the book!]
      </div>
    </div>

    <div className="iamColumns">
      <div className="iamtitle">
        <h2>The Permutated Poems of Brion Gysin (1960)</h2>
        <h3>[radio programme] with Ian Somerville</h3>
        <h3>
          LOCATION: BRITISH LIBRARY/ALBUM: THE SPOKEN WORD/ ALBUM: BRION GYSIN - RECORDINGS
          1960-1981
        </h3>
        <p>
          <b>Notes:</b>
          <br />
          &#8226; This is a transcription of the recording of the poem, as it was performed on the
          BBC broadcast, recorded in the summer of 1960 and broadcast on 15 August 1961.
          <br />
          &#8226; There are several audio effects used in the recording of this poem, including
          delay and changes in playback speed, which make deciphering the exact ordering at the end
          of the work very difficult. In the transcription, I indicate where delay is added, lines
          are repeated and where the poem beomes unintelligible due to the extremity of effects
          added.
          <br />
          &#8226; From line 2 of stanza 7 to the point at which the words become intelligible is
          identical to the opening 3 stanzas of the version published in{' '}
          <i>Anthology of Concrete Poetry</i>
          <br />
          &#8226; There appears to be no discernable algorithmic ordering governing the opening 6
          stanzas.
        </p>
      </div>
      <div id="bbc1960" className="iamColumn" />
    </div>

    <div className="iamColumns">
      <div className="iamtitle">
        <h2>The Third Mind (1965)</h2>
        <h3>[book] with William Burroughs</h3>
        <h3>LOCATION: MANCHSTER UNIVERSITY LIBRARY / ALSO ONLINE</h3>
        <p>
          <b>Notes:</b>
          <br />
          &#8226; This version of the poem is uses a <i>Reverse Lexicographic</i> ordering
          algorithm.
          <br />
          &#8226; The first computer implementation of a lexicographic algorithm was by G. Schrack
          and M. Shimrat in 1962, based on an older algorithm discovered by Fischer and Krause in
          1812.
          <br />
          &#8226; This version of the poem was accompanied by four other versions which presented
          the same pattern but with the elements in each line rotated by 1,2,3 and 4 places.
          <br />
          &#8226; This poem was accompanied by the following explanation: "(Poems printed on
          Honeywell Series model 120 computer programmed by Ian Sommerville; 2420 lines of text.)”
          <br />
          &#8226; The Honeywell Series model 120 was released in 1965.
        </p>
      </div>
      <div id="thirdMind1965" className="iamColumn" />
    </div>

    <div className="iamColumns">
      <div className="iamtitle">
        <h2>Anthology of Concrete Poetry (1967)</h2>
        <h3>[book] included in anthology edited by Emmett Williams</h3>
        <h3>LOCATION: DAVID OWNS A COPY</h3>
        <p>
          <b>Notes:</b>
          <br />
          &#8226; In this book, the date given for this poem is 1958.
          <br />
          &#8226; The fourth stanza is incorrect, repeating <i>I AM A I AM THAT"</i> twice and
          missing the permutation <i>I AM I THAT AM</i>.
          <br />
          &#8226; The last stanza is incorrect, <i>I I AM AM THAT</i> should be repeated twice
          instead of <i>I I AM THAT AM</i> being repeated three times.
          <br />
          &#8226; The starting elements of each line are missing the <i>I THAT</i> permutation,
          instead repeating <i>I AM</i> twice.
          <br />
          &#8226; There is no discernable algorithmic ordering used.
        </p>
      </div>
      <div id="anthology" className="iamColumn" />
    </div>
    <div className="iamColumns">
      <div className="iamtitle">
        <h2>Let The Mice In (1973)</h2>
        <h3>[book] with William Burroughs</h3>
        <h3>LOCATION: INTER-LIBRARY LOAN</h3>
        <p>Any other info here</p>
      </div>
      <div id="none" className="iamColumn" />
    </div>
    <div className="iamColumns">
      <div className="iamtitle">
        <h2>Text-Sound Texts (1980)</h2>
        <h3>
          [book] included in an anthology of "text-sound" works, edited by Richard Kostelanetz
        </h3>
        <h3>
          LOCATION: https://monoskop.org/ File: Kostelanetz_Richard_ ed_Text_Sound_ Texts_1980.pdf
        </h3>
        <p>
          This is a reproduction of the version printed in "Let The Mice In", which is clearly a
          reproduction of the <i>Third Mind</i>i> version in reverse lexicographic order.
        </p>
      </div>
      <div id="none" className="iamColumn" />
    </div>
    <div className="iamColumns">
      <div className="iamtitle">
        <h2>Back In No Time: The Brion Gysin Reader (2002)</h2>
        <h3>[book] included in an anthology of Gysin's work, edited by Jason Weiss.</h3>
        <h3>LOCATION: Manchester University Library</h3>
        <p>
          This is a reproduction of the version printed in "Let The Mice In", which is a
          reproduction of the <i>Third Mind</i>i> version in reverse lexicographic order.
          <br />
          &#8226; This poem is dated as 1959.
        </p>
      </div>
      <div id="none" className="iamColumn" />
    </div>
  </div>
);

export default Iamthatiam;
