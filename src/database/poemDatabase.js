const poemDatabase = [
  {
    name: 'Minutes To Go',
    year: 1960,
    date: 'March 1960 (images are from the 1968 edition)',
    publisher: 'Beach Books',
    location: 'San Francisco',
    authors: [
      'Brion Gysin',
      'William S. Burroughs',
      'Gregory Corso',
      'Sinclair Beiles'
    ],
    medium: 'book',
    poems: [
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/calling-all-reactive-agents.txt'),
        images: [
          'calling-all-reactive-agents-1.jpg',
          'calling-all-reactive-agents-2.jpg',
          'calling-all-reactive-agents-3.jpg'
        ],
        folder: '1960-minutes-to-go'
      },
      {
        name: 'I THINK THEREFORE I AM',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/i-think-therefore-i-am.txt'),
        images: ['i-think-therefore-i-am.jpg'],
        folder: '1960-minutes-to-go'
      },
      {
        name: 'RUB OUT THE WRITE WORD',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/rub-out-the-write-word.txt'),
        images: ['rub-out-the-write-word.jpg'],
        folder: '1960-minutes-to-go'
      }
    ]
  },
  {
    name: 'The Exterminator',
    year: 1960,
    authors: ['Brion Gysin', 'William S. Burroughs'],
    medium: 'book',
    poems: [
      {
        name: 'WHO SENDS THE MAN',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/who-sends-the-man.txt'),
        images: ['who-sends-the-man.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'CAN MOTHER BE WRONG?',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/can-mother-be-wrong.txt'),
        images: ['can-mother-be-wrong.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'SHORT TIME TO GO',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/short-time-to-go.txt'),
        images: ['short-time-to-go.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'IN THE BEGINNING WAS THE WORD',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/in-the-beginning-was-the-word.txt'),
        images: [
          'in-the-beginning-was-the-word_1.jpg',
          'in-the-beginning-was-the-word_2.jpg'
        ],
        folder: '1960-the-exterminator'
      },
      {
        name: 'RUB OUT THE WORD(S)',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/rub-out-the-words.txt'),
        images: ['rub-out-the-words.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'PROCLAIM PRESENT TIME OVER',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/proclaim-present-time-over.txt'),
        images: ['proclaim-present-time-over.jpg'],
        folder: '1960-the-exterminator'
      }
    ]
  },
  {
    name: 'The Permutated Poems Of Brion Gysin (BBC)',
    year: 1961,
    authors: ['Brion Gysin', 'Ian Somerville'],
    notes: `This recording can be found in The British Library (shelfmark C1400/5)
    Side 1a (3:46): Pistol Poem / I've Come TO Free The Words / Pistol Poem (interlude) / No Poets Don't Own Words
    Side 1b (5:01): Calling All Reactive Agents / Pistol Poem (interlude) / Junk Is No Good Baby (Exterminator Version) / Pistol Poem (interlude) / Kick That Habit Man (Exterminator version) / Pistol Poem (interlude)
    Side 1c (3:07): I AM THAT I AM
    Total Time: 11:54`,
    medium: 'radio',
    poems: [
      {
        name: 'PISTOL POEM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/pistol-poem.txt')
      },
      {
        name: 'COME TO FREE THE WORDS',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/come-to-free-the-words.txt')
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/no-poets-dont-own-words.txt')
      },
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/calling-all-reactive-agents.txt')
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'I AM THAT I AM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/i-am-that-i-am.txt')
      }
    ]
  },
  {
    name: 'British Library Brion Gysin Tapes: C1400/4',
    year: 1900,
    medium: 'Tape (digitized)',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: 'IN THE BEGINNING WAS THE WORD',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/in-the-beginning-was-the-word.txt')
      },
      {
        name: 'LORD I AM NOT WERE THEE',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/lord-i-am-not-worthy.txt')
      },
      {
        name: 'WHO SENDS THE MAN',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/who-sends-the-man.txt')
      },
      {
        name: 'THIS REALLY SENDS ME MAN',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/this-really-sends-me.txt')
      },
      {
        name: 'PROCLAIM PRESENT TIME OVER',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/proclaim-present-time-over.txt'),
        images: ['proclaim-present-time-over.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'SHORT TIME TO GO',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/short-time-to-go.txt'),
        images: ['short-time-to-go.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'PLAY IT COOL FOOL',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/play-it-cool-fool.txt')
      },
      {
        name: 'I AM I WHO ARE YOU',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/i-am-i-who-are-you.txt')
      },
      {
        name: 'THIS COULD BE YOU',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/this-could-be-you.txt')
      },
      {
        name: 'WHAT WORDS TO STEAL',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/what-words-to-steal.txt')
      },
      {
        name: 'DO THEIR WORDS RUB OUT THERE',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/do-their-words-rub-out-there.txt')
      },
      {
        name: 'YOU BELONG TO ME',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/you-belong-to-me.txt')
      },
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/calling-all-reactive-agents.txt'),
        images: [
          'calling-all-reactive-agents-1.jpg',
          'calling-all-reactive-agents-2.jpg',
          'calling-all-reactive-agents-3.jpg'
        ],
        folder: '1960-minutes-to-go'
      },
      {
        name: 'LIKE YOU JUST SAID',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/like-you-just-said.txt')
      },
      {
        name: 'I LOVE YOU I DO',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        notes: 'files from here on are on side 2',
        file: require('./1986-british-library-tapes/C1400-4/i-love-you-i-do.txt')
      },
      {
        name: 'I GOT THE FEAR',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/i-got-the-fear.txt')
      },
      {
        name: 'EVERYONE IS AHEAD NOW',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/everyone-is-ahead-now.txt')
      },
      {
        name: 'BE ON THE BEAT',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/be-on-the-beat.txt')
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'WHAT ARE YOU THINKING',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/what-are-you-thinking.txt')
      },
      {
        name: 'I DIG YOU MAN',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/i-dig-you-man.txt')
      },
      {
        name: 'THIS TURNS ME ON',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/this-turns-me-on.txt')
      },
      {
        name: 'I AM OUT ARE YOU IN',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/i-am-out-are-you-in.txt')
      },
      {
        name: 'THAT REALLY BUGS ME',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/that-really-bugs-me.txt')
      },
      {
        name: 'WHAT YOU NOT GOT IN THERE',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/what-you-not-got-in-there.txt')
      },
      {
        name: 'GOT SOME PART',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      },
      {
        name: 'I GOT IT MADE',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
        file: require('./not-yet-transcribed.txt')
      },
      {
        name: 'I AM THE MAN',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./not-yet-transcribed.txt')
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      },
      {
        name: 'I AM THE MASTER',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./not-yet-transcribed.txt')
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      },
      {
        name: 'THE FUZZ COULD BREAK',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./not-yet-transcribed.txt')
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      },
      {
        name: 'LOVE MAKES THE WORLD GO ROUND',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        file: require('./not-yet-transcribed.txt')
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      },
      {
        name: 'IN THE BEGINNING WAS THE WORD',
        version: 'British Library Brion Gysin Tapes: C1400/4',
        note: 'this sounds very algorithmic! on side 2b',
        file: require('./not-yet-transcribed.txt')
        // file: require('./1986-british-library-tapes/C1400-4/got-some-part.txt')
      }
    ]
  },
  {
    name: 'British Library Brion Gysin Tapes: C1400/6',
    year: 1962,
    medium: 'Tape (digitized)',
    authors: ['Brion Gysin'],
    notes:
      'Two versions being read simultaneously.  It might be that the second part is the version playing under the first part.',
    poems: [
      {
        name: 'IN THE BEGINNING WAS THE WORD',
        version: 'British Library Brion Gysin Tapes: C1400/6',
        file: require('./1986-british-library-tapes/C1400-6/in-the-beginning-was-the-word.txt')
      }
    ]
  },
  {
    name: 'British Library Brion Gysin Tapes: C1400/2',
    year: 1963,
    medium: 'Tape (digitized)',
    notes: `This is a live performance of Gysin.  The tape label states "Brion ICA 28 Mars 63. All from side 1.`,
    authors: ['Brion Gysin'],
    poems: [
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        timing: '2:07'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'British Library Brion Gysin Tapes: C1400/2 (side 1)',
        file: require('./1986-british-library-tapes/C1400-2/junk-is-no-good-baby.txt'),
        timing: '8:24'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'British Library Brion Gysin Tapes: C1400/2 (side 1)',
        file: require('./1986-british-library-tapes/C1400-2/kick-that-habit-man.txt'),
        timing: '9:34'
      }
    ]
  },
  {
    name: 'The Third Mind',
    year: 1965,
    date: '1978 (US) / 1979 (UK) / Originally finished in 1965',
    publisher: 'John Calder',
    location: 'London',
    authors: ['Brion Gysin', 'William S. Burroughs', 'Ian Sommerville'],
    medium: 'book',
    poems: [
      {
        name: 'BREATHE IN THE WORDS',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/breathe-in-the-words.txt'),
        images: ['breathe-in-the-words.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'I AM THAT I AM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/i-am-that-i-am.txt'),
        images: ['i-am-that-i-am.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'I THINK THEREFORE I AM',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/i-think-therefore-i-am.txt'),
        images: ['i-think-therefore-i-am.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'PROCLAIM PRESENT TIME OVER',
        version: 'The Exterminator',
        file: require('./1960-the-exterminator/text/proclaim-present-time-over.txt'),
        images: ['present-time.jpg'],
        folder: '1960-the-exterminator'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Third Mind',
        file: require('./1973-let-the-mice-in/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'PISTOL POEM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/pistol-poem.txt'),
        images: ['pistol-poem1.jpg'],
        folder: '1978-the-third-mind'
      },
      {
        name: 'RUB OUT THE WORD(S)',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/rub-out-the-word.txt'),
        images: ['rub-out-the-word.jpg'],
        folder: '1978-the-third-mind'
      }
    ]
  },
  {
    name: 'Anthology Of Concrete Poetry',
    year: 1967,
    date: '1967',
    publisher: 'Something Else Press',
    authors: ['Brion Gysin', 'Emmett Williams (ed.)'],
    medium: 'book',
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'Anthology Of Concrete Poetry',
        file: require('./1967-anthology-of-concrete-poetry/text/i-am-that-i-am.txt'),
        images: ['i-am-that-i-am1.jpg', 'i-am-that-i-am2.jpg'],
        folder: '1967-anthology-of-concrete-poetry'
      }
    ]
  },
  {
    name: 'Exhibition Catalogue for "Sam Fancis, Paintings, 1947-1972"',
    year: 1972,
    date: '1972',
    publisher: 'Albright-Knox',
    authors: ['Brion Gysin'],
    medium: 'catalogue',
    poems: [
      {
        name: 'THIS IS SAM FRANCIS',
        version: 'Exhibition Catalogue for "Sam Fancis, Paintings, 1947-1972"',
        file: require('./1972-sam-francis-catalogue/text/this-is-sam-francis.txt'),
        images: ['this-is-sam-francis.jpg'],
        folder: '2002-back-in-no-time'
      }
    ]
  },
  {
    name: 'Brion Gysin Let The Mice In',
    year: 1973,
    date: 'March 1973',
    publisher: 'Something Else Press',
    location: 'West Glover, VT',
    authors: [
      'Brion Gysin',
      'William S. Burroughs',
      'Ian Sommerville',
      'ed. Jan Herman'
    ],
    medium: 'book',
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/i-am-that-i-am.txt'),
        images: [
          'iamthatiam1.jpg',
          'iamthatiam2.jpg',
          'iamthatiam3.jpg',
          'iamthatiam4.jpg',
          'iamthatiam5.jpg'
        ],
        folder: '1973-let-the-mice-in'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Third Mind',
        file: require('./1973-let-the-mice-in/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '1973-let-the-mice-in'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '1973-let-the-mice-in'
      },
      {
        name: 'PISTOL POEM',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/pistol-poem.txt'),
        images: ['pistol-poem1.jpg', 'pistol-poem2.jpg'],
        folder: '1973-let-the-mice-in'
      }
    ]
  },
  {
    name: 'Songs',
    year: 1981,
    medium: 'CD',
    authors: ['Brion Gysin', 'Steve Lacy'],
    poems: [
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '???'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '???'
      },
      {
        name: "I DON'T WORK YOU DIG",
        version: 'Songs',
        file: require('./1981-songs/text/i-dont-work-you-dig.txt')
      }
    ]
  },
  {
    name: 'Orgy Boys',
    year: 1982,
    medium: 'CD',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'Orgy Boys',
        file: require('./1982-orgy-boys/text/no-poets-dont-own-words.txt')
      }
    ]
  },
  {
    name: 'Text-Sound Texts',
    year: 1988,
    medium: 'book',
    authors: ['Brion Gysin', 'ed. Richard Kostelanetz'],
    pages: '373-378',
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/i-am-that-i-am.txt')
      }
    ]
  },
  {
    name: 'Brion Gysin: Self-Portrait Jumping',
    year: 1995,
    medium: 'CD',
    authors: ['Brion Gysin', 'Ramuntcho Matta', 'Don Cherry', 'Steve Lacy'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: '???'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '???'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '???'
      }
    ]
  },
  {
    name: 'Mektoub: Recordings 1960 – 1981',
    year: 1996,
    medium: 'CD',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: 'COME TO FREE THE WORDS',
        version: '???',
        audio: ['01-ive-come-to-free-the-words.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: 'I AM THAT I AM',
        version: '???',
        audio: ['05-i-am-that-i-am.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: 'PISTOL POEM',
        version: '???',
        audio: ['06-pistol-poem.mp3', '07-pistol-poem-pt2.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: 'CALLING ALL RE-ACTIVE AGENTS',
        version: '???',
        audio: ['08-recalling-all-active-agents.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: '???',
        audio: ['10-no-poets-dont-own-words.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '???',
        audio: ['13-kick-that-habit-man.mp3'],
        folder: '1996-mektoub'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '???',
        audio: ['14-junk-is-no-good-baby.mp3'],
        folder: '1996-mektoub'
      }
    ]
  },
  {
    name: 'Back In No Time',
    year: 2002,
    medium: 'book',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/i-am-that-i-am.txt')
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'Back In No Time',
        file: require('./2002-back-in-no-time/text/junk-is-no-good-baby.txt'),
        images: ['junk-is-no-good-baby.jpg'],
        folder: '2002-back-in-no-time'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'Back In No Time',
        file: require('./2002-back-in-no-time/text/kick-that-habit-man.txt'),
        images: ['kick-that-habit-man.jpg'],
        folder: '2002-back-in-no-time'
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'Orgy Boys',
        file: require('./1982-orgy-boys/text/no-poets-dont-own-words.txt'),
        images: [
          'no-poets-dont-own-words1.jpg',
          'no-poets-dont-own-words2.jpg',
          'no-poets-dont-own-words3.jpg',
          'no-poets-dont-own-words4.jpg'
        ],
        folder: '2002-back-in-no-time'
      },
      {
        name: "I DON'T WORK YOU DIG",
        version: 'Songs',
        file: require('./1981-songs/text/i-dont-work-you-dig.txt'),
        images: ['i-dont-work-you-dig.jpg'],
        folder: '2002-back-in-no-time'
      },
      {
        name: 'THIS IS SAM FRANCIS',
        version: 'Sam Francis Catalogue',
        file: require('./1972-sam-francis-catalogue/text/this-is-sam-francis.txt'),
        images: ['this-is-sam-francis.jpg'],
        folder: '2002-back-in-no-time'
      }
    ]
  },
  {
    name: 'Brion Gysin: Tuning Into The Multimedia Age',
    year: 2003,
    medium: 'book',
    authors: ['Brion Gysin', 'Jose Ferez Kuri'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/i-am-that-i-am.txt')
      },
      {
        name: 'CALLING ALL RE ACTIVE AGENTS',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/calling-all-reactive-agents.txt')
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/kick-that-habit-man.txt')
      },
      {
        name: 'BREATHE IN THE WORDS',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/breathe-in-the-words.txt')
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/junk-is-no-good-baby.txt')
      },
      {
        name: 'COME TO FREE THE WORDS',
        version: 'BBC ?'
        // file: require('./1978-the-third-mind/text/kick-that-habit-man.txt'),
      }
    ]
  },
  {
    name: 'The Spoken Word',
    year: 2012,
    medium: 'CD',
    authors: ['Brion Gysin', 'William S. Burroughs'],
    poems: [
      {
        name: 'PISTOL POEM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)'
      },
      {
        name: 'COME TO FREE THE WORDS',
        version: '???'
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: '???'
      },
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: '???'
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '???'
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '???'
      },
      {
        name: 'I AM THAT I AM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)'
      }
    ]
  },
  {
    name: 'British Library Brion Gysin Tapes: C1400/1',
    year: 1900,
    medium: 'Tape (digitized)',
    authors: ['Brion Gysin'],
    notes: `Side 1: 5mins: "I am Brion Gysin the painter" / NO POETS DON'T OWN WORDS / I am the poet Brion Gysin (continued)`,
    poems: [
      {
        name: "NO POETS DON'T OWN WORDS",
        notes: 'side 1',
        version: 'The Permutated Poems Of Brion Gysin (BBC)'
      },
      {
        name: 'I AM THAT I AM',
        version: 'British Library Brion Gysin Tapes: C1400/1',
        notes: 'side 2',
        file: require('./1986-british-library-tapes/C1400-1/i-am-that-i-am.txt'),
        length: '1:40'
      }
    ]
  },
  {
    name: 'British Library Brion Gysin Tapes: C1400/3',
    year: 1900,
    medium: 'Tape (digitized)',
    notes: `This recording features Gysin with J. L. Philippe simultaneously reading a permutation poem, counting and pronunciation is rhythmic and in French.  This is then interrupted by what is presumably Moroccan music.  The sticker on the spool says 'Sveriges Radio'`,
    authors: ['Brion Gysin', 'J. L. Philippe'],
    poems: [
      {
        name: 'per-mu-ta-tions',
        version: 'British Library Brion Gysin Tapes: C1400/2 (side 1)',
        file: require('./1986-british-library-tapes/C1400-3/per-mu-ta-tions.txt'),
        length: '4:41'
      }
    ]
  }
];

export default poemDatabase;
