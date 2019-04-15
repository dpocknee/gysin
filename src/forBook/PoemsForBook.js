const { poemDatabase } = require('../database/poemDatabaseForBook');

poemDatabase.forEach(media => {
  const authorArray = media.authors.map(author => author).join(', ');
  console.log(`\\textbf{${media.name}} (${media.year}) [${media.medium}]\\\\`);
  console.log(`- ${authorArray}\\\\`);
  console.log('\\begin{tabular}{p{0.2cm}p{6cm}p{8cm}}');
  const poemsOutput = media.poems.map((poem, poemIndex) => {
    return poem.version !== media.name
      ? ` & ${poem.name}  & \\textit{${poem.version}} version \\\\`
      : ` & ${poem.name}  &  \\\\`;
  });
  poemsOutput.forEach(poemInfo => console.log(poemInfo));
  console.log('\\end{tabular}');
  console.log('');
});
