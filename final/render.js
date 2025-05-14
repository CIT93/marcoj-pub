import { TBL, FORM } from "./globals.js";
import { saveLS, userData } from "./storage.js";


const renderTblHeading = function() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Champion", "Roles", "Action"];
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
    userData.splice(index, 1);  
    saveLS(userData);
    renderTbl(userData);
}

const renderTblBtn = function(data, index, check){
    const td = document.createElement("td");
    td.rowSpan = data.howMany
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
        FORM.firstName.value = userData[index].firstName;
        FORM.lane.value = userData[index].lanePicked;
        FORM.role.value = userData[index].rolePicked;
        FORM.howMany.value = userData[index].howMany;

        onUpdate(index, data);
    })
    if (data.random === true || check === 1){
        td.removeChild(btnEdit)    
    }
    return td
}



const renderTblBody = function(data, innerI){
    if (data.champs.length === 0){
        const tbody = document.createElement("tbody")
        const emptyrow = document.createElement("tr")
        const td = document.createElement("td")
        td.colSpan = 3
        td.innerHTML = `<span class="big">There were no results for: </span><br><span class="medium">${data.lanePicked}, and ${data.rolePicked}</span>`;
        emptyrow.appendChild(td)
        emptyrow.appendChild(renderTblBtn(data, innerI, 1))
        tbody.appendChild(emptyrow)
        return tbody
    }else{
    
    const tbody = document.createElement("tbody")
    
    const nameCell = document.createElement("td")
    if (data.howMany > 1){
        nameCell.rowSpan = data.howMany
    }
    
    if (data.random === true){
        nameCell.innerHTML = `<span class="big">${data.firstName}</span><br><span class="small">Random</span>`
    } else {
        nameCell.innerHTML = `<span class="big">${data.firstName}</span><br><span class="small">${data.lanePicked}, ${data.rolePicked}</span>`;
        if (data.howMany> data.champs.length){nameCell.innerHTML += `<br><span class="small">${data.champs.length}/${data.howMany} availible</span>`}
    }

    data.champs.forEach(function(recData, index){
        console.log(recData)
        const trow = document.createElement("tr")
        if (index === 0){
            trow.appendChild(nameCell);
        }
        const keys = ["name", "metalanes"]
        keys.forEach(key =>{
            
            if (key === "metalanes" && typeof recData[key] === "object") {
                const tdRoles = document.createElement("td"); 
                const activeLanes = Object.entries(recData[key]) 
                    .filter(([lane, isTrue]) => isTrue) 
                    .map(([lane]) => lane) 
                    .join(", "); 
            
                tdRoles.innerText = activeLanes; 
                trow.appendChild(tdRoles);
            }
            if (key === "name"){
                const td = document.createElement("td");
                const cName = document.createElement("span")
                const img = document.createElement("img")
                cName.innerText = recData[key]
                img.src = recData.image
                img.style.width = "30px";
                img.style.marginRight = "8px";
                img.style.verticalAlign = "middle";
                td.appendChild(img)
                td.appendChild(cName)
                trow.appendChild(td)
            }
            
        })
        if (index === 0){
            trow.appendChild(renderTblBtn(data, innerI))
        }
        tbody.appendChild(trow);
    })

//start gpt code 
/*
    data.champs.forEach(function (recData, index) {
        const trow = document.createElement("tr");
        if (index === 0) {
            trow.appendChild(nameCell);
        }

        //Create the name + image cell
        const tdName = document.createElement("td");
        const cName = document.createElement("span");
        const img = document.createElement("img");

        cName.innerText = recData.name;
        img.src = recData.image;
        img.style.width = "30px";
        img.style.marginRight = "8px";
        img.style.verticalAlign = "middle";

        tdName.appendChild(img);
        tdName.appendChild(cName);
        trow.appendChild(tdName);

        //Create the metalanes cell
        const tdRoles = document.createElement("td");
        const activeLanes = Object.entries(recData.metalanes)
            .filter(([lane, isTrue]) => isTrue)
            .map(([lane]) => lane)
            .join(", ");
        tdRoles.innerText = activeLanes;
        trow.appendChild(tdRoles);

        //Add action buttons if this is the first row for the group
        if (index === 0) {
            trow.appendChild(renderTblBtn(data, innerI));
        }

        tbody.appendChild(trow);
    });
//end of gpt code */    

    return tbody
}}


const renderTbl = function(data) {
    TBL.innerHTML = "";
    if (data.length !== 0){
        const table = renderTblHeading();
        data.forEach(function(obj, index){
            
            const tbody = renderTblBody(obj, index);
            table.appendChild(tbody);
        })
        TBL.appendChild(table);
    }
}

export {renderTbl}