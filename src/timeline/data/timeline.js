const timeline = [
  {
    get date() {
      return new Date(1950, 1, 1);
    },
    type: 'smallItem',
    label: '1950',
    shortContent: 'The Wilhelm-Baynes English translation of the <i>I Ching</i> is published.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1953, 1, 1);
    },
    type: 'smallItem',
    label: '1953',
    // relativePosition: 0,
    // get relativePosition() {return this.date.getTime() },
    shortContent:
      '<a href="https://urbigenous.net/library/nine_billion_names_of_god.html">Arthur C. Clarke  <i>The Nine Billion Names of God</i> is published</a>.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1954, 1, 1);
    },
    type: 'smallItem',
    label: '1954',
    // relativePosition: 1,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "First edition of Aldous Huxley's <i>Doors Of Perception</i> published (does not include <i>Heaven and Hell</i>).",
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1955, 1, 1);
    },
    type: 'smallItem',
    label: '1955',
    // relativePosition: 2,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'The RAND Coproration publishes <i>A Million Random Digits with 100,000 Normal Deviates</i>.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1956, 1, 1);
    },
    type: 'smallItem',
    label: '1956',
    // relativePosition: 4.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="https://archive.org/details/heavenhell00huxl">Aldous Huxley\'s <i>Heaven and Hell</i> essay is published in the second edition of  <i>Doors Of Perception</i></a>.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1956, 1, 1);
    },
    type: 'smallItem',
    label: '1956',
    // relativePosition: 4.6,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'The Tompkins-Paige permutation algorithm is outlined in <br>TOMPKINS, C. "Machine attacks on problems whose variables are permutations," in <i>Proceedings of the  Symposium in Applied Mathematics, Numerical Analysis</i>, Vol. 6, McGraw-Hill, Inc., N.Y., 1956, 195-211',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1957, 1, 1);
    },
    type: 'smallItem',
    label: '1957',
    // relativePosition: 5.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<i>material: kleine antologie konkrete dichtung</i> published by the "Darmstadt Circle" of poets.  It features Daniel Spoerri\'s <i>das rezel kroitz wort</i> and <i>erst lezt das erste</i>.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1957, 1, 1);
    },
    type: 'smallItem',
    label: '1957',
    // relativePosition: 5.5,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'IBM releases the first version of FORTRAN for the 704 computer.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1958, 1, 1);
    },
    type: 'smallItem',
    label: '1958-1960',
    // relativePosition: 6,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'Gysin, Burroughs and Sommerville are living at the Beat Hotel in Paris.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1958, 1, 1);
    },
    type: 'smallItem',
    label: '1958',
    // relativePosition: 6.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'Gysin writes I AM THAT I AM (without computer assistance).',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1958, 1, 1);
    },
    type: 'smallItem',
    label: '1958',
    // relativePosition: 6.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "Jackson Mac Low obtains a copy of The RAND Coproration's  <i>A Million Random Digits with 100,000 Normal Deviates</i> and starts using it heavily in his work.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1958, 3, 1);
    },
    type: 'smallItem',
    label: '1958',
    // relativePosition: 6.4,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'The programming language FORTRAN II is released.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1958, 7, 1);
    },
    type: 'smallItem',
    label: '11 July 1958',
    // relativePosition: 6.6,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'At Cambridge University, the EDSAC 1 computer is shut down and replaced by EDSAC 2, the first full-scale microprogrammed machine.<br><a href="../papers/other_material/edsac_programming-systems.pdf">David J. Wheeler <i>EDSAC Programming Systems</i></a><br><a href="../papers/other_material/edsac-2.pdf">Maurice V. Wilkes <i>EDSAC 2</i></a><br><a href="../papers/other_material/edsac-poster.pdf">Martin Richards <i>EDSAC Initial Orders and Square Program</i></a>',
    forcePosition: 'left',
    // showLess: '...',
    // showMore: 'more about the EDSAC machines'
  },
  {
    get date() {
      return new Date(1959, 9, 1);
    },
    type: 'smallItem',
    label: 'September? 1959 ...',
    // relativePosition: 7.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'Ian Sommerville starts studying Mathematics at Corpus Christi College, Cambridge University.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1960, 1, 1);
    },
    type: 'smallItem',
    label: 'Early 1960',
    // relativePosition: 8.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<i>Minutes To Go</i> by Sinclair Beiles, William S. Burroughs, Gregory Corso and Brion Gysin published.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1960, 2, 1);
    },
    type: 'smallItem',
    label: 'Early 1960',
    // relativePosition: 8.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'George Macbeth, Director of Talks for the BBC Third Programme reads <i>Minutes To Go</i> and contacts Gysin about creating a radio programme. ',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1960, 7, 1);
    },
    type: 'smallItem',
    label: 'July 1960',
    // relativePosition: 8.6,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "<i>The Exterminator</i> by William S. Burroughs and  Brion Gysin published by Dave Haselwood's Auerhahn Press in San Francisco.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1960, 8, 1);
    },
    type: 'smallItem',
    label: 'Summer 1960',
    // relativePosition: 8.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "Recording of <i>The Permutated Poems of Brion Gysin</i> radio programme over two days at the BBC in Sheperd's Bush, London.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1960, 9, 1);
    },
    type: 'smallItem',
    label: '1960',
    // relativePosition: 8.8,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'LEHMER, D H. "Teaching combinatorial tricks to a computer," in <i>Proceedings of Symposium Applied Mathematics,Combinatorial Analysis</i>, Vol. 10, American Mathematical Society, Providence, R.I, 1960, 179-193',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1961, 1, 1);
    },
    type: 'smallItem',
    label: '1961',
    // relativePosition: 9.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "Publication of Jorge Louis Borges's short story <i>The Library of Babel</i> in French.",
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1961, 1, 1);
    },
    type: 'smallItem',
    label: '1961',
    // relativePosition: 9.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/mark-wells_generation-of-permutations-by-transposition.pdf">WELLS, M. B. "Generation of permutations by transposition," <i>Math Comp</i> 15 (1961), 192-195</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1961, 3, 1);
    },
    type: 'smallItem',
    label: 'March 1961',
    // relativePosition: 9.3,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'Brion Gysin writes to BBC producer Douglas Cleverdon to ask about delay of the broadcast of <i>The Permutated Poems...</i> radio programme.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1961, 8, 1);
    },
    type: 'smallItem',
    label: '15 August 1961',
    // relativePosition: 9.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "22:00 - Broadcast of <i>The Permutated Poems of Brion Gysin</i> on BBC's Third Programme.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1962, 6, 1);
    },
    type: 'smallItem',
    label: 'June 1962',
    // relativePosition: 10.5,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/schack_and_shimrat-permutation-in-lexicographic-order.pdf">SCHRACK, G. F. AND SHIMRAT, M. "Permutation in lexicographic order (Algorithm 102)," <i>Comm. ACM</i> 5, 6 (June 1962), 346.</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1962, 8, 1);
    },
    type: 'smallItem',
    label: 'August 1962',
    // relativePosition: 10.6,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/trotter_perm-algorithm-115.pdf">TROTTER, H. F. "Perm (Algorithm 115)," <i>Communications of the ACM</i> 5, 8 (August 1962), 434-435.</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1962, 11, 1);
    },
    type: 'smallItem',
    label: 'December 1962',
    // relativePosition: 10.8,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/Shen1962_Article_OnTheGenerationOfPermutations.pdf">SHEN, M. K. "On the generation of permutations and combinations", BIT 2, (December 1962) Vol. 2, 4, pp. 228-231</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1962, 1, 1);
    },
    type: 'smallItem',
    label: '1962',
    // relativePosition: 9.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "Two translations of Jorge Louis Borges's short story <i>The Library of Babel</i> appear in English.",
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1962, 12, 1);
    },
    type: 'smallItem',
    label: '1962',
    // relativePosition: 10.9,
    // get relativePosition() {return this.date.getTime()},
    // shortContent: 'The state of permutation algorithms in 1962.',
    shortContent:
      '"The year 1962 marked the beginning of a proliferation of computer-based permutation sequence generators.  In1962 Peck and Schrack presented algorithm PERMUTE, which inspired algorithm PERM by Trotter.  Although it was only 1962, Trotter noted that the excuse for adding PERM to the \'growing pile of permutation generators\' was that PERM offered an advantage in speed over previous algorithms...The Peck and Schrack and Trotter algorithms were quickly followed by a plethora of other algorithms to generate permutations or combinations, including algorithm PERMUTATION by Howell, PERMULEX by Schrack and Shimrat that produced permutatios in lexicographical order, PERMUTE by EAVES, COMBINATION by Kurtzberg, and an unnamed algorithm by Lotto, nearly all published in <i>Communications of the ACM</i> in 1962.  In addition, in 1962, Shen published a new method to generate permutations and combinations in lexicographical order that proved superior to a well-known method of generation by addition utilized by Howell in algorithm PERMUTATION." <br> Kenneth J. Berry, Janis E. Johnston, Paul W. Mielke Jr (2014) <i>A Chronicle of Permutation Statistical Methods: 1920–2000, and Beyond</i> Springer, London, p. 212',
    forcePosition: 'left',
    // showLess: '...',
    // showMore: '...'
  },
  {
    get date() {
      return new Date(1963, 1, 1);
    },
    type: 'smallItem',
    label: '1963',
    // relativePosition: 11.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'H. Steinhaus, <i>One Hundred Problems in Elementary Mathematics</i>, Pergamon Press, 1963.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1963, 2, 1);
    },
    type: 'smallItem',
    label: '1963',
    // relativePosition: 11.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="http://www.ubu.com/historical/young/AnAnthologyOfChanceOperations.pdf"><i>An Anthology Of Chance Operations</i> published, featuring Emmett Williams\' <i>Cellar Song for Five Voices</i></a>',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1963, 7, 1);
    },
    type: 'smallItem',
    label: 'July 1963',
    // relativePosition: 11.5,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/selmer-m-johnson_generation-of-permutations-by-adjacent-transposition.pdf">JOHNSON, S.M. "Generation of permutations by adjacent transposition," <i>Mathematics of Computation</i> 17, 83 (July 1963), pp 282-285</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1963, 7, 1);
    },
    type: 'smallItem',
    label: 'July 1963',
    // relativePosition: 9.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'The Loughborough Bell Foundry in Leicestershire, England ring out all 40,320 possible permutations of eight church bells in a performance lasting nearly a full day.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1963, 9, 1);
    },
    type: 'smallItem',
    label: 'September 1963',
    // relativePosition: 11.6,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      ' <a href="../papers/shen_generation-of-permutations-in-lexicographic-order.pdf">SHEN, M. K. "Generation of permutations in lexicographic order (Algorithm 202)," <i>Comm ACM</i> 6, 9 (Sept. 1963), 517. </a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1963, 10, 1);
    },
    type: 'smallItem',
    label: '9 September 1963',
    // relativePosition: 11.7,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "First performance of Jackson Mac Low's <i>JAIL BREAK</i> at a Poet's Reading at Living Theatre, New York.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1963, 11, 1);
    },
    type: 'smallItem',
    label: 'November 1963',
    // relativePosition: 11.8,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/brian-heap_permutations-by-interchanges.pdf">B R. HEAP "Permutations by Interchanges," <i>Computer Journal</i> Vol. 6, 3 (November 1963), 293-4.</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1963, 12, 1);
    },
    type: 'smallItem',
    label: '1963',
    // relativePosition: 11.9,
    // get relativePosition() {return this.date.getTime()},
    // shortContent: 'The state of permutation algorithms in 1963.',
    shortContent:
      '"In 1963 Wolfson and Wright, Wright and Wolfson, and Mifsud presented algorithms to generate all possible combinations of <i>n</i> objects.  Shen published algorithm PERLE that generated all possible permutations in lexicographical order.  Johnson published a paper on the generation of permutations by adjacent transposition wherein each permutation was derived from its predecessor by a single interchange of two marks in adjacent positions, and Heap presented methods for obtaining all possible permutations of a numberof objects, in which each permutation differed from its predecessor only by the interchange of two of the objects. The Heap algorithm was later described by Lipski in 1979 as “probably the most efficient method known”." <br> Kenneth J. Berry, Janis E. Johnston, Paul W. Mielke Jr (2014) <i>A Chronicle of Permutation Statistical Methods: 1920–2000, and Beyond</i> Springer, London, p. 213',
    forcePosition: 'left',
    // showLess: '...',
    // showMore: '...'
  },
  {
    get date() {
      return new Date(1964, 1, 1);
    },
    type: 'smallItem',
    label: '1964',
    // relativePosition: 12.0,
    // get relativePosition() {return this.date.getTime()},
    // shortContent: 'Sag intrduced an algorithm to generate all permutations of a set with repetitions.  Durstenfeld put forth procedure SHUFFLE that generates random permutations of sequence {1,2, ... <i>n</i>}.',
    shortContent:
      '"The year 1964 turned out to be an important year for permutation sequence generators, in general, and random permutation sequence generators , in particular.  First Sag intrduced an algorithm to generate all permutations of a set with repetitions.  Second, Durstenfeld put forth procedure SHUFFLE that generates random permutations of sequence {1,2, ... <i>n</i>}.  The procedure by Durstenfeld was based on the shuffling method first described by Fischer and Yates in <i>Statistical Tables for Biological, Agricultural and Medical Research</i> in 1938..." <br> Kenneth J. Berry, Janis E. Johnston, Paul W. Mielke Jr (2014) <i>A Chronicle of Permutation Statistical Methods: 1920–2000, and Beyond</i> Springer, London, p. 213',
    forcePosition: 'left',
    // showLess: '...',
    // showMore: '...'
  },
  {
    get date() {
      return new Date(1965, 5, 1);
    },
    type: 'smallItem',
    label: '1965',
    // relativePosition: 13.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      '<a href="../papers/other_material/70C-480-01_7404_Honeywell_200_2000.pdf">The Honeywell 200 Model 120 is released</a>. | <a href="http://www.bitsavers.org/pdf/honeywell/datapro/70C-480-01_7404_Honeywell_200_2000.pdf">Click here to read a April 1974 catalogue about the Honeywell 200</a>',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1965, 2, 1);
    },
    type: 'smallItem',
    label: '1965',
    // relativePosition: 13.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'The book <i>Applied Combinatorial Mathematics</i> by E.F. Beckenbach is published. [NOTE TO DAVID: This contains D. H. Lehmer\'s "Machine tools of Computation"]',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1965, 2, 1);
    },
    type: 'smallItem',
    label: '1965',
    // relativePosition: 13.2,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'Emmett Williams uses an IBM computer to produce his poem <i>Music</i>.',
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1965, 1, 1);
    },
    type: 'smallItem',
    label: '1965',
    // relativePosition: 13.4,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'William S. Burroughs, Ian Sommerville & Brion Gysin <i>The Third Mind</i> is published.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1965, 8, 1);
    },
    type: 'smallItem',
    label: 'August 1965',
    // relativePosition: 13.8,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "Jackson Mac Low's JAIL BREAK is published in <i>Workshop in Nonviolence</i> Vol. II Nos. 14 and 15, New York, August 1966.",
    forcePosition: 'right',
  },

  {
    get date() {
      return new Date(1965, 11, 1);
    },
    type: 'smallItem',
    label: 'Winter 1965',
    // relativePosition: 13.9,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'The composer James Tenney holds a workshop in programming FORTRAN for his artistic friends in New York, including Phil Corner, Jackson Mac Low, Max Neuhaus, Nam June Paik, Steve Reich, Alison Knowles and Dick Higgins.',
    forcePosition: 'left',
  },

  {
    get date() {
      return new Date(1967, 1, 1);
    },
    type: 'smallItem',
    label: '1967',
    // relativePosition: 15.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      "<i>Anthology of Concrete Poetry</i> edited by Emmett Williams is published.  Contains a version of <i>I AM THAT I AM</i>, Jackson Mac Low's  JAIL BREAK and Daniel Spoerri's <i>das rezel kroitz wort</i> and <i>erst lezt das erste</i>.",
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1967, 7, 1);
    },
    type: 'smallItem',
    label: 'July 1967',
    // relativePosition: 15.5,
    // get relativePosition() {return this.date.getTime()},
    shortContent: 'George Perec visits the University of Michigan and sees their computers.',
    forcePosition: 'right',
  },
  {
    get date() {
      return new Date(1968, 1, 1);
    },
    type: 'smallItem',
    label: '1968',
    // relativePosition: 16.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent: "Volume 1 of Donald Knuth's <i>The Art of Computer Programming</i> is published.",
    forcePosition: 'left',
  },
  {
    get date() {
      return new Date(1969, 1, 1);
    },
    type: 'smallItem',
    label: 'Summer 1969',
    // relativePosition: 16.0,
    // get relativePosition() {return this.date.getTime()},
    shortContent:
      'Jackson Mac Low generates his first computer poems while resident at the Los Angeles County Musem.',
    forcePosition: 'right',
  },
];

export default timeline;
