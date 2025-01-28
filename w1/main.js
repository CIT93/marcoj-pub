console.log("Hello from inside the main.js file");

const myVar = 42;

const myVarType = typeof(myVar); // is returned as a string

console.log(myVarType);
console.log(`myVarType ${myVarType}`);

if(myVarType === "number") {
    console.log(`this line will run`)
} else {
    console.log(`this line will not run`)
}

function runNow() {
    console.log(`inside the function`);
}

runNow()