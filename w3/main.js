
// const numberInHousehold = 4
let carbonFootprintPoints = 0

//function to take the number of people living in the household and awards cfp points based on people in household
function determineHouseholdPts (numberInHousehold) {
console.log(`***inside household function with ${numberInHousehold} in household.***`);
    switch (true) {
        case numberInHousehold === 1: 
           carbonFootprintPoints = carbonFootprintPoints + 14;
           console.log(`you gained 14 points`);
           break;
        case numberInHousehold === 2:
           carbonFootprintPoints = carbonFootprintPoints + 12;
           console.log(`you gained 12 points`);
           break;
        case numberInHousehold === 3:
           carbonFootprintPoints = carbonFootprintPoints + 10;
           console.log(`you gained 10 points`);
           break;
        case numberInHousehold === 4:
           carbonFootprintPoints = carbonFootprintPoints + 8;
           console.log(`you gained 8 points`);
           break;
        case numberInHousehold === 5:
           carbonFootprintPoints = carbonFootprintPoints + 6;
           console.log(`you gained 6 points`);
           break;
        case numberInHousehold === 6:
           carbonFootprintPoints = carbonFootprintPoints + 4;
           console.log(`you gained 4 points`);
           break;
        case numberInHousehold > 6:
           carbonFootprintPoints = carbonFootprintPoints + 2;
           console.log(`you gained 2 points`);
           break;
        default:
           console.log('No points were updated');   
     }
     console.log(`You currently have ${carbonFootprintPoints} carbon footprint points.`);
} //Back to global scope

// function that takes the declared house size and awards cfp points based on size.
// Accepts large, medium, small, apartment
function sizeOfHome (houseSize) {
    console.log(`***inside houseSize function with a ${houseSize} sized house.***`);
    switch (true) {
        case houseSize === "large":
            carbonFootprintPoints = carbonFootprintPoints + 10;
            console.log(`you live in a large sized house and gained 10 points.`);
            break;
        case houseSize === "medium":
            carbonFootprintPoints = carbonFootprintPoints + 7;
            console.log(`you live in a medium sized house and gained 7 points.`);
            break;
        case houseSize === "small":
            carbonFootprintPoints = carbonFootprintPoints + 4;
            console.log(`you live in a medium sized house and gained 4 points.`);
            break;
        case houseSize === "apartment":
            carbonFootprintPoints = carbonFootprintPoints + 2;
            console.log(`you live in an apartment and gained 2 points.`);
            break;
        default:
            console.log(`${houseSize} is an incorrect house size, no point change.`);
    }
    console.log(`You currently have ${carbonFootprintPoints} carbon footprint points.`);
}  //End of function, back to global scope


console.log(`You have ${carbonFootprintPoints} carbon footprint points to start with.`);

determineHouseholdPts(2);
determineHouseholdPts(8);

sizeOfHome("small");
sizeOfHome("large");
sizeOfHome("magnet"); //used an invalid input to test default.
