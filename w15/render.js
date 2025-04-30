import { FORM, TBL } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { getAvg } from "./avg.js";

const renderTblHeading = function() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Diet", "Trash Impact", "Footprint", "Action"];
    headingTextArr.forEach(function(text) {
        const th = document.createElement("th")
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = function(index, data){
    data.splice(index, 1);  
    saveLS(cfpData);
    renderTbl(data);
}

const renderTblBtn = function(obj, index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click',function(e){
        onUpdate(index, data);
    })
    btnEdit.addEventListener('click', function(e){
        FORM[1].value = obj.firstName;
        FORM[2].value = obj.lastName;
        FORM[3].value = obj.houseMembers;
        FORM[4].value = obj.houseSize;
        FORM.diet.value = obj.diet;
        FORM.trash.value = obj.trash;
        onUpdate(index, data);
    })
    
    return td
}

const renderTblBody = function(data) {
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index) {
        const tr = document.createElement("tr");
        const keys = ["firstName", "houseMembers", "houseSize", "diet", "trash", "total"]
    //    for(const [key, value] of Object.entries(obj)){
    //        if (key !== "houseHoldPTS" && key !== "houseSizePts" && key !== "lastName" && key !== "trashPts" && key !== "dietPts") {
            keys.forEach(key =>{     
                const td = document.createElement("td");
                td.textContent = obj[key];
                tr.appendChild(td);
            })
    //        }
    //    }
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    })
    return tbody;
}

//new function to retieve avg and create a row to be added at the end of the table
const renderTblAvg = function(){
    const tavg = document.createElement("tr");
    const td = document.createElement("td")
    const avg = getAvg();
    td.colSpan = 7 //attribute to make row span the length of the table.
    td.innerText = (`The average footprint score is: ${avg}`);
    tavg.appendChild(td)
    return tavg
}

//added appending of avg row
const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0){
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        const tavg = renderTblAvg();
        tbody.appendChild(tavg);
        table.appendChild(tbody);
        TBL.appendChild(table);
        
    }
}


export {renderTbl,renderTblHeading}