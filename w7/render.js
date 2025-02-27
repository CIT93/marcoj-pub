const TBL = document.getElementById("tab-data")
let i = 0  //needed so that renderTblRow keeps up as cfpData increases after first table is made

function renderTblHead () {
    const headingTextArr = ["Name", "Total"];
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
function renderTblRow(data, fName, lName, i){
    i = parseInt(i)
    const tempArr = [fName, data[i].total]
    const tr= document.createElement("tr")
    tempArr.forEach(function(text){
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
    })
    //adding buttons  --- removed for challenge
//    const td = document.createElement("td")
//    const btnEdit = document.createElement("button")
//    btnEdit.textContent = "Edit";
//    const btnDel = document.createElement("button")
//    btnDel.textContent = "Del";
//    td.appendChild(btnEdit)
//    td.appendChild(btnDel)
//    tr.appendChild(td)
    
    return tr;
}

 function renderTbl (data, fName, lName) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    if (i===0) {
        const thead = renderTblHead();
        table.appendChild(thead);
    }
    const trow = renderTblRow(data, fName, lName, i);
    tbody.appendChild(trow);
    table.appendChild(tbody);
    TBL.appendChild(table);
    i++ //makes sure next table will use new input instead of data at [0]
}

/*  disabled old table render
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
*/

export {renderTbl,renderTblHead, renderTblRow}