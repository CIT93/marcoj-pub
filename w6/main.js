const movieData = [
    {title:"The Proposal", year:2009, rating:7},
    {title:"500 Days of Summer", year:2009, rating:8},
    {title:"The Menu", year:2022 , rating:7},
    {title:"Companion", year:2025 , rating:7},
    {title:"The Circle", year:2017 , rating:5}
    ];

function displayOut(){
    const output = document.getElementById("output");
    for (i=0; i<movieData.length; i++){
        const newP = document.createElement("p");
        newP.textContent = `${movieData[i].title} (${movieData[i].year}) has a rating of ${movieData[i].rating}.`;
        output.appendChild(newP);
    }
}

displayOut()