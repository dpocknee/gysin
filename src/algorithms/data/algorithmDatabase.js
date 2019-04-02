import {
  tompkinsPaige,
  lehmer,
  hall,
  gysinSommerville,
  coveyouSullivan,
  wells,
  steinhausJohnsonTrotter,
  peckSchrack,
  schrackShimrat,
  heap,
  myrvoldRuskey
} from 'historical-permutations';

const algorithmDatabase = [
  {
    algorithm: tompkinsPaige,
    code: `<pre>
  <code>
  <i>i=N</i>; <b>loop</b>: <i>c[i]</i>=1 <b>while</b> <i>i</i>&gt;2: <i>i</i>:=<i>i</i>-1 <b>repeat</b>;
    <i>process</i>;
  <b>loop</b>:
      <i>rotate(i)</i>
      <b>if</b> <i>c[i]</i>&lt;<i>i</i> <b>then</b> <i>c[i]</i>:=<i>c[i]</i>+1; <i>i</i>:=2;
                  <i>process</i>;
                <b>else</b> <i>c[i]</i>:=1; <i>i</i>:=<i>i</i>+1
      <b>endif</b>;
  <b>while</b> <i>i</i>&le;<i>N</i> <b>repeat</b>;
  </code>

  NOTE: In the algorithm above, rotate() is a function that does a cyclic left-rotation of the first <i>i</i> elments of the array:

  <code>
    <i>t</i>:=P[1]; <i>k</i>:=2;
    <b>loop while</b> <i>k</i>&le;<i>i</i>: P[<i>k</i>-1]:=P[<i>k</i>] <b>repeat</b>;
    P[<i>i</i>]:=<i>t</i>;
  </code>
  </pre>`,
    name: 'Tompkins-Paige Algorithm',
    year: 1956,
    arguments: 2,
    info:
      'This is an implementation of the Tompkins-Paige Algorithm, as published in Robert Sedgewick\'s 1977 paper "Permutation Generation Methods" (Algorithm 5 in that paper on page 150). This is probably the oldest published permutation algorithm implemented on a computer.',
    references: [
      [
        'C Tompkins "Machine attacks on problems whose variables are permutations" (1956)',
        '1956_tompkins_computer-attacks-on-problems.pdf'
      ],
      [
        'Robert Sedgewick "Permutation Generation Methods" (1977)',
        '1977_sedgewick_permutation-generation-methods.pdf'
      ]
    ]
  },
  {
    algorithm: lehmer,
    code: `
    We pass on to what may be called the Constant Difference Method. Given a permutation like
    
    2 3 1 5 4 0 7 6 8

    one can obtain immediately another one by increasing every mark by unity, replacing 9 by 0 rather than by 10; thus
    
    3 4 2 6 5 1 8 0 7 9
    
     In fact, we get in this way 10 permutations all with the same set o differences modulo 10 between consecutive marks, namely
    
     1 8 4 9 6 7 2 5 2
    
     One may take as representative of these 10 permutation whose first element
     is zero, namely
    
     0 1 9 3 2 8 5 7 4 6.
    
     Similarly the permutation
    
     1 0 3 2 8 5 7 4 6
    
     in which we have taken the marks modulo 9, is one of 9 represented by
    
     0 8 2 1 7 4 6 3 5.
    
     This continues on down to the case of only two marks 0 1. This suggests the following method exemplified by the case of n = 5. We begin with the permutation 0 1 2 3 4. Adding 1 1 1 1 1 modulo 5 five times to return to 0 1 2 3 4. We now subtract 1 1 1 1 and then add it back again, this time modulo 4, obtaining 0 1 2 3 0. Once more we add 1 1 1 1, this time modulo 5, obtaining 0 2 3 4 1. This is our next permutation and there are four others it represents. Continuing we come to 0 4 1 2 3 which, after giving 1 0 2 3 4, 2 1 3 4 0, 3 2 4 0 1, 4 3 0 1 2, 0 4 1 2 3 gives rise in turn to
    
     0 3 0 1 2, 0 0 1 2 3, 0 0 0 1 2, 0 0 1 2 0, 0 0 2 3 1
    
     and finally 0 1 3 4 2, our next permutation. The process finally returns to 0 1 2 3 4.
    
     This process has been coded for the SWAC and for the 701. It is about as fast as the Walker method. If permutations with specified properties of the differences between consecutive marks are required the process is very much faster than any previous one. An example of such a property is the requirement of the differences themselves forming a permutation as in cable splicing and other management problems. The method lends itself to fractional precision representation. For n = 8, for example, one permutation can be made from its predecessor in 128 microseconds on the SWAC."`,
    year: 1960,
    arguments: 1,
    name: 'D. H. Lehmer Constant Difference Method',
    info:
      'This is a permutation algorithm referred to by D.H. Lehmer as the Constant Difference Method.  As described in his 1958 (published in 1960) paper "Teaching Combinatorial Tricks To A Computer".',
    references: [
      [
        'Lehmer, D.H. "Teaching combinatorial tricks to a computer" (June 1960)',
        '1960_lehmer_teaching-combinatorial-tricks.pdf'
      ]
    ]
  },
  {
    algorithm: hall,
    code: `
    We turn now to a second way of making a permutation correspond to its
    factorial digits. This method was suggested by Marshall Hall and may be
    called the Method of Derangements. In the previous method the objects
    being permuted can be any computer words. In the Hall method the
    objects must be the numbers 0(1)_n_ — 1. In any such permutation we may,
    for each mark _k_ > 0, ask how many of the _k_ marks less than k actually
     follow k. Denoting this number by Sx we see at once that
    
     _S_<sub>_n_-1</sub>, _S_<sub>_n_-2</sub>, ... _S_<sub>2</sub>, _S_<sub>1</sub>
    
     is a set of factorial digits of a number which corresponds to the given
     permutation and which, conversely, characterizes this permutation. We
     have for example the following correspondencies when n = 7.
    
     | _S_<sub>6</sub> | _S_<sub>5</sub> | _S_<sub>4</sub> | _S_<sub>3</sub> | _S_<sub>2</sub> | _S_<sub>1</sub> |     |     |     |     |     |     |     |     |
     | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --- | --- | --- | --- | --- | --- | --- | --- |
     | 0               | 0               | 0               | 0               | 0               | 0               |     | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
     | 3               | 1               | 4               | 1               | 2               | 1               |     | 4   | 2   | 1   | 6   | 3   | 5   | 0   |
     | 1               | 2               | 2               | 3               | 1               | 1               |     | 3   | 1   | 4   | 5   | 2   | 6   | 0   |
     | 6               | 5               | 4               | 3               | 2               | 1               |     | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
    
     The coding of this method is fairly straightforward. The resulting routine
     is a good deal slower than the Tompkins-Paige method. The parities of
     successive permutations strictly alternate. The method is well suited to
     requirement (c) [in the paper].`,
    year: 1960,
    arguments: 0,
    name: 'Hall',
    info:
      'This is a permutation algorithm referred to by D.H. Lehmer as the Constant Difference Method.  As described in his 1958 (published in 1960) paper "Teaching Combinatorial Tricks To A Computer".',
    references: [
      [
        'Lehmer, D.H. "Teaching combinatorial tricks to a computer" (June 1960)',
        '1960_lehmer_teaching-combinatorial-tricks.pdf'
      ]
    ]
  },
  {
    algorithm: gysinSommerville,
    code: ``,
    year: 1960,
    arguments: 3,
    gysinVersion: 1,
    name: 'Gysin-Sommerville #1',
    info:
      'This is one of my attempts to implement possible algorithms that could be used to generate early (pre-1965) Gysin-Sommerville permutation poems".',
    references: [['', '']]
  },
  {
    algorithm: gysinSommerville,
    code: ``,
    year: 1960,
    arguments: 3,
    gysinVersion: 2,
    name: 'Gysin-Sommerville #2',
    info:
      'This is one of my attempts to implement possible algorithms that could be used to generate early (pre-1965) Gysin-Sommerville permutation poems".',
    references: [['', '']]
  },
  {
    algorithm: gysinSommerville,
    code: ``,
    year: 1960,
    arguments: 3,
    gysinVersion: 3,
    name: 'Gysin-Sommerville #3',
    info:
      'This is one of my attempts to implement possible algorithms that could be used to generate early (pre-1965) Gysin-Sommerville permutation poems".',
    references: [['', '']]
  },
  {
    algorithm: gysinSommerville,
    code: ``,
    year: 1960,
    arguments: 3,
    gysinVersion: 4,
    name: 'Gysin-Sommerville #4',
    info:
      'This is one of my attempts to implement possible algorithms that could be used to generate early (pre-1965) Gysin-Sommerville permutation poems".',
    references: [['', '']]
  },
  {
    algorithm: coveyouSullivan,
    code: `<pre>
    <code>
    <b>procedure</b> PERMUTATION (I, P, N);
        <b>value</b> I, N; <b>integer</b> N; <b>integer array</b> P; <b>boolean</b> I;
        <b>comment</b> This <b>procedure</b> produces all permutations of the integers from 0 through N.  
          Upon entry with I = <b>false</b> the <b>procedure</b> initializes itself producing no permutation.  
          Upon each successive entry into the <b>procedure</b> with I = <b>true</b> 
          a new permutation is stored in P[0] through P[N].  
          When the process has been exhausted a sentinel is set:
          P[0]: -1,
          N &ge; 0;
        <b>begin</b>
          <b>integer</b> i; <b>own integer array</b> x[0:N];
          <b>if</b> ¬ I <b>then</b>
          <b>begin for</b> i := 0 <b>step</b> 1 <b>until</b> N-1 <b>do</b> x[i] := 0; x[N] := -1;
            <b>go to</b> E <b>end</b>;
          <b>for</b> i := N <b>step</b> -1 <b>until</b> 0 <b>do begin if</b> x[i]&ne;i <b>then go to</b> A;     
            i := 0 <b>end</b>;
        P[0] := -1; <b>go to</b> E;
    A:  x[i] := x[i]+1; P[0] := 0;
        <b>for</b> i:= 1 <b>step</b> 1 <b>until</b> N <b>do</b>
          <b>begin</b> P[i] := P[i-x[i]]; P[i-x[i]] := i <b>end</b>
    E:  <b>end</b> PERMUTATION
    </code>
    </pre>`,
    year: 1960,
    arguments: 0,
    name: 'Coveyou-Sullivan',
    info:
      'This algorithm, named `PERMUTATION`, was originally published by R. R. Coveyou and J. G. Sullivan in the November 1961 issue of _Communications of the ACM_ as algorithm ACM71.',
    references: [
      [
        'R. R. Coveyou and J. G. Sullivan. "Algorithm 71: permutation".',
        '1961_coveyou-sullivan_ACM-71_permutation.pdf'
      ]
    ]
  },
  {
    algorithm: wells,
    code: `<pre>
    <code>
    <b>procedure</b> <i>permutations</i>(<i>N</i>)
      <b>begin</b> <i>c</i>:=1;
        <b>loop</b>:
          <b>if</b> <i>N</i>>2 <b>then</b> <i>permutations</i>(<i>N</i>-1)
          <b>endif</b>;
        <b>while</b> <i>c</i><</i>N</i>;
          P[B[<i>N</i>,<i>c</i>]]:=:P[<i>N</i>];
          <i>c</i>:=<i>c</i>+1
        <b>repeat</b>
      <b>end</b>;
    </code>
    in which P[B[N,c]]:=:P[N]; is:
    <code>
    <b>if</b> (N <i>even</i>) and (<i>c</i>>2)
      <b>then</b> P[<i>N</i>]:=:P[<i>N</i>-<i>c</i>]
      <b>else</b> P[<i>N</i>]:=:P[<i>N</i>-1] <b>endif</b>
    </code>
    </pre>`,
    year: 1960,
    name: 'Wells Permutations by Transposition Algorithm',
    arguments: 1,
    info:
      'This algorithm, by M. B. Wells, was originally described in the 15th issue of the journal _Mathematics of Computation_ in the article "Generation of permutations by transposition". This implementation is based Boothroyd\'s 1965 improvement, and taken from Sedgewick\'s paper:',
    references: [
      [
        'M. B. Wells "Generation of permutations by transposition" (1961)',
        '1961_wells_generation-of-permutations-by-transposition.pdf'
      ]
    ]
  },
  {
    algorithm: peckSchrack,
    code: `<pre>
    <code>
      <b>procedure</b> PERMUTE (x,n);
      <b>array</b> x; <b>integer</b> n;
      <b>comment</b> Each call of PERMUTE executes a permutation of the first n components of x.  
        It assumes a nonlocal Boolean variable 'first', 
        which when true causes the procedure to initialise the signature vector p.  
          Thereafter 'first' remains false until after n! calls;
      <b>begin own integer array</b> p[2:n]; <b>integer</b> i k;
        <b>if</b> first <b>then</b>
        <b>begin for</b> i := 2 <b>step</b> 1 <b>until</b> n <b>do</b>
                  p[i] := i; first := <b>false</b>
        <b>end</b> initialise;
        <b>for</b> k := 2 <b>step</b> 1 <b>until</b> n <b>do</b>
          <b>begin integer</b> km;  <b>real</b> t;
            t := x[1]; km := k - 1;
            <b>for</b> i := 1 <b>step</b> 1 <b>until</b> km <b>do</b>
              x[i] := x[i+1];
            x[k] := t; p[k] := p[k] - 1;
            <b>if</b> p[k] &#8800; 0 <b>then go to</b> EXIT;
            p[k] := k
          <b>end</b> k;
        first := <b>true</b>;
      EXIT: <b>end</b> PERMUTE
    </code>
    </pre>`,
    year: 1962,
    name: 'Peck-Schrack',
    arguments: 0,
    info:
      'This algorithm was implemented in `ALGOL` by Peck and Schrack in 1962.',
    references: [
      [
        'J. E. L. Peck and G. F. Schrack "Algorithm 86: Permute" (1962)',
        '1962_peck-schrack_ACM-86-permute.pdf'
      ]
    ]
  },
  {
    algorithm: schrackShimrat,
    code: `<pre>
    <code>
    <b>procedure</b> PERMULEX(n,p);
    <b>integer</b> n; <b>integer array</b> p;
    <b>comment</b> Successive calls of the procedure will generate all
    permutations p of 1,2,3,---,n in lexicographical order. Before the
    first call, the non-local Boolean variable ‘flag’ must be set to
    <b>true</b>. If after an execution of PERMULEX ‘flag’ is <b>false</b>,
    additional calls will generate further permutations—if true, all
    permutations have been obtained ;
    
    <b>begin integer array</b> q[1:n]; <b>integer</b> i, k, t; <b>Boolean</b> flag2;
    <b>if</b> flag <b>then</b>
      <b>begin for</b> i := 1 <b>step</b> 1 <b>until</b> n <b>do</b>
      p[i] := i; flag2 := <b>true</b>; flag := <b>false</b>;
      <b>go to</b> EXIT
      <b>end</b> initialize;
    <b>if</b> flag2 <b>then</b>
      <b>begin</b> t := p[n]; p[n] := p[n—1]; p[n—1] := t;
      flag2 := <b>false</b>; <b>go to</b> EXIT
      <b>end</b> bypass;
    flag2 := <b>true</b>; <b>for</b> i := n—2 <b>step</b> —1 <b>until</b> 1 <b>do</b>
      <b>if</b> p[i] < p[i+1] <b>then go to</b> A;
      flag := <b>true</b>; <b>go to</b> EXIT;
    A:  <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b> q[k] := 0;
        <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b> q[p[k]] := p[k];
        <b>for</b> k := p[i] + 1 <b>step</b> 1 <b>until</b> n <b>do</b>
        <b>if</b> q[k] &ne; 0 <b>then go to</b> B;
    B:  p[i] := k; q[k] := 0;
        <b>for</b> k := 1 <b>step</b> 1 <b>until</b> n <b>do</b>
        if q[k] &ne; 0 <b>then begin</b> i := i + 1; p[i] := q[k] <b>end</b>
        <b>else if</b> i &ge; n <b>then go to</b> EXIT;
    EXIT:
    <b>end</b> PERMULEX
    </code>
    </pre>`,
    year: 1962,
    name: 'Reverse Lexicographic Order',
    arguments: 1,
    info:
      'Generates reverse lexicographic order as described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.',
    references: [
      [
        'G. F. Schrack and M. Shimrat. "Algorithm 102: Permutation in lexicographical order" (June 1962)',
        '1962_schrack-shimrat_ACM-102_perutation-in-lexicographic-order.pdf'
      ]
    ]
  },
  {
    algorithm: steinhausJohnsonTrotter,
    code: `<pre>
    <code>
    <i>i</i>:=1;
    <b>loop while</b> <i>i</i>&le;<i>N</i>; <i>i</i>:=<i>i</i>+1; <i>c[i]</i>:=1;
                    <i>d[i]</i>:= <b>true</b>; <b>repeat</b>;
    <i>c[1]</i>:=0;
    <i>process</i>;
    <b>loop</b>:
      <i>i</i>:=<i>N</i>; <i>x</i>:=0;
      <b>loop while</b> <i>c[i]</i>=<i>i</i>;
        <b>if not</b> <i>d[i]</i> <b>then</b> <i>x</i>:=<i>x</i>+1 <b>endif</b>;
        <i>d[i]</i>:=<b>not</b> <i>d[i]</i>; <i>c[i]</i>:=1; <i>i</i>= <i>i</i>-1;
      <b>repeat</b>;
    <b>while</b> <i>i</i>>1;
      <b>if</b> <i>d[i]</i> <b>then</b> <i>k</i>:=<i>c[i]</i>+<i>x</i>
            <b>else</b> <i>k</i>:=<i>i</i>-<i>c[i]</i>+<i>x</i> <b>endif</b>;
      P[<i>k</i>]:=:P[<i>k</i>+1];
      <i>process</i>;
      <i>c[i]</i>:=:<i>c[i]</i>+1;
    <b>repeat</b>;
    </code>
    </pre>`,
    year: 1962,
    name: 'Steinhaus-Johnson-Trotter',
    arguments: 4,
    info: `These are two separate implementations of the Steinhaus-Johnson-Trotter algorithm, with (ticked 'Directions' box) and without Even's Speedup (unticked 'Directions' box).`,
    references: [
      [
        `Trotter, H. F. "Algorithm 115: Perm" (May 1962)`,
        '1962_trotter_ACM-115_perm.pdf'
      ],
      [
        `S. M. Johnson "Generation of permutations by adjacent transposition" (1963)`,
        '1963_johnson_generation-of-permutations-by-adjacent-transposition.pdf'
      ]
    ]
  },
  {
    algorithm: heap,
    code: `<pre>
    <code>
    <i>i</i>:=<i>N</i>; <b>loop</b>: <i>c</i>[<i>i</i>]:=1 <b>while</b> <i>i</i>>2: <i>i</i>:=<i>i</i>-1 <b>repeat</b>;
    <i>process</i>;
    <b>loop</b>
        <b>if</b> <i>c</i>[<i>i</i>]<<i>i</i>
        <b>then if</b> <i>i odd</i> <b>then</b> <i>k</i> := 1 <b>else</b> <i>k</i>:=<i>c</i>[<i>i</i>] <b>endif</b>;
        P[<i>i</i>]:=:P[<i>k</i>];
        <i>c</i>[<i>i</i>]:=<i>c</i>[<i>i</i>] + 1; <i>i</i>:=2;
        <i>process</i>,
      <b>else</b> <i>c</i>[<i>i</i>]:=1; <i>i</i>:=+1
      <b>endif</b>;
    <b>while</b> <i>i</i>&le;<i>N</i> <b>repeat</b>;
    </code>
    </pre>`,
    year: 1963,
    name: 'Heap Permutations by Interchanges Algorithm',
    arguments: 1,
    info:
      'This is an implementation of B.R. Heap\'s 1963 permutation algorithm as described in Robert Sedgewick\'s 1977 "Permutation Generation Methods" paper.',
    references: [
      [
        'B. R. Heap "Permutations by Interchanges" (1963)',
        '1963_heap_permutations-by-interchanges.pdf'
      ]
    ]
  },
  {
    algorithm: myrvoldRuskey,
    code: `
    "The second order, which we call remainder order, was used by Myrvold and Ruskey [15]. Informally, let ( x , y ) denote the swap of the xth and yth symbol of a string. For example, applying ( 4 , 2 ) to 456123 gives 416523. Swaps are also called transpositions. In remainder order, the ith permutation is obtained from the identity permutation by a series of _n_ − 1 transpositions. The first indices of the transpositions are _n_, _n_ − 1 , ... , 2. The second indices are remainders when _i_ is successively divided by _n_, *n*− 1 , ... , 2, plus one. For example, here are the calculations for _i_ = 92 and _n_ = 5
    
     | 92 ÷ 5 = 18 | 18 ÷ 4 = 4  | 4 ÷ 3 = 1   | 1 ÷ 2 = 0     |
     | ----------- | ----------- | ----------- | ------------- |
     | remainder 2 | remainder 2 | remainder 1 | remainder 1 . |
    
     In this calculation, each successive quotient is used in the next division, and the divisors are in turn 5, 4, 3, 2. The underlined remainders (plus one) imply that the 92nd permutation for n = 5 is obtained from 12345 by successively applying the following transpositions: ( 5 , 3 ), ( 4 , 3 ), ( 3 , 2 ), ( 2 , 2 ) . The resulting permutation is 14253... [the first object has rank 0]... Although this description is somewhat unorthodox, it directly translates into a simple unranking algorithm, which converts an integer _i_ into the object of rank _i_. In remainder order, the unranking and ranking algorithms use O(_n_) arithmetic operations on values that can be as large as _n!_ ."
    
     Stephane Durocher, Pak Ching Li, Debajyoti Mondal, Frank Ruskey, Aaron Williams "Cool-lex order and k-ary Catalan structures", _Journal of Discrete Algorithms_, Volume 16, 2012, Pages 287-307,`,
    year: 2001,
    name: 'Myrvold-Ruskey (remainder order)',
    arguments: 0,
    info:
      'The following algorithm lies much outside the original timescale I set for the project but has been included as it is a useful way of selecting individual permutations by rank and the algorithm itself is novel.',
    references: [
      [
        'Durocher, S.; Li, P. C.; Mondal, D.; Ruskey, F. & Williams, A. "Cool-lex order and k-ary Catalan structures Journal of Discrete Algorithms" (2012)',
        '2012_durocher-et-al_cool-lex-order-and-k-ary-catalan-structures.pdf'
      ]
    ]
  }
];

export default algorithmDatabase;
