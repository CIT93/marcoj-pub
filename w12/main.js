const FORM = document.getElementById("form")
const Output = document.getElementById("output")

const begin = function(excercise, repetitions, time, callback){
    const startMessage = document.createElement("div")
    const interval = time * 1000 
    
    startMessage.textContent = (`Start doing ${repetitions} ${excercise} in ${time} seconds. Go!`);
    startMessage.style.fontWeight = "bold";
    Output.appendChild(startMessage);

    setTimeout(() =>{
        callback(excercise);
    }, interval);
}

const finish = function(excercise){
    const closeMessage = document.createElement("div");
    closeMessage.textContent = (`Stop doing ${excercise}`);
    closeMessage.style.fontWeight = "bold";
    Output.appendChild(closeMessage);
}

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    Output.textContent = ""
    begin(FORM.excercise.value, FORM.targetreps.value, parseInt(FORM.time.value), finish)
    
})