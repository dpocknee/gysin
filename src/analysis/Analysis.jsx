import React from 'react';
import './Analysis.css';

const Analysis = () => (
  <article className="analysis">
    <section>
      <h1>Analysis</h1>
      <div className="introheader">
        <p>
          Over the nearly quarter of a century that Gysin was writing
          permutation poems, there were several different styles which occurred
        </p>
      </div>
      <div className="text1">
        <h1>Ad Hoc (1958 - 1960)</h1>
        <p>
          Gysin's first permutation poem was written in 1958 - this was the
          first version of <strong>I AM THAT I AM</strong> published later in{' '}
          <strong>An Anthology of Concrete Poetry</strong> many years later in
          1967. This is an early and unsophisticated form of Gysin's Permutation
          Poems in which the order is incomplete, unalgorithmic and often
          contains errors. This writing process is seen most commonly in the
          book <strong>Minutes To Go</strong>, published in 1960, which
          contained ad hoc versions of the poems{' '}
          <strong>CALLING ALL RE ACTIVE AGENTS</strong>,{' '}
          <strong>I THINK THEREFORE I AM</strong> and{' '}
          <strong>RUB OUT THE WRITE WORD</strong>. None of these poems enumerate
          all 120 possible permutations of their five-word titles, they are
          presented in orders which seem to have no pattern, and they several
          mistakes (i.e. duplications or ommissions of permutations).{' '}
        </p>
      </div>
      <div className="text2">
        <h1>Magic Square (1960 - 1965)</h1>
        <p>
          A more sophisticated approach to writing permutation poems began later
          in 1960, the same year as the publication of{' '}
          <strong>Minutes To Go</strong>. Later that year, the book{' '}
          <strong>The Exterminator</strong> - a collaboration between Gysin and
          William S. Burroughs, was published by in the US. This book contained
          eight new permutation poems: <strong>WHO SENDS THE MAN</strong>,{' '}
          <strong>KICK THAT HABIT MAN</strong>,{' '}
          <strong>JUNK IS NO GOOD BABY</strong>,{' '}
          <strong>CAN MOTHER BE WRONG?</strong>,{' '}
          <strong>SHORT TIME TO GO</strong>,{' '}
          <strong>IN THE BEGINNING WAS THE WORD</strong>,{' '}
          <strong>RUB OUT THE WORD</strong>, and{' '}
          <strong>PROCLAIM PRESENT TIME OVER</strong>. Apart from{' '}
          <strong>IN THE BEGINNING WAS THE WORD</strong>, all of these poems use
          an ordering that might be described as{' '}
          <strong>Magic Square Ordering</strong>, given its similarity to the
          way in which magic squares are constructed in the Arabic and
          Kabbalistic traditions. Each of these poems starts with an opening
          stanza or two in which the title is placed into small groups of
          combinations before the permutations proper begin. This is then
          followed by a series of stanzas, grouped by first word, in which all
          permutations are enumerated. Each line in a stanza will start with the
          same word, and the order of these will be the same as that of those in
          the title (e.g. if the poem is <strong>WHO SENDS THE MAN</strong>, the
          lines of the first stanza will all start with the word WHO, the lines
          of the second stanza will all start with SENDS, the third THE, and the
          fourth MAN.
        </p>
        <p>
          To take an example. the poem <strong>WHO SENDS THE MAN</strong> starts
          with an introductory stanza of freely-ordered combinations of the
          words of the title:
        </p>
      </div>
      <div className="code" style={{ width: '200px' }}>
        <p>
          WHO SENDS THE MAN
          <br />
          WHO SENDS THEE?
          <br />
          MAN WHO SENDS?
          <br />
          THE MAN WHO?
          <br />
          SENDS THE MAN
        </p>
      </div>
      <div className="text2">
        <p>This is then followed by a series of four stanzas:</p>
      </div>
      <div className="code" style={{ width: '200px' }}>
        <p>
          WHO SENDS THE MAN
          <br />
          WHO THE MAN SENDS
          <br />
          WHO MAN THE SENDS
          <br />
          WHO SENDS MAN THEE
          <br />
          WHO THEE SENDS MAN
          <br />
          WHO MAN SENDS THEE
        </p>
        <p>
          SENDS THE MAN WHO
          <br />
          SENDS MAN THE WHO
          <br />
          SENDS WHO THE MAN
          <br />
          SENDS THEE WHO MAN
          <br />
          SENDS MAN WHO THEE
          <br />
          SENDS WHO MAN THEE
        </p>

        <p>
          THE MAN WHO SENDS
          <br />
          THE WHO SENDS MAN
          <br />
          THE SENDS WHO MAN
          <br />
          THEE MAN SENDS WHO
          <br />
          THEE WHO MAN SENDS
          <br />
          THEE SENDS MAN WHO
        </p>
        <p>
          MAN WHO SENDS THEE
          <br />
          MAN SENDS WHO THEE
          <br />
          MAN THEE WHO SENDS
          <br />
          MAN WHO THEE SENDS
          <br />
          MAN SENDS THEE WHO
          <br />
          MAN THEE SENDS WHO
        </p>
      </div>
      <div className="text2">
        <p>
          If we look at the last 3 words in each stanza, the pattern by which
          these were put together can be discerned. Each stanza can be split
          into two groups of three lines, and in each group the second word in
          each line occurs in the order it appears in the first line of the
          stanza. For instance, in the first stanza of the permutation section
          (WHO SENDS THE MAN), the order of the second words in each line is:
          SENDS, THE, MAN, SENDS, THE, MAN, the same as in the first line. Gysin
          uses this structure over and over again in his poems between 1960 and
          1965.
        </p>
      </div>
      <div className="code" style={{ width: '200px' }}>
        <p>
          WHO <span className="highlight">SENDS</span>{' '}
          <span className="highlight">THE</span>{' '}
          <span className="highlight">MAN</span>
          <br />
          WHO <span className="highlight">THE</span> MAN SENDS
          <br />
          WHO <span className="highlight">MAN</span> THE SENDS
          <br />
          WHO <span className="highlight">SENDS</span> MAN THEE
          <br />
          WHO <span className="highlight">THEE</span> SENDS MAN
          <br />
          WHO <span className="highlight">MAN</span> SENDS THEE
        </p>
      </div>
      <div className="text2">
        <p>
          Much of the writing about Gysin's permutation poems from this period
          alleges that he used a computer to generate his poems from 1960
          onwards. This assumption is incorrect for several reasons. Firstly,
          the computer often ascribed as being used by Gysin and his
          collaborator Ian Sommerville (the Honeywell 200 Model 120) was only
          released in 1965, and so wouldn't have been used prior to this date,
          meaning it would not have been used for the poems written and
          performed on the BBC radio programme{' '}
          <strong>The Permutated Poems of Brion Gysin</strong> in 1960. However,
          it might be argued that, as Ian Sommerville was a student at Cambridge
          University from the autumn of 1959, he would have had access to the
          EDSAC 2 computer, in use there at the time. If we look at the poems
          themselves however, there is no reason to think that any of the poems
          written between 1960 and 1965 would have been created algorithmically.
          The radio programme is often cited as having its poems generated by
          computer, however, of the seven poems performed on this broadcast, two{' '}
          <strong>JUNK IS NO GOOD BABY</strong> and{' '}
          <strong>KICK THAT HABIT MAN</strong> are from{' '}
          <strong>The Exterminator</strong>, <strong>I AM THAT I AM</strong>{' '}
          seems to improvise around the earlier ad hoc 1958 version of the poem,
          with several of the latter stanzas occurring verbatim. The amount of
          tape effects on this version of{' '}
          <strong>CALLING ALL RE ACTIVE AGENTS</strong> and{' '}
          <strong>PISTOL POEM</strong> makes it difficult to discern the
          ordering, but <strong>NO POETS DON'T OWN WORDS</strong> and{' '}
          <strong>COME TO FREE THE WORDS</strong> occur in variations on the
          Magic Square technique outlined above.{' '}
        </p>
        <p>
          We might then ask whether these Magic Square poems were generated by a
          computer. Here again, the answer seems to be know. A major piece of
          evidence is a tape of Gysin reading a large set of unpublished
          permutation poems, held in The British Library. On this tape, recorded
          somewhere in the early 60s (probably 1960-1963) Gysin records a whole
          series of permutation poems - most of which are created using the
          magic square technique. Although the large number of poems might seem
          to indicate that an computer algorithm was used, if this was the case
          we should see similar patterns in the ordering of each poem. Below I
          have converted the words in each poem to numbers in order that their
          patterns can be more closely compared. When this is done, we can see
          that the patterns show the opposite: that there are no repeating
          orders. Unless a new algorithm was written for each poem (unlikely
          given the difficulty of doing this in the 1960s), it seems sensible to
          suggest that these poes were put together by Gysin by hand, using a
          rough magic square process he developed as a guide.
        </p>
        <p>
          The idea that Gysin's permutation poems before 1965 were not written
          by computer contradicts several statements Gysin himself made about
          this chronology, and which has been parroted by researchers. However,
          given Gysin's love of self-mythologising and the lack of evidence
          within the poems themselves, it seems safe to assume that these
          previous assertions were incorrect.
        </p>
        <p>
          It is also worth noting that, in 1960, the generation of permutations
          by computers was still in its infancy. It was only in 1956 that the
          first published algorithm for computer permutations was published, and
          a commonly used algorithm for generating permutations in lexicographic
          order didn't appear until 1962. If Gysin's poems were run through a
          computer in 1960, this would pre-date most of the important
          breakthroughs in the field which occured from 1962 onwards.{' '}
        </p>
        <p>
          Additionally, to see how easy it would be to create an algorithm that
          could generate these types of magic square permutation poems, I
          backwards engineered the patterns in some of Gysin's poems to create
          four possible permutation algorithms, utilising the techniques
          algorithmic permutations used at the time. These can be seen on the{' '}
          <strong>Permutation Algorithms</strong> page as{' '}
          <strong>Gysin-Sommerville</strong> algorithms #1-4.
        </p>
      </div>
      <div
        className="code"
        style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'scroll' }}
      >
        <p>
          1234/1324/1423/1243/1342/1432|2134/2341/2431/2143/2314/2413|3142/3421/3241/3421/3124/3214|4231/4123/4312/4132/4213/4321
          (THIS COULD BE YOU)
          <br />
          1234/1324/1423/1243/1342/1432|2341/2413/2134/2431/2314/2143|3412/3124/3214/3421/3142/3142|4123/4213/4312/4132/4231/4321
          (THIS TURNS ME ON)
          <br />
          1234/1324/1432/1243/1342/1423|2341/2413/2143/2314/2431/2134|3412/3124/3214/3421/3142/3241|4123/4213/4321/4132/4231/4312
          (LIKE YOU JUST SAID)
          <br />
          1234/1324/1432/1243/1342/1423|2341/2413/2143/2314/2431/2134|3412/3142/3214/3421/3124/3241|4123/4231/4312/4132/4213/4321
          (WHAT ARE YOU THINKING)
          <br />
          1234/1342/1423/1243/1324/1432|2341/2143/2314/2431/2413/2134|3412/3124/3214/3421/3142/3241|4123/4231/4312/4132/4213/4321
          (THAT REALLY BUGS ME)
          <br />
          1234/1342/1432/1243/1324/1423|2341/2431/2143/2314/2413/2134|3412/3124/3241/3421/3142/3214|4123/4231/4321/4132/4213/4312
          (BE ON THE BEAT)
          <br />
          1234/1342/1432/1243/1324/1423|2341/2431/2134/2314/2413/2143|3214/3124/3421/3241/3142/3412|4123/4231/4312/4132/4213/4321
          (EVERYONE IS AHEAD NOW)
          <br />
          1234/1342/1432/1243/1324/1423|2341/2413/2134/2314/2431/2143|3124/3214/3412/3142/3214/3421|4123/4213/4321/4132/4231/4312
          (I GOT THE FEAR)
        </p>
      </div>
    </section>
    <section>
      <div className="text1">
        <h1>Reverse Lexicographic (1965-1973)</h1>
        <p>
          In 1965, Ian Sommerville ran Gysin's permutation poems through a
          computer. This computer was the Honeywell 200 Model 120, released in
          that same year. This was done for the book{' '}
          <strong>The Third Mind</strong> which, although finished in 1965, was
          not released for another eight years. In{' '}
          <strong>The Third Mind</strong> there are a few older poems (
          <strong>I THINK THEREFORE I AM</strong>,{' '}
          <strong>PROCLAIM PRESENT TIME OVER</strong>), but most of them are
          either new poems (<strong>BREATHE IN THE WORDS</strong>) or newer
          versions of older poems (<strong>I AM THAT I AM</strong>,{' '}
          <strong>JUNK IS NO GOOD BABY</strong>,{' '}
          <strong>KICK THAT HABIT MAN</strong>, <strong>PISTOL POEM</strong>,{' '}
          <strong>RUB OUT THE WORD</strong>). <strong>RUB OUT THE WORDS</strong>{' '}
          has probably the least done to it, being exactly the same as the
          earlier <strong>The Exterminator</strong> version, except with WORD
          instead of WORDS. <strong>I AM THAT I AM</strong>,{' '}
          <strong>JUNK IS NO GOOD BABY</strong>,{' '}
          <strong>KICK THAT HABIT MAN</strong>, and <strong>PISTOL POEM</strong>{' '}
          have had the most changes, though, as each of these are now in reverse
          lexicographic ordering. The name of this order is somewhat misleading,
          as whilst lexicographic ordering is the placing of all permutations
          into the order into ascending alphabetical or numeric order, reverse
          lexicographic ordering is not the arrangement into descending order,
          but the reversal of this pattern. The first reverse lexicographic
          algorithm was published by Schrack and Shimrat in{' '}
          <strong>The Communications of the ACM</strong> in May 1962, and this
          is most likely the algorithm implemented here.{' '}
        </p>
        <div className="code" style={{ width: '100%' }}>
          <table>
            <tbody>
              <tr>
                <td style={{ width: '50%' }}>
                  <div>
                    <b>Lexicographic Ordering</b>
                  </div>
                </td>
                <td style={{ width: '50%' }}>
                  <div>
                    <b>Reverse Lexicographic Ordering</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <section>
                    <div>1 2 3 4</div>
                    <div>1 2 4 3</div>
                    <div>1 3 2 4</div>
                    <div>1 3 4 2</div>
                    <div>1 4 2 3</div>
                    <div>1 4 3 2</div>
                    <div>2 1 3 4</div>
                    <div>2 1 4 3</div>
                    <div>2 3 1 4</div>
                    <div>2 3 4 1</div>
                    <div>2 4 1 3</div>
                    <div>2 4 3 1</div>
                    <div>3 1 2 4</div>
                    <div>3 1 4 2</div>
                    <div>3 2 1 4</div>
                    <div>3 2 4 1</div>
                    <div>3 4 1 2</div>
                    <div>3 4 2 1</div>
                    <div>4 1 2 3</div>
                    <div>4 1 3 2</div>
                    <div>4 2 1 3</div>
                    <div>4 2 3 1</div>
                    <div>4 3 1 2</div>
                    <div>4 3 2 1</div>
                  </section>
                </td>
                <td>
                  <section>
                    <div>1 2 3 4</div>
                    <div>2 1 3 4</div>
                    <div>1 3 2 4</div>
                    <div>3 1 2 4</div>
                    <div>2 3 1 4</div>
                    <div>3 2 1 4</div>
                    <div>1 2 4 3</div>
                    <div>2 1 4 3</div>
                    <div>1 4 2 3</div>
                    <div>4 1 2 3</div>
                    <div>2 4 1 3</div>
                    <div>4 2 1 3</div>
                    <div>1 3 4 2</div>
                    <div>3 1 4 2</div>
                    <div>1 4 3 2</div>
                    <div>4 1 3 2</div>
                    <div>3 4 1 2</div>
                    <div>4 3 1 2</div>
                    <div>2 3 4 1</div>
                    <div>3 2 4 1</div>
                    <div>2 4 3 1</div>
                    <div>4 2 3 1</div>
                    <div>3 4 2 1</div>
                    <div>4 3 2 1</div>
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text2">
        <h1>Random (1973)</h1>
        <p>
          In 1973, the book <strong>Brion Gysin Let The Mice In</strong> was
          published. This was another collaboration between Gysin, Burroughs and
          Sommerville. There were four permutation poems printed in this book:
          one a version of <strong>JUNK IS NO GOOD BABY</strong> published
          previously in <strong>The Third Mind</strong>; two of the reverse
          lexicographic versions if <strong>I AM THAT I AM</strong> and{' '}
          <strong>PISTOL POEM</strong> that were also printed in{' '}
          <strong>The Third Mind</strong> but here presented as an extract of
          the entire poem, both only running for around a quarter of their total
          length; and a new version of <strong>KICK THAT HABIT MAN</strong>. The
          new version of the latter poem appears to use some type of random
          ordering not found in any other versions of these poems. This version
          of the poem doesn't seem to have any obvious ordering but, when we
          compare it to the previous reverse lexicographic version found in{' '}
          <strong>The Third Mind</strong>, an indication of how it might have
          been made can be seen.
        </p>
      </div>
      <div className="code" style={{ width: '400px' }}>
        <table>
          <tbody>
            <tr>
              <td>
                <b>The Third Mind</b>
              </td>
              <td>
                <b>...Let The Mice In</b>
              </td>
            </tr>
            <tr>
              <td style={{ width: '200px' }}>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      KICK&nbsp;THAT&nbsp;HABIT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;KICK&nbsp;HABIT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;HABIT&nbsp;THAT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;KICK&nbsp;THAT&nbsp;MAN
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;HABIT&nbsp;KICK&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;THAT&nbsp;KICK&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;THAT&nbsp;MAN&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;KICK&nbsp;MAN&nbsp;HABIT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;MAN&nbsp;THAT&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;KICK&nbsp;THAT&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;MAN&nbsp;KICK&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;THAT&nbsp;KICK&nbsp;HABIT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;HABIT&nbsp;MAN&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;KICK&nbsp;MAN&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;MAN&nbsp;HABIT&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;KICK&nbsp;HABIT&nbsp;THAT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;MAN&nbsp;KICK&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;HABIT&nbsp;KICK&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;HABIT&nbsp;MAN&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;THAT&nbsp;MAN&nbsp;KICK
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      THAT&nbsp;MAN&nbsp;HABIT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      MAN&nbsp;THAT&nbsp;HABIT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement  highlight">
                      HABIT&nbsp;MAN&nbsp;THAT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement  highlight">
                      MAN&nbsp;HABIT&nbsp;THAT&nbsp;KICK
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      KICK&nbsp;THAT&nbsp;HABIT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;HABIT&nbsp;KICK&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;KICK&nbsp;THAT&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;THAT&nbsp;MAN&nbsp;HABIT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;HABIT&nbsp;KICK&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;KICK&nbsp;MAN&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;HABIT&nbsp;MAN&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;MAN&nbsp;KICK&nbsp;THAT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;KICK&nbsp;HABIT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;HABIT&nbsp;THAT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;HABIT&nbsp;MAN&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;THAT&nbsp;MAN&nbsp;KICK
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;THAT&nbsp;KICK&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;MAN&nbsp;THAT&nbsp;HABIT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;KICK&nbsp;THAT&nbsp;MAN
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      THAT&nbsp;MAN&nbsp;KICK&nbsp;HABIT
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;KICK&nbsp;MAN&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      KICK&nbsp;MAN&nbsp;HABIT&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      MAN&nbsp;KICK&nbsp;HABIT&nbsp;THAT
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement">
                      HABIT&nbsp;THAT&nbsp;KICK&nbsp;MAN
                    </div>
                  </div>
                </div>
                <div className="stanza">
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      THAT&nbsp;MAN&nbsp;HABIT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      MAN&nbsp;THAT&nbsp;HABIT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      HABIT&nbsp;MAN&nbsp;THAT&nbsp;KICK
                    </div>
                  </div>
                  <div className="poemRow">
                    <div className="poemElement highlight">
                      MAN&nbsp;HABIT&nbsp;THAT&nbsp;KICK
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text2">
        <p>
          The fact that opening line and closing stanzas are the same indicates
          that the reverse lexicographic version of the poem may have been used
          as the basis for some random ordering.
        </p>
        <p>
          Additionally, the fact that it appears only 19 of the possible
          permutations has been reordered points to the idea that a Linear
          Congruential Generator (or Lehmer Generator, or LCG) might have been
          used. An LCG is a way of generating random numbers, originally
          invented by D. H. Lehmer in 1951. It is a recursive function that
          involves the iterative multiplying of the input modulo a prime number
          (19 is a prime).{' '}
        </p>
        <p>Definition from wikipedia:</p>
      </div>
      <div className="abstract">
        <p>The general formula is:</p>
        <p>
          <i>X</i>
          <sub>
            <i>k</i>+1
          </sub>{' '}
          = <i>a</i> &bull; <i>X</i>
          <sub>
            <i>k</i>
          </sub>{' '}
          mod <i>m</i>
        </p>
        <p>
          where the modulus <i>m</i> is a prime number or a power of a prime
          number, the multiplier <i>a</i> is an element of high multiplicative
          order modulo <i>m</i> (e.g., a primitive root modulo <i>n</i>), and
          the seed <i>X</i>
          <sub>0</sub> is coprime to <i>m</i>.
        </p>
      </div>
      <div className="text1">
        <h1>No Poets Don't Own Words (1961/1982)</h1>
        <p>
          The only mystery left about Gysin's poems are the two versions of{' '}
          <strong>NO POETS DON'T OWN WORDS</strong> from 1961 and 1982, which
          have so far been resistant to analysis.
        </p>
      </div>
    </section>
  </article>
);

export default Analysis;
