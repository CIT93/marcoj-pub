console.log("startSuccessful");

//How to calculate your carbon footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

//Count the members in your household
const familySize = 4;

//Consider the size of your home
const houseSize = 7;

//evaluate food choices
const diet = 14;

// examine water consumption
const waterUse = 0;

//Determine household purchases in a year
const spending = 8;

//Consider waste produced
const wasteProduced = 50;

//Amount of waste recycled
const amountRecycled = 16;

//annual transportation scores
const transferScore = 10;

//add up your points
let cfpTotal = familySize + houseSize + diet + waterUse + spending + wasteProduced + amountRecycled + transferScore;

