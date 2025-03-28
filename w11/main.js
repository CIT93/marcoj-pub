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
        //commenting out start so data isnt duplicated
        //start(parseInt(FORM.householdsize.value), FORM.housesize.value, firstName, lastName);
        
        const fpObj = new FP(parseInt(FORM.householdsize.value), FORM.housesize.value, firstName, lastName)
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


// Code along
/*
const me = {
    name: "Makah",
    hairColor: "black",
    location: "home",
    sleepScore: 95,
    introduce: function(){
        console.log(this)
        console.log(`This is ${this.name} with ${this.hairColor} hair color, is at ${this.location} right now.`)
    }
} 
*/

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