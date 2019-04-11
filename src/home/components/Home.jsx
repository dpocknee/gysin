import React from 'react';
import '../css/Home.css';
import iamthatiamImg from '../assets/img/iamthatiam.jpg';

const Home = () => (
  <article>
    <section className="home">
      <h1>Introduction</h1>
      <div className="introheader">
        <p>
          This is a website that investigates the history and technology of the
          visual artist and writer Brion Gysin\'s{' '}
          <strong>Permutation Poems</strong>. Part of this project has involved
          collecting together historical permutation algorithms. These have been
          collected and released as a JavaScript library and can be found on
          <a href="https://github.com/dpocknee/historical-permutations">
            github
          </a>{' '}
          and{' '}
          <a href="https://www.npmjs.com/package/historical-permutations">
            npm
          </a>
          .
        </p>
      </div>

      <div className="abstract">
        <div className="header">
          <div className="header1Blue">Abstract</div>
        </div>
        <p>
          {' '}
          Between 1958 and 1982, Brion Gysin wrote a series of 43{' '}
          <strong>Permutation Poem</strong>, in which the four or five-word
          title of the poem would be permutated into some or all of its possible
          orders. Some of these permutation poems were run through a computer,
          making them very early examples of computer-generated poetry. Prior
          scholarship on these poems has frequently failed to recognise that
          there are several different versions of each of them, which has led to
          an inaccurate dating of many of them, and a misunderstanding about the
          role of technology within all of them. Additionally - and probably
          most importantly - the failure of prior research to contextually
          situate this work within the history of early computing has led to an
          undervaluing of its technologically pioneering and progressive nature,
          as well as the significant difficulty that was overcome when producing
          this work in the early 1960s. I attempt to correct these problems by
          providing the first accurate comprehensive chronology and bibliography
          of these works, along with an in-depth look at technical
          implementations of permutation algorithms in this era.
        </p>
      </div>

      <div className="blockRed">
        <div className="header">
          <div className="header1Red">I AM THAT I AM</div>
        </div>
        <div className="actualImage">
          <img
            src={iamthatiamImg}
            alt="Extract of Gysin's poem 'I Am That I Am'"
          />
        </div>
        <div className="caption">
          A very short extract of the start of Brion Gysin's poem{' '}
          <i>I AM THAT I AM</i>
        </div>
      </div>

      <div className="text1">
        <p>
          One of the main problems in trying to convince a contemporary reader
          of the value and importance of Brion Gysin’s{' '}
          <strong>Permutation Poems</strong> can be summed up in one line:
        </p>
      </div>

      <div className="code">
        <p>
          {
            '["I", "AM", "THAT", "I", "AM"].reverse.permutation{|x| puts "#{x.reverse.join(" ")}"}'
          }
        </p>
      </div>

      <div className="text1">
        <p>
          This is a piece of code in the programming language <b>Ruby</b> that
          recreates the entirety of the 1970s version of Gysin's most famous{' '}
          <strong>Permutation Poem</strong>: <strong>I AM THAT I AM</strong>.
          The fact that you can now take any contemporary laptop, download a
          Ruby interpreter online for free, and use such little code to generate
          the entirety of this work can prevent the early 21st Century reader
          for seeing this poem for what it is: a revolutionary and
          technologically progressive piece of art built with cutting-edge
          technology. While today many of you would be able to run the code
          above and recreate Gysin's poem in milliseconds, you would be relying
          on pioneering research done into the implementation of permutation
          algorithms on computing machinery done in the late 1950s and early
          1960s. The truth of the matter is that, although it looks simple, and
          is trivial to compute now, when Gysin and the Cambridge mathematician
          Ian Sommerville used computers to take his original hand-written poems
          and generate more extensive versions in 1960, they were utilizing
          cutting-edge technology and techniques that had not even existed a few
          years earlier. One of the aims of this website is to give a better
          understanding of how computer permutation algorithms were used in this
          period, in order to get a better understanding of the cutting-edge and
          pioneering technology that Gysin and his collaborator, Ian Sommerville
          were using to create this work. On the{' '}
          <strong>permutation algorithms</strong> page of the website, you can
          compare different historical algorithms from this period, see how they
          were implemented and how each one confers different aesthetics upon
          the poem when used.
        </p>
      </div>

      <div className="text2">
        <p>
          One of the main aims of this website is to correct a series of errors
          that have crept into the Gysin scholarship regarding his{' '}
          <strong>Permutation Poems</strong>. One of the most important things
          to realize is that most of the poems have more than one version, often
          written years apart, and that each of these versions is often
          constructed in a different way and using different tehnology. The most
          extreme example of this is <strong>KICK THAT HABIT MAN</strong> which
          first appears in <strong>The Exterminator</strong> in 1960 where it is
          ordered in an <i>ad hoc</i> manner without computer assistance, then
          appearing in <strong>The Third Mind</strong>, where it was placed into
          reverse lexicographic order by Ian Sommerville, using a brand new
          Honeywell 200 Model 120 computer (released in 1965, the same year the
          book was finished (although it wasn't published until 1978)), and then
          in a pseudo-random order (probably ordered using a Linear Congruential
          Generator using a prime modulo of 19) in 1973's{' '}
          <strong>Brion Gysin Let The Mice In</strong>. Added to this, there is
          also <i>another</i> version, found in the collection{' '}
          <strong>Back In No Time: The Brion Gysin Reader</strong>, which
          incorrectly attributes it to <strong>The Exterminator</strong>, which
          has a different version, and <strong>The Last Museum</strong>, in
          which it does not appear - its actual origin remains unknown.{' '}
        </p>
      </div>
    </section>
    <section className="home">
      <div className="text2">
        <h1>The BBC Programme</h1>
        <p>
          In 1960, Gysin was asked to create a radio programme for the BBC, in
          which he recorded some of his permutation poems. This was due to a BBC
          producer reading <strong>Minutes To Go</strong>, a book published by
          Gysin, William S. Burroughs, Sinclair Beiles and Gregory Corsano in
          March 1960. According to John Geiger's brilliant biography, the
          recording was done in the summer of 1960, but was not broadcast until
          August the following year. From the BBC listings, it can be seen that
          the programme was broadcast from 22:00 to 22:15 on 15 August 1961 - a
          fact which indicates that the programme could no have been longer than
          15 minutes, and not the 23 minutes stated in Geiger's book (the short
          length of the poems on most of the easily obtainable recordings from
          around this time also seem to indicate a much shorter show).
        </p>
        <p>
          In much of the research about Gysin's work, several mistakes have been
          made regarding the use of computers in regards to this BBC programme.
          There are several aural accounts from Gysin, indicating that computers
          were used in generating the poems used for this recording. However,
          this computer would not have been the Honeywell 200 Model 120, as is
          commonly stated, as this model was not released until 1965. This
          confusion seems to stem from the fact that a computer was used to
          generate permutation poems for <strong>The Third Mind</strong> book,
          which explicitly states the above model as being used, and the
          presumption that, as many of the poems are found both in the BBC
          programme and the <strong>The Third Mind</strong>, that they are the
          same version. If Sommerville was to have run the poems through a
          computer for the BBC recording, this would most likely have been done
          on the <strong>EDSAC 2</strong> computer at Cambridge University where
          he was a student at the time. However, I have some scepticism about
          whether computers were used at all for the poems featured on the BBC
          recording.
        </p>
        <p>
          There are quite a few recordings of Gysin reading his permutation
          poetry from the 1960s, although it is, at present, difficult to
          assertain which of these are from the BBC recording. From the archival
          evidence, it seems likely that the programme featured the poems{' '}
          <strong>COME TO FREE THE WORDS</strong>,{' '}
          <strong>CALLING ALL REACTIVE AGENTS</strong>,{' '}
          <strong>JUNK IS NO GOOD BABY</strong>,{' '}
          <strong>KICK THAT HABIT MAN</strong>,{' '}
          <strong>LIKE YOU JUST SAID</strong>, <strong>I AM THAT I AM</strong>{' '}
          <strong>NO POETS DON'T OWN WORDS</strong> and{' '}
          <strong>PISTOL POEM</strong>. Out of these, the versions of{' '}
          <strong>JUNK IS NO GOOD BABY</strong> and{' '}
          <strong>KICK THAT HABIT MAN</strong> had appeared previously in{' '}
          <strong>The Exterminator</strong>, mostly written before Gysin had met
          Sommerville in Paris in the summer of 1959, and prior to Sommerville
          starting his studies at Corpus Christi Cambridge in the autumn of that
          same year. Of the rest, <strong>COME TO FREE THE WORDS</strong>{' '}
          appears to be written without computer assistance, given the frequent
          erroneous duplication of permutations (see the second and last stanza)
          and <strong>I AM THAT I AM</strong> seems to be an <i>ad hoc</i>{' '}
          concatenation of different permutations which, after 22 lines appears
          to switch to an earlier version of the poem (later published in{' '}
          <strong>An Anthology of Concrete Poetry</strong>, along with the
          mistakes found in that version). This leaves only{' '}
          <strong>NO POETS DON'T OWN WORDS</strong> and{' '}
          <strong>PISTOL POEM</strong> as contenders for the use of computers,
          but as can be seen from through using the <strong>Comparison</strong>{' '}
          or <strong>Permutation Algorithm</strong> sections of the site,
          neither of these orders match any of the publically-known permutation
          algorithms available before 1960. It is important to remember that
          there were not many published permutation algorithms at this time, and
          it was only in 1962 that there was a sudden explosion of them in the
          pages of <strong>Communications of the ACM</strong> and{' '}
          <strong>The Computer Journal</strong>.
        </p>
        <p>
          It seems more likely that although Sommerville might have introduced
          Gysin to the possibilities for using computation later in his studies
          (remember that he would only have been a first-year mathematics
          student by the summer of 1960), it is more likely that the use of
          computers for making the permutation poems only started occurring
          properly during the creation of <strong>The Third Mind</strong> in
          1965. According to Geiger, Burroughs arrived in New York on 8 December
          1964 to meet Gysin, who was already there and they worked on The Third
          Mind "dililgently, meeting most days at 9:30a.m. over a period of
          months, first in Burroughs’ room at the Chelsea Hotel, and later at a
          loft he moved into at 210 Center Street.".{' '}
        </p>
      </div>

      <div className="text3">
        <h1>Permutation Algorithms</h1>
        <p>
          In terms of identifying the different algorithms used for generating
          the permutation poems, the reverse lexicographic ordering is the one
          which most commonly occurs. This is probably taken from Schrack and
          Shimrat's algorithm PERMULEX (ACM algorithm 102), found in the June
          1962 edition of <strong>Communications of the ACM</strong>. We can
          presume that all poems published in <strong>The Exterminator</strong>{' '}
          and <strong>Minutes To Go</strong> would have been written by hand, as
          these would probably have been finished at the very start of Gysin's
          relationship with Sommerville. Of the poems appearing in{' '}
          <strong>The Third Mind</strong> which had not been published
          previously, all apart from <strong>BREATHE IN THE WORDS</strong> and{' '}
          <strong>RUB OUT THE WORDS</strong> use reverse lexicographic ordering.
          This is a pretty technologically advanced solution, as that algorithm
          would only have been three years old!{' '}
          <strong>BREATHE IN THE WORDS</strong> appears to be an <i>ad hoc</i>{' '}
          arrangement and <strong>RUB OUT THE WORDS</strong> appears to be using
          a type of ordering seen in many of the poems in{' '}
          <strong>The Exterminator</strong>, perhaps indicating that it was
          written contemporaneously with those poems.
        </p>
        <p>
          The <strong>An Anthology of Concrete Poetry</strong> version of{' '}
          <strong>I AM THAT I AM</strong> is dated 1958 which, coupled with the
          fact that Gysin often talked about <strong>I AM THAT I AM</strong>{' '}
          being the first of these types of poems that he wrote, may well be the
          earliest and original version.
        </p>

        <p>
          <strong>Brion Gysin Let The Mice In</strong> features one poem from{' '}
          <strong>The Third Mind</strong>: <strong>JUNK IS NO GOOD BABY</strong>{' '}
          and cut-down versions of <strong>PISTOL POEM</strong> and{' '}
          <strong>I AM THAT I AM</strong> that only show some of the entire
          group of permutations featured in <strong>The Third Mind</strong>.{' '}
          <strong>KICK THAT HABIT MAN</strong> also appears but in a different
          ordering to <strong>The Third Mind</strong>.
        </p>
      </div>
      <div className="text1">
        <p>
          The <strong>Brion Gysin Let The Mice In</strong> version of{' '}
          <strong>KICK THAT HABIT MAN</strong> is an outlier in Gysin and
          Sommerville's poems, in that it appears that a random number generator
          has been used to order the permutation. Given that this poem would
          have been written around 1973, it is likely that the types of
          generator used would be either a Linear Congruential Generator,
          invented in 1951 or Durstenfeld's 1964 implementation of the
          Fischer-Yates shuffle. One clue to how this might have been done is
          comparing this version of the poem with the reverse lexicographic
          version found in <strong>The Third Mind</strong>. What can be seen is
          that the last stanza of four lines is identical, as are the opening
          two lines. This suggests that the poem was first generated in reverse
          lexicographic order, then re-arranged. The fact that the identical
          lines at the top and bottom add up to 18 is a good indication that a
          Linear Congruential Generator might have been used to generate the
          order as, due to the fact that they work best when provided with a
          prime number modulus that allows them to generate a series of
          non-repeating pseudo-random numbers one less than the prime, it would
          make sense that the prime number 19 was used to generate a string of
          18 numbers that were then used to re-order the poem.
        </p>
      </div>

      <div className="text1">
        <p>
          The sporadic poems produced from the 1970s onwards tended to use a{' '}
          <strong>Magic Square</strong> style ordering which I still haven't
          cracked! These included the poems <strong>THIS IS SAM FRANCIS</strong>
          , <strong>I DON'T WORK YOU DIG</strong> and the{' '}
          <strong>Orgy Boys</strong> version of{' '}
          <strong>NO POETS DON'T OWN WORDS</strong>. Perhaps this change back to
          an older style of arrangement, first used in the BBC radio version of{' '}
          <strong>NO POETS DON'T OWN WORDS</strong> might partly have been due
          to the loss of his collaborator, Ian Sommerville who was killed in a
          car accident at the age of 36 on 5 February 1976.
        </p>
      </div>
    </section>
  </article>
);

export default Home;
