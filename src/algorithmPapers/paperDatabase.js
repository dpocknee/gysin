const papersDatabase = [
  {
    citation: 'wells',
    algorithms: [
      {
        name: 'Wells Permutations by Transposition Algorithm',
        algol: '',
        javascript: `const { swapper } = require('../utils/utils');

        function wellsWrapper(inputArray) {
          function wellsPermutations(n, inputArray, cb) {
            let c = 1;
            while (c <= n) {
              if (n > 2) wellsPermutations(n - 1, inputArray, cb);
              if (c >= n) break;
              if (n % 2 === 0 && c > 2) {
                inputArray = swapper(inputArray, n, n - c);
              } else {
                inputArray = swapper(inputArray, n, n - 1);
              }
              wellsArray.push(inputArray.slice(1));
              c += 1;
            }
          }
          const wellsArray = [inputArray];
          const callback = permutation => wellsArray.push(permutation);
          wellsPermutations(inputArray.length, [0].concat(inputArray), callback);
          return wellsArray;
        }`,
      },
    ],
  },
];

export default papersDatabase;

/*
\begin{itemize}
	\item \textbf{1956}
		 \begin{itemize}
		 	\item Tompkins - Tompkins-Paige Algorithm\footcite{tompkins_machine-attacks}
		 \end{itemize}
	\item \textbf{1960}
\begin{itemize}
	\item D.H. Lehmer - Constant Difference Method\footcite{lehmer_teaching-combinatorial-tricks}
\end{itemize}
\item \textbf{1961}
\begin{itemize}
	\item Wells - Wells Algorithm\footcite{wells_generation-of-permutations}
	\item Coveyou and Sullivan - PERMUTATION (Algorithm 71, November 1961)\footcite{coveyou_permutation}
\end{itemize}
\item \textbf{1962}
\begin{itemize}
	\item Peck and Schrack - PERMUTE (Algorithm 86, April 1962)\footcite{peck-shcrack_permute}
	\item Howell - PERMUTATION (Algorithm 87, April 1962)\footcite{howell_permutation-generator}
	\item Schrack and Shimrat - PERMULEX (Algorithm 102, June 1962)\footcite{schrack-shimrat_permulex}
	\item Trotter - PERM (Algorithm 115, August 1962)\footcite{trotter_perm}
	\item Eaves - PERMUTE (Algorithm 130, November 1962)\footcite{eaves_permute}
\end{itemize}
\item \textbf{1963}
\begin{itemize}
	\item Steinhaus\footcite{steinhaus_one-hundred-problems} and Johnson\footcite{johnson_generation-of-permutations} - Steinhaus-Johnson-Trotter Algorithm
	\item Shen - PERLE (Algorithm 202, September 1963)
	\item Heap - Heap Algorithm\footcite{heap_permutations-by-interchanges}
\end{itemize}
\item \textbf{1964}
\begin{itemize}
	\item Durstenfeld - SHUFFLE (Algorithm 235, July 1964)\footcite{durstenfeld_random-permutation}
\end{itemize}
\end{itemize} */
