/*
const movieData = [
    {title:"The Proposal", year:2009, rating:7},
    {title:"500 Days of Summer", year:2009, rating:8},
    {title:"The Menu", year:2022 , rating:7},
    {title:"Companion", year:2025 , rating:7},
    {title:"The Circle", year:2017 , rating:5}
    ];

function displayOut(){
    const output = document.getElementById("output");
    for (i=0; i<movieData.length; i++){
        const newP = document.createElement("p");
        newP.textContent = `${movieData[i].title} (${movieData[i].year}) has a rating of ${movieData[i].rating}.`;
        output.appendChild(newP);
    }
}

displayOut()
*/

const FORM =document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if(size === "large") {
    houseSizePoints = 10;
  } else if(size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
    return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
   return houseHoldPoints;
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    houseHoldMembers: houseHoldMembers, 
    houseSize: houseSize, 
    houseHoldPTS: houseHoldPTS, 
    houseSizePts: houseSizePts, 
    total: total,
    firstName: firstName,
    lastName: lastName,
  });
}

function displayOutput (){
    
    for (let i =0; i<cfpData.length; i++) {
     
      const newP = document.createElement("p");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint total for ${cfpData[i].firstName} ${cfpData[i].lastName} is ${cfpData[i].total}`
      const newH3 = document.createElement("h3");
      newH3.textContent = 'based on Number in Household and Size of Home'
      newP.textContent = `This number is based on the number of members in the home of ${cfpData[i].houseHoldMembers} (score: ${cfpData[i].houseHoldPTS}) `;
      newP.textContent += `and a ${cfpData[i].houseSize} size of home (score: ${cfpData[i].houseSizePts})`
      OUTPUT.appendChild(newH2);
      OUTPUT.appendChild(newH3);
      OUTPUT.appendChild(newP);
    }
  }
  
FORM.addEventListener("submit", function(e){
    e.preventDefault();
    //console.log('I am inside the function');
    //console.log(e);
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const NIHTemp = FORM.householdsize.value;
    const NIH = parseInt(NIHTemp, 10);  //Had to convert the string to a number using a base10 number system
    console.log(NIH);  //used to check
    const HS = FORM.housesize.value;
    console.log(HS);   //used to check
    start(NIH,HS,firstName,lastName);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})
