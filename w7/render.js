const TBL = document.getElementById("tab-data")
let timesRun = 0  //needed so that renderTblRow keeps up as cfpData increases after first table is made

function renderTblHead () {
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headingTextArr.forEach(function(text) {
        const th = document.createElement("th")
        th.textContent = text;
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    return thead;
}

//making row data ** Now with passed on values WOO! **
function renderTblRow(data, fName, lName){
    const fullName = `${fName} ${lName}`
    const tempArr = [fullName, data[timesRun].houseHoldMembers, data[timesRun].houseSize, data[timesRun].total]
    const tr= document.createElement("tr")
    tempArr.forEach(function(text){
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
    })
    //adding buttons
    const td = document.createElement("td")
    const btnEdit = document.createElement("button")
    btnEdit.textContent = "Edit";
    const btnDel = document.createElement("button")
    btnDel.textContent = "Del";
    td.appendChild(btnEdit)
    td.appendChild(btnDel)
    tr.appendChild(td)
    
    return tr;
}

function renderTbl (data, fName, lName) {
    const table = document.createElement("table");
    const thead = renderTblHead();
    const tbody = document.createElement("tbody")
    const trow = renderTblRow(data, fName, lName);
    
    tbody.appendChild(trow)
    table.appendChild(thead);
    table.appendChild(tbody);
    TBL.appendChild(table);
    timesRun++ //makes sure next table will use new input instead of data at [0]
}

export {renderTbl,renderTblHead, renderTblRow}