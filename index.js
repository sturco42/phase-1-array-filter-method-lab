function findMatching(driverNames, string) {
    return driverNames.filter(driverName => driverName.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driverNames, string) {
    return driverNames.filter(potentialMatch => potentialMatch.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName(driverNames, string) {
    return driverNames.filter(property => property.name === string)
}