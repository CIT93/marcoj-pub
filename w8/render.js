const TBL = document.getElementById("tab-data")
let i = 0 

function renderTblHeading () {
    TBL.innerHTML = "";
    // const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Total"];
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr2 = ["Name", "Total"]
    headingTextArr2.forEach(function(text) {
        const th = document.createElement("th")
        th.textContent = text;
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

 function renderTbl (data, fName, lName) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    data.forEach(function(obj) {
        const tr = document.createElement("tr")
        const tdName = document.createElement("td");
        const tdTotal = document.createElement("td")
        tdName.textContent = obj.fName;
        tdTotal.textContent = obj.total;
        tr.appendChild(tdName);
        tr.appendChild(tdTotal);
        tbody.appendChild(tr);

    })
    //const td = document.createElement("td");
    //const btnEdit = document.createElement("button");
    //const btnDel = document.createElement("button");
    //btnEdit.textContent = "Edit";
    //btnDel.textContent = "Del";
    //td.appendChild(btnEdit);
    //td.appendChild(btnDel);
    //tr.appendChild(td)
    table.appendChild(tbody);
    TBL.appendChild(table);
    i++;
}


export {renderTbl,renderTblHeading}