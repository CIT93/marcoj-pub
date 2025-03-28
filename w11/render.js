import { FORM, TBL } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

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
        for(const [key, value] of Object.entries(obj)){
            if (key !== "houseHoldPTS" && key !== "houseSizePts" && key !== "lastName" && key !== "trashPts" && key !== "dietPts") {
                
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
                
            }
        }
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    })
    return tbody;
}

const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0){
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}


export {renderTbl,renderTblHeading}