import { renderTbl } from "./render.js";
import { start } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

renderTbl(cfpData);

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const error = document.getElementById("error");
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const diet = FORM.diet.value;
    const trash = FORM.trash.value;
    const message = []
    let flag = 0
    if (firstName === "") {
        message.push("First name is required.");
        flag++
    } if (lastName === ""){
        message.push(" Last name is required. ");
        flag++
    }
    
    if (flag === 0) {
        const fpObj = new FP(parseInt(FORM.householdsize.value), FORM.housesize.value, firstName, lastName, diet, trash)
        fpObj.debug();
        cfpData.push(fpObj); //storing data to cfp to connect it back to rest of code.
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
        flag = 0
        error.innerText = ""
    }else {
        error.innerText = message
        error.style.color = "red"
    }
    
})

console.log(cfpData)

// Code along video
/*
let pizza
function orderPizza() {
    console.log("order pizza")
    setTimeout(() => {
        pizza = '🍕'
        console.log(`${pizza} is ready`)
    }, 2000)
    console.log('Pizza was ordered')
}

orderPizza()
console.log('call qoli')
console.log(`Eat ${pizza}`)


function orderPizza(callback) {
    console.log("order pizza")
    setTimeout(() => {
        const pizza = '🍕'
        callback
    }, 2000)
}

function pizzaReady(){
    console.log(`$Eat the ${pizza}`)
}
orderPizza(pizzaReady)
console.log('call Qoli')

window.addEventListener('click', callback2)

function callback2(){
        console.log('clicked')
}


function thing1(callback){
    callback()
}
function thing2(callback){
    callback()
}
function thing3(callback){
    callback()
}

//callback hell
thing1(() => {
    thing2(() => {
        thing3()
    })
})



//Old code examples
class Human { //defines the class, allows calling of new Human
    constructor (name, hairColor, location, sleepScore){ // every instance of Human has these parameters passed into it
        this.name = name //give the name key and set the value to the parameter of name
        this.hairColor = hairColor // notice commas are not needed
        this.location = location // the this lets it reference itself while constructing?
        this.sleepScore = sleepScore
    }
    introduce(){ //a method or function that each human instance has that can be called. in this case every human can introduce itself
        console.log(`This is ${this.name} with ${this.hairColor} hair color, and is at ${this.location} right now with a sleep score of ${this.sleepScore}.`)

    }
}

const makah = new Human("Makah", "black", "home", 25); // creating a new Human with these arguments
const jeff = new Human("Jeff", "blue", "office", 99);

makah.introduce() //have the human introduce itself by calling the function within it.
jeff.introduce()

makah.ate = true //gives the makah object a new key-value. affects only the makah object and not the jeff object.
*/