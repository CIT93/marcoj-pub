const CfpData = [];

function determineHouseSizePts(size) {
   let houseSizePts = 0;
 
 if (size === "large") {
      houseSizePts = 10;
    } else if (size === "medium") {
      houseSizePts = 7;
    } else if (size === "small") {
      houseSizePts = 4;
    } else if (size === "apt") {
      houseSizePts = 2;
    } else {
      console.log('No points were added');
    }
    return houseSizePts
 }

function determineHousholdPts (numberInHousehold) {
   let householdPoints = 0;
   if (numberInHousehold === 1) {
      householdPoints = 14;
    } else if (numberInHousehold === 2) {
      householdPoints = 12;
    } else if (numberInHousehold === 3) {
      householdPoints = 10;
    } else if (numberInHousehold === 4) {
      householdPoints = 8;
    } else if (numberInHousehold === 5) {
      householdPoints = 6;
    } else if (numberInHousehold === 6) {
      householdPoints = 4;
    } else if (numberInHousehold > 6) {
      householdPoints = 2;
    } else {
      console.log('No points were added');
    }
    return householdPoints;
}


function start (houseHoldMembers, houseSize){
   const householdPTS = determineHousholdPts(houseHoldMembers);
   const houseSizePTS = determineHouseSizePts(houseSize);
   const total =houseSizePTS + householdPTS;
   CfpData.push([houseHoldMembers, houseSize, householdPTS, houseSizePTS, total])
}

function displayOutput(){
    
}

start(7, "large");
start(6, "large");
start(5, "large");
start(4, "large");
start(3, "large");
start(2, "large");
start(1, "large");
start(0, "large");

start(7, "medium");
start(6, "medium");
start(5, "medium");
start(4, "medium");
start(3, "medium");
start(2, "medium");
start(1, "medium");
start(0, "medium");

start(7, "small");
start(6, "small");
start(5, "small");
start(4, "small");
start(3, "small");
start(2, "small");
start(1, "small");
start(0, "small");

start(7, "apt");
start(6, "apt");
start(5, "apt");
start(4, "apt");
start(3, "apt");
start(2, "apt");
start(1, "apt");
start(0, "apt");

displayOutput()