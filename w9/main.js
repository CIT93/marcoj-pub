import { renderTbl } from "./render.js";
import { start } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

renderTbl(cfpData);

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const NIH = parseInt(FORM.householdsize.value, 10);  //Had to convert the string to a number using a base10 number system
    const HS = FORM.housesize.value;
    start(NIH,HS,firstName, lastName);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
})
