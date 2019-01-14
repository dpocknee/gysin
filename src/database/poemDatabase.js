const poemDatabase = [
  {
    name: 'Minutes To Go',
    year: 1960,
    date: 'March 1960 (images are from the 1968 edition)',
    publisher: 'Beach Books',
    location: 'San Francisco',
    authors: ['Brion Gysin', 'William S. Burroughs', 'Gregory Corso', 'Sinclair Beiles'],
    medium: 'book',
    poems: [
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/calling-all-reactive-agents.txt'),
      },
      {
        name: 'I THINK THEREFORE I AM',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/i-think-therefore-i-am.txt'),
      },
      {
        name: 'RUB OUT THE WRITE WORD',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/rub-out-the-write-word.txt'),
      },
    ],
  },
  {
    name: 'The Exterminator',
    year: 1960,
    authors: ['Brion Gysin', 'William S. Burroughs'],
    medium: 'book',
    poems: [],
  },
  {
    name: 'The Permutated Poems Of Brion Gysin (BBC)',
    year: 1961,
    authors: ['Brion Gysin', 'Ian Somerville'],
    medium: 'radio',
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/i-am-that-i-am.txt'),
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/no-poets-dont-own-words.txt'),
      },
      {
        name: 'PISTOL POEM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        file: require('./1961-bbc/text/pistol-poem.txt'),
      },
    ],
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
      },
    ],
  },
  {
    name: 'Brion Gysin Let The Mice In',
    year: 1973,
    date: 'March 1973',
    publisher: 'Something Else Press',
    location: 'West Glover, VT',
    authors: ['Brion Gysin', 'William S. Burroughs', 'Ian Sommerville', 'ed. Jan Herman'],
    medium: 'book',
    poems: [
      {
        name: 'I AM THAT I AM',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/i-am-that-i-am.txt'),
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/junk-is-no-good-baby.txt'),
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/kick-that-habit-man.txt'),
      },
      {
        name: 'PISTOL POEM',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/pistol-poem.txt'),
      },
    ],
  },
  {
    name: 'The Third Mind',
    year: 1978,
    date: '1978 (US) / 1979 (UK) / Originally finished in 1965',
    publisher: 'John Calder',
    location: 'London',
    authors: ['Brion Gysin', 'William S. Burroughs', 'Ian Sommerville'],
    poems: [
      {
        name: 'BREATHE IN THE WORDS',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/breathe-in-the-words.txt'),
      },
      {
        name: 'I AM THAT I AM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/i-am-that-i-am.txt'),
      },
      {
        name: 'I THINK THEREFORE I AM',
        version: 'Minutes To Go',
        file: require('./1960-minutes-to-go/text/i-think-therefore-i-am.txt'),
      },
      {
        name: 'In Present Time',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/in-present-time.txt'),
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'Brion Gysin Let The Mice In',
        file: require('./1973-let-the-mice-in/text/junk-is-no-good-baby.txt'),
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/kick-that-habit-man.txt'),
      },
      {
        name: 'PISTOL POEM',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/pistol-poem.txt'),
      },
      {
        name: 'RUB OUT THE WORD',
        version: 'The Third Mind',
        file: require('./1978-the-third-mind/text/rub-out-the-word.txt'),
      },
    ],
  },
  {
    name: 'Exhibition Catalogue for “Sam Fancis, Paintings, 1947-1972”',
    year: 1972,
    medium: 'catalogue',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: 'THIS IS SAM FRANCIS',
        version: 'Sam Francis Catalogue',
      },
    ],
  },
  {
    name: 'Songs',
    year: 1981,
    medium: 'CD',
    authors: ['Brion Gysin', 'Steve Lacy'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: '??',
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '??',
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '??',
      },
      {
        name: "I DON'T WORK YOU DIG",
        version: '??',
      },
    ],
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
        file: require('./1978-the-third-mind/text/i-am-that-i-am.txt'),
      },
    ],
  },
  {
    name: 'Brion Gysin: Self-Portrait Jumping',
    year: 1995,
    medium: 'CD',
    authors: ['Brion Gysin', 'Ramuntcho Matta', 'Don Cherry', 'Steve Lacy'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: '??',
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '??',
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '??',
      },
    ],
  },
  {
    name: 'Mektoub: Recordings 1960 – 1981',
    year: 1996,
    medium: 'CD',
    authors: ['Brion Gysin'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: '??',
      },
      {
        name: 'CALLING ALL RE-ACTIVE AGENTS',
        version: '??',
      },
      {
        name: 'COME TO FREE THE WORDS',
        version: '??',
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '??',
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '??',
      },
      {
        name: 'PISTOL POEM',
        version: '??',
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: '??',
      },
    ],
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
        file: require('./1973-let-the-mice-in/text/i-am-that-i-am.txt'),
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: 'The Exterminator',
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: 'The Exterminator',
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: '???',
      },
      {
        name: "I DON'T WORK YOU DIG",
        version: 'Songs',
      },
      {
        name: 'THIS IS SAM FRANCIS',
        version: 'Sam Francis Catalogue',
      },
    ],
  },
  {
    name: 'Brion Gysin: Tuning Into The Multimedia Age',
    year: 2003,
    medium: 'book',
    authors: ['???'],
    poems: [
      {
        name: '?????',
        version: '???',
      },
    ],
  },
  {
    name: 'The Spoken Word',
    year: 2012,
    medium: 'CD',
    authors: ['Brion Gysin', 'William S. Burroughs'],
    poems: [
      {
        name: 'I AM THAT I AM',
        version: '???',
      },
      {
        name: 'COME TO FREE THE WORDS',
        version: '???',
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        version: '???',
      },
      {
        name: 'KICK THAT HABIT MAN',
        version: '???',
      },
      {
        name: 'PISTOL POEM',
        version: '???',
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: '???',
      },
    ],
  },
];

export default poemDatabase;
