const TBL = document.getElementById("tabData")

const movieData = [
  {title:"The Proposal", year:2009, rating:7, seen:2},
  {title:"500 Days of Summer", year:2009, rating:8, seen:5},
  {title:"The Menu", year:2022 , rating:7, seen:3},
  {title:"Companion", year:2025 , rating:7, seen:1},
  {title:"The Circle", year:2017 , rating:5, seen:4}
];

// div > table > thead > tr > th
//             > tbody > tr > td

function renderTableHeading(){
  TBL.textContent = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingArr = ["Title", "Year", "Rating", "Watched"];

  headingArr.forEach (function(data){
    const th = document.createElement("th");
    th.textContent = data;
    tr.appendChild(th)
  })
  thead.appendChild(tr)
  table.appendChild(thead)
  return table
}

function renderTable (movieData){
  const table = renderTableHeading()
  const tbody = document.createElement("tbody")
  
  movieData.forEach(function(obj){
    const tr = document.createElement("tr");
    const tName = document.createElement("td");
    tName.textContent = obj.title
    tr.appendChild(tName);

    const tYear = document.createElement("td");
    tYear.textContent = parseInt(obj.year)
    tr.appendChild(tYear);

    const tRate = document.createElement("td");
    tRate.textContent = parseInt(obj.rating)
    tr.appendChild(tRate);

    const tWatched = document.createElement("td");
    tWatched.textContent = parseInt(obj.seen)
    tr.appendChild(tWatched);
    
    tbody.appendChild(tr)
  })
  
  table.appendChild(tbody);
  TBL.appendChild(table);
}

renderTable(movieData);