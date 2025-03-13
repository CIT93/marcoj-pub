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
        const NIH = parseInt(FORM.householdsize.value, 10);  //Had to convert the string to a number using a base10 number system
        const HS = FORM.housesize.value;
        start(NIH,HS,firstName, lastName);
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
