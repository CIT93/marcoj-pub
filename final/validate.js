
export const validate = function(role, lane, number, random){
    let roleValid = false
    let laneValid = false
    let numberValid = false
    
    const errorRole = document.getElementById("errorR")
    errorRole.innerText = (`Please choose a Role`)
    errorRole.style.color = "#FF0000"
    const errorLane = document.getElementById("errorL")
    errorLane.innerText = (`Please choose a Lane`)
    errorLane.style.color = "#FF0000"
    const errorNum = document.getElementById("errorN")
    errorNum.innerText = (`Please choose a Number`)
    errorNum.style.color = "#FF0000"

    if (role !== ""){
        roleValid = true
        errorRole.innerText = ""
    } if (lane !== ""){
        laneValid = true
        errorLane.innerText = ""
    } if (number !== "" && !isNaN(number)){
        numberValid = true
        errorNum.innerText = ""
    }

    if (roleValid === true && laneValid === true && numberValid === true){
        // if all passed check, returns true
        return true
    } else 
        if (random === true){
            errorRole.innerText = ""
            errorLane.innerText = ""
            errorNum.innerText = ""
        }
        return false
}