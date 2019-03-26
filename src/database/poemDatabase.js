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
        name: 'WHO SENDS THE MAN?',
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
    medium: 'radio',
    poems: [
      {
        name: 'COME TO FREE THE WORDS',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        note: 'Mentioned in the BBC listings',
        file: require('./1961-bbc/text/come-to-free-the-words.txt')
      },
      {
        name: 'CALLING ALL REACTIVE AGENTS',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        note: 'Mentioned in the BBC listings',
        file: require('./1961-bbc/text/calling-all-reactive-agents.txt')
      },
      {
        name: 'JUNK IS NO GOOD BABY',
        note:
          'The recording of this for the broadcast is mentioned in the Geiger book and in the BBC listings',
        version: 'The Exterminator'
      },
      {
        name: 'KICK THAT HABIT MAN',
        note:
          'The recording of this for the broadcast is mentioned in the Geiger book and in the BBC listings',
        version: 'The Exterminator'
      },
      {
        name: 'LIKE YOU JUST SAID',
        note: 'Mentioned in the BBC listings',
        version: 'The Permutated Poems Of Brion Gysin (BBC)'
      },
      {
        name: 'I AM THAT I AM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        note:
          'The recording of this for the broadcast is mentioned in the Geiger book and in the BBC listings',
        file: require('./1961-bbc/text/i-am-that-i-am.txt')
      },
      {
        name: "NO POETS DON'T OWN WORDS",
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        note:
          'not mentioned in the BBC listings or in the Geiger book but is on The Spoken Word',
        file: require('./1961-bbc/text/no-poets-dont-own-words.txt')
      },
      {
        name: 'PISTOL POEM',
        version: 'The Permutated Poems Of Brion Gysin (BBC)',
        note: 'mentioned in the Geiger book and many other places',
        file: require('./1961-bbc/text/pistol-poem.txt')
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
  }
];

export default poemDatabase;
