//global scope

// const numberInHousehold = 4
let carbonFootprintPoints = 0

function determineHousholdPts (numberInHousehold) {
console.log(`inside the function.`)
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
     console.log(`You currently have ${carbonFootprintPoints} carbon footprint points.`)
} //Back to Global scope

console.log(`You have ${carbonFootprintPoints} carbon footprint points to start with.`)

determineHousholdPts(2)  
determineHousholdPts(8)