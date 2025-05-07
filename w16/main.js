import { renderTbl } from "./render.js";
import { start } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

renderTbl(cfpData);

const checkbox1 = document.getElementById("toggleWasher");
const checkbox2 = document.getElementById("toggleDishWasher");

const handleToggle = function(e){
    if (e.target.checked){
        document.getElementById("washerContainer").style.display = "block";
    }else{
        document.getElementById("washerContainer").style.display = "none";
    }
}
const handleToggle2 = function(e){
    if (e.target.checked){
        document.getElementById("dishWasherContainer").style.display = "block";
    }else{
        document.getElementById("dishWasherContainer").style.display = "none";
    }
}

checkbox1.addEventListener("change", handleToggle)
checkbox2.addEventListener("change", handleToggle2)

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const error = document.getElementById("error");
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const diet = FORM.diet.value;
    const trash = e.target.trash.value; //instead of form we can target the value of the event.
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
        const fpObj = new FP(parseInt(FORM.householdsize.value), FORM.housesize.value, firstName, lastName, diet, trash, parseInt(FORM.washer.value), parseInt(FORM.dishWasher.value), parseInt(FORM.purchases.value))
        fpObj.debug();
        cfpData.push(fpObj); //storing data to cfp to connect it back to rest of code.
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
        flag = 0
        error.innerText = ""

        //clearing boxes
        document.getElementById("washerContainer").style.display = "none";
        document.getElementById("dishWasherContainer").style.display = "none";
    }else {
        error.innerText = message
        error.style.color = "red"
    }
    
})

console.log(cfpData)