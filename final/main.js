import { validate } from "./validate.js"
import { BODY, FORM } from "./globals.js"
import { renderTbl } from "./render.js"
import { calculate, calculateRandom } from "./calculations.js"
import { saveLS, userData} from "./storage.js";
import { user } from "./userClass.js";

renderTbl(userData);

const main = function(rolePicked, lanePicked, howMany, useAny, firstName){
    new user(rolePicked, lanePicked, howMany, useAny, firstName)
    saveLS(userData);
    renderTbl(userData);
}


FORM.addEventListener("submit", function(e){
    e.preventDefault(); 
    BODY.innerText = "" 
    const valid = validate(FORM.role.value, FORM.lane.value, parseInt(FORM.howMany.value), FORM.random.checked)
    if(valid === true || FORM.random.checked){
        main (FORM.role.value, FORM.lane.value, parseInt(FORM.howMany.value), FORM.random.checked, FORM.firstName.value); //have to use .check or sends as a string not a booleon
    }
    FORM.reset()
});

