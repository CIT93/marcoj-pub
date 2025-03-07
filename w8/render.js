const TBL = document.getElementById("tab-data")
let gIndex = null

function renderTblHeading () {
    TBL.innerHTML = "";
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint Total", "Action"];
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headingTextArr.forEach(function(text) {
        const th = document.createElement("th")
        th.textContent = text;
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function getTblButton (index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    btnDel.addEventListener('click',function(e){
        console.log(`Hello from inside event listener: ${e}`);
        data.splice(index, 1);  // the data.splice brings up the array, then index defines which array within the array, and the 1 tells it to delete that 1 entry in the arr of objs.
        renderTbl(data); // rerender the table so that the removed array is also removed from the DOM or rather to update the change.
    })
    btnEdit.addEventListener('click', function(e){
        console.log(`hello from inside event listener for editing`);
        const FORM = document.getElementById("form")
        FORM.firstname.value = data[index].fName ;
        FORM.lastname.value = data[index].lName;
        FORM.householdsize.value = data[index].houseHoldMembers;
        FORM.housesize.value = data[index].houseSize;
        gIndex = index;
    })
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    return td
}

function getRows (data) {
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index) {
        const tr = document.createElement("tr");
        for(const [key, value] of Object.entries(obj)){
            if (key !== "houseHoldPTS" && key !== "houseSizePts" && key !== "lName") {
                
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
                
            }
        }
        const td = getTblButton(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    })
    return tbody;
}

function renderTbl (data, fName, lName) {
    let table = document.createElement("table")
    if (data.length === 0){
        TBL.innerHTML = "";
    } else {
        table = renderTblHeading();
    }
    const tbody = getRows(data)
    table.appendChild(tbody);
    TBL.appendChild(table);
}

function resetIndex(){
    gIndex = null;
}

export {renderTbl,renderTblHeading,resetIndex,gIndex}
