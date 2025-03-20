import { renderTbl } from "./render.js";
import { start } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

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
        start(parseInt(FORM.householdsize.value), FORM.housesize.value, firstName, lastName);
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

// code along

const add2 = function(...a){
    return 2 + a[3];
};

const results = add2(1, 2, 3, 4);

const a = 3;

(function(a){
    console.log("inside IIFE");
    console.log(a);
});