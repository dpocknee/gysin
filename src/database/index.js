const { _ } = require('lodash');

//1960
const minutesToGo = require('./gysinDatabase/1960MinutesToGo.json');
const letTheMiceIn = require('./gysinDatabase/1973LetTheMiceIn.json');
const theThirdMind = require('./gysinDatabase/1978TheThirdMind.json');

function filterFromDatabase(database, workToSearch) {
  const matchedWorks = database.contents.filter(contents => {
    return contents.series === workToSearchFor;
  });
  const contentsOfBook = [];
  if (matchedWorks.length > 0) {
    matchedWorks.forEach(work => {
      const workKeys = Object.keys(work);
      const countentsAndDetails = workKeys.reduce(
        (outputObject, parameter) => {
          outputObject[parameter] = work[parameter];
          return outputObject;
        },
        {
          title: database.title,
          author: database.author,
          date: database.date
        }
      );
      // console.log(countentsAndDetails);
      contentsOfBook.push(countentsAndDetails);
    });
  }
  return contentsOfBook;
}

const workToSearchFor = 'I AM THAT I AM';
const publications = [minutesToGo, letTheMiceIn, theThirdMind];

const allMatches = [];
publications.forEach(publication => {
  const filteredMatches = filterFromDatabase(publication, workToSearchFor);
  if (filteredMatches.length > 0) allMatches.push(filteredMatches);
});

console.log(_.flatten(allMatches));
