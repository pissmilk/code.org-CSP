// Create and assign lists of states and admission years
var stateList = getColumn("US States", "State Name");
var yearList = getColumn("US States", "Admission Year");

// List of states with admission year after 1900
var since1900List = [];

// Filtering the table
var state;
var year;
for (var i = 0; i < stateList.length; i++) {
    state = stateList[i];
    year = yearList[i];
    if (year > 1900) {
        appendItem(since1900List, state);
    }
}

console.log("States added since 1900:");
console.log(since1900List);

// Create and assign list of populations
var populationList = getColumn("US States", "Population");

// List of states with population less than one million
var smallPopulationList = [];

var population;
for (var i = 0; i < stateList.length; i++) {
    state = stateList[i];
    population = populationList[i];
    // Add code here
    if (population < 1000000) {
        appendItem(smallPopulationList, state);
    }

}

console.log("List of state with fewer than one million people");
console.log(smallPopulationList);