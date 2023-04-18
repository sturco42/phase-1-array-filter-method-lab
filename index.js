function findMatching(driverNames, string) {
    return driverNames.filter(driverName => driverName.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driverNames, string) {
    return driverNames.filter(potentialMatch => potentialMatch.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName(driverNames, string) {
    return driverNames.filter(property => property.name === string)
}

// const string => string.charAt(0)
// driverNames.filter.startsWith(string)
// return fuzzyMatch

// function findMatching(source, sought) {
//     return source.filter(
//       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//     );
//   }
  
//   function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }
  
//   function matchName(source, soughtName) {
//     return source.filter((record) => record.name === soughtName);
//   }