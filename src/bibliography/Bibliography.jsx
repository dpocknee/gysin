import React from 'react';
import './Bibliography.css';

const papersFolder = '../../public/papers/';
const booksFolder = '../../books/';

const Bibliography = () => (
  <article>
    <section>
      <h2>Brion Gysin Bibliography</h2>
      <dl>
        <div className="ref">
          <dd>Gysin, B., Corso, G., Burroughs, W. S. and Beiles, S.</dd>
          <dd>
            <i>Minutes To Go</i>
          </dd>
          <dd>
            Beach Books, <b>1960</b>
          </dd>
          <dd>
            <a
              href={`${booksFolder}gysin-burroughs-corso-beils_minutes-to-go_1960.pdf`}
            >
              book
            </a>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B. and Burroughs, W. S.</dd>
          <dd>
            <i>The Exterminator</i>
          </dd>
          <dd>
            Auerbach Press, <b>1960</b>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B., Burroughs, W. S. and Sommerville, I.</dd>
          <dd>
            <i>Brion Gysin Let The Mice In</i>
          </dd>
          <dd>
            Herman, J. <i>(ed.)</i>
          </dd>
          <dd>
            Something Else Press, <b>1973</b>
          </dd>
          <dd>
            <a
              href={`${booksFolder}gysin-burroughs-sommerville_brion-gysin-let-the-mice-in_1973 .pdf`}
            >
              book
            </a>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B. and Burroughs, W. S.</dd>
          <dd>
            <i>The Third Mind</i>
          </dd>
          <dd>
            Viking Press, <b>1978</b>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B.</dd>
          <dd>
            <i>Back In No Time: The Brion Gysin Reader</i>
          </dd>
          <dd>
            Weiss, J. <i>(ed.)</i>
          </dd>
          <dd>
            Wesleyan University Press, <b>2001</b>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B.</dd>
          <dd>
            <i>Brion Gysin: Tuning in to the Multimedia Age</i>
          </dd>
          <dd>
            Thames &amp; Hudson Ltd., <b>2003</b>
          </dd>
        </div>

        <div className="ref">
          <dd>Geiger, J.</dd>
          <dd>
            <i>
              Nothing Is True Everything Is Permitted: The Life of Brion Gysin
            </i>
          </dd>
          <dd>
            Disinformation, <b>2005</b>
          </dd>
        </div>
        <div className="ref">
          <dd>Gysin, B.</dd>
          <dd>
            <i>I AM THAT I AM</i>
          </dd>
          <dd>
            Williams, E. <i>(ed.)</i>
          </dd>
          <dd>An Anthology of Concrete Poetry</dd>
          <dd>
            Primary Information, <b>2013</b>
          </dd>
        </div>
      </dl>
    </section>
    <section>
      <h2>Permutation Bibliography</h2>
      <dl>
        <div className="ref">
          <dd>Tompkins, C.</dd>
          <dd>
            <i>Machine attacks on problems whose variables are permutations</i>
          </dd>
          <dd>
            Proceedings of the Symposium in Applied Mathematics, Numerical
            Analysis
          </dd>
          <dd>
            McGraw-Hill, <b>1956</b>, Vol. 6, pp. 195-211
          </dd>
        </div>

        <div className="ref">
          <dd>Lehmer, D.</dd>
          <dd>
            <i>Teaching combinatorial tricks to a computer</i>
          </dd>
          <dd>
            Proceedings of Symposium Applied Mathematics: Combinatorial Analysis
          </dd>
          <dd>
            American Mathematical Society, <b>1960</b>, Vol. 10, pp. 179-193
          </dd>
        </div>

        <div className="ref">
          <dd>Papworth, D. G.</dd>
          <dd>
            <i>Computers and Change-Ringing</i>
          </dd>
          <dd>
            The Computer Journal, <b>1960</b>, Vol. 3(1), pp. 47-50
          </dd>
        </div>

        <div className="ref">
          <dd>Walker, R. J.</dd>
          <dd>
            <i>An Enumerative Techniqe for a Class of Combinatorial Problems</i>
          </dd>
          <dd>
            Proceedings of Symposium Applied Mathematics: Combinatorial Analysis
          </dd>
          <dd>
            American Mathematical Society, <b>1960</b>, Vol. 10, pp. 91-94
          </dd>
        </div>

        <div className="ref">
          <dd>Coveyou, R. R. and Sullivan, J. G.</dd>
          <dd>
            <i>Algorithm 71: permutation</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1961</b>, Vol. 4(11), pp. 497
          </dd>
        </div>

        <div className="ref">
          <dd>Wells, M. B.</dd>
          <dd>
            <i>Generation of permutations by transposition</i>
          </dd>
          <dd>
            Mathematics of Computation, <b>1961</b>, Vol. 15, pp. 192-195
          </dd>
        </div>

        <div className="ref">
          <dd>Schrack, G. and Shimrat, M.</dd>
          <dd>
            <i>Certification of Algorithm 87: Permutation generator</i>
          </dd>
          <dd>
            Commun. ACM, <b>1962</b>, Vol. 5, pp. 543
          </dd>
        </div>

        <div className="ref">
          <dd>Eaves, B. C.</dd>
          <dd>
            <i>Algorithm 130: Permute</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(11), pp. 551
          </dd>
        </div>

        <div className="ref">
          <dd>Howell, J. R.</dd>
          <dd>
            <i>Generation of permutations by addition</i>
          </dd>
          <dd>
            Mathematics of Computation, <b>1962</b>, Vol. 5(16), pp. 243-244
          </dd>
        </div>

        <div className="ref">
          <dd>Howell, J. R.</dd>
          <dd>
            <i>Algorithm 87: Permutation generator</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(4), pp. 209
          </dd>
        </div>

        <div className="ref">
          <dd>Kurtzberg, J.</dd>
          <dd>
            <i>Algorithm 94: Combination</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(6), pp. 344
          </dd>
        </div>

        <div className="ref">
          <dd>Lotto, G.</dd>
          <dd>
            <i>
              On the Generation of All Possible Stepwise Combinations (in
              Technical Notes and Short Papers)
            </i>
          </dd>
          <dd>
            Mathematics of Computation, <b>1962</b>, Vol. 16(78), pp. 241-243
          </dd>
        </div>

        <div className="ref">
          <dd>Peck, J. E. L. and Schrack, G. F.</dd>
          <dd>
            <i>Algorithm 86: Permute</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(4), pp. 208-209
          </dd>
        </div>

        <div className="ref">
          <dd>Schrack, G. F. and Shimrat, M.</dd>
          <dd>
            <i>Algorithm 102: Permutation in lexicographical order</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(6), pp. 346
          </dd>
        </div>

        <div className="ref">
          <dd>Shen, M.-K.</dd>
          <dd>
            <i>On the Generation of Permutations and Combinations</i>
          </dd>
          <dd>
            BIT, <b>1962</b>, Vol. 2(4), pp. 228-231
          </dd>
        </div>

        <div className="ref">
          <dd>Trotter, H. F.</dd>
          <dd>
            <i>Algorithm 115: Perm</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1962</b>, Vol. 5(8), pp. 434-435
          </dd>
        </div>

        <div className="ref">
          <dd>Heap, B. R.</dd>
          <dd>
            <i>Permutations by Interchanges</i>
          </dd>
          <dd>
            Computer Journal, <b>1963</b>, Vol. 6(3), pp. 293-294
          </dd>
        </div>

        <div className="ref">
          <dd>Johnson, S. M.</dd>
          <dd>
            <i>Generation of permutations by adjacent transposition</i>
          </dd>
          <dd>
            Mathematics of Computation, <b>1963</b>, Vol. 17(83), pp. 282-285
          </dd>
        </div>

        <div className="ref">
          <dd>Shen, M.-K.</dd>
          <dd>
            <i>
              Algorithm 202: Generation of Permutations in Lexicographical Order
            </i>
          </dd>
          <dd>
            Commun. ACM, ACM, <b>1963</b>, Vol. 6(9), pp. 517-
          </dd>
        </div>

        <div className="ref">
          <dd>Steinhaus, H.</dd>
          <dd>
            <i>One Hundred Problems in Elementary Mathematics</i>
          </dd>
          <dd>
            Pergamon Press, <b>1963</b>
          </dd>
        </div>

        <div className="ref">
          <dd>Durstenfeld, R.</dd>
          <dd>
            <i>Algorithm 235: random permutation</i>
          </dd>
          <dd>
            Communications of the ACM, <b>1964</b>, Vol. 7(7), pp. 420
          </dd>
        </div>

        <div className="ref">
          <dd>Hall, M. and Knuth, D. E.</dd>
          <dd>
            <i>Combinatorial Analysis and Computers</i>
          </dd>
          <dd>
            The American Mathematical Monthly, Mathematical Association of
            America, <b>1965</b>, Vol. 72(2), pp. 21-28
          </dd>
        </div>

        <div className="ref">
          <dd>Ord-Smith, R. J.</dd>
          <dd>
            <i>Generation of permutation sequences: Part 1</i>
          </dd>
          <dd>
            The Computer Journal, <b>1970</b>, Vol. 13(2), pp. 152-155
          </dd>
        </div>

        <div className="ref">
          <dd>Treble, D. P.</dd>
          <dd>
            <i>Computers and Composition in Change Ringing</i>
          </dd>
          <dd>
            The Computer Journal, <b>1970</b>, Vol. 13(4), pp. 350-351
          </dd>
        </div>

        <div className="ref">
          <dd>Ord-Smith, R. J.</dd>
          <dd>
            <i>Generation of permutation sequences: Part 2</i>
          </dd>
          <dd>
            The Computer Journal, <b>1971</b>, Vol. 14(2), pp. 136-139
          </dd>
        </div>

        <div className="ref">
          <dd>Fike, C. T.</dd>
          <dd>
            <i>A permutation generation method</i>
          </dd>
          <dd>
            The Computer Journal, <b>1975</b>, Vol. 18(1), pp. 21-22
          </dd>
        </div>

        <div className="ref">
          <dd>Rohl, J. S.</dd>
          <dd>
            <i>
              Programming Improvements to Fike's Algorithm for Generating
              Permutations
            </i>
          </dd>
          <dd>
            The Computer Journal, <b>1976</b>, Vol. 19(2), pp. 156-159
          </dd>
        </div>

        <div className="ref">
          <dd>Sedgewick, R.</dd>
          <dd>
            <i>Permutation Generation Methods</i>
          </dd>
          <dd>
            ACM Comput. Surv., ACM, <b>1977</b>, Vol. 9(2), pp. 137-164
          </dd>
        </div>

        <div className="ref">
          <dd>Woodall, A. D.</dd>
          <dd>
            <i>Generation of permutation sequences</i>
          </dd>
          <dd>
            The Computer Journal, <b>1977</b>, Vol. 20(4), pp. 346-349
          </dd>
        </div>

        <div className="ref">
          <dd>Roy, M. K.</dd>
          <dd>
            <i>Evaluation of permutation algorithms</i>
          </dd>
          <dd>
            The Computer Journal, <b>1978</b>, Vol. 21(4), pp. 296-301
          </dd>
        </div>

        <div className="ref">
          <dd>Topor, R. W.</dd>
          <dd>
            <i>Functional Programs for Generating Permutations</i>
          </dd>
          <dd>
            The Computer Journal, <b>1982</b>, Vol. 25(2), pp. 257-263
          </dd>
        </div>

        <div className="ref">
          <dd>Spoletini, E.</dd>
          <dd>
            <i>Generation of Permutations Following Lehmer and Howell</i>
          </dd>
          <dd>
            Mathematics of Computation, <b>1984</b>, Vol. 43(168), pp. 565-572
          </dd>
        </div>

        <div className="ref">
          <dd>Ceruzzi, P. E.</dd>
          <dd>
            <i>Computing: A Concise History</i>
          </dd>
          <dd>
            MIT Press, <b>2012</b>
          </dd>
        </div>

        <div className="ref">
          <dd>
            Durocher, S., Li, P. C., Mondal, D., Ruskey, F. and Williams, A.
          </dd>
          <dd>
            <i>Cool-lex order and k-ary Catalan structures</i>
          </dd>
          <dd>
            Journal of Discrete Algorithms, <b>2012</b>, Vol. 16, pp. 287 - 307
          </dd>
        </div>

        <div className="ref">
          <dd>Kahn, D.</dd>
          <dd>
            <i>James Tenney at Bell Labs</i>
          </dd>
          <dd>
            Higgins, H. B. &amp; Kahn, D. <i>(ed.)</i>
          </dd>
          <dd>Mainframe Experimentalism</dd>
          <dd>
            University of California Press, <b>2012</b>, pp. 131-146
          </dd>
        </div>

        <div className="ref">
          <dd>Berry, K. J., Johnston, J. E. and Mielke Jr, P. W.</dd>
          <dd>
            <i>
              A Chronicle of Permutation Statistical Methods: 1920–2000, and
              Beyond
            </i>
          </dd>
          <dd>
            Springer, <b>2014</b>
          </dd>
        </div>

        <div className="ref">
          <dd>Ceruzzi, P. E.</dd>
          <dd>
            <i>A History of Modern Computing</i>
          </dd>
          <dd>
            MIT Press, <b>2014</b>
          </dd>
        </div>

        <div className="ref">
          <dd>Butterfield, A. and Ngondi, G. E.</dd>
          <dd>
            <i>Fortran</i>
          </dd>
          <dd>A Dictionary of Computer Science</dd>
          <dd>
            Oxford University Press, <b>2016</b>
          </dd>
        </div>

        <div className="ref">
          <dd>
            <i>Honeywell Series 200 Computers</i>
          </dd>
          <dd />
        </div>
      </dl>
    </section>
  </article>
);

export default Bibliography;
