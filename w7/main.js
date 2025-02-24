const movieData = [
    {title:"The Proposal", year:2009, rating:7, watched: 2},
    {title:"500 Days of Summer", year:2009, rating:8, watched: 5},
    {title:"The Menu", year:2022 , rating:7, watched: 2},
    {title:"Companion", year:2025 , rating:7, watched: 1},
    {title:"The Circle", year:2017 , rating:5, watched: 3}
    ];


movieData.forEach(movie => {
    const newP = document.createElement("h3");
        newP.textContent = `${movie.title} (${movie.year}) has a rating of ${movie.rating}.`;
        output.appendChild(newP);
});

movieData.forEach(movie => {
    const newP = document.createElement("p");
    if (movie.rating > 6 && movie.watched <= 3) {
        newP.textContent = `You should watch ${movie.title}. Seen less then 2 times and at least a score of 7.`;
        output2.appendChild(newP);
    } else if (movie.rating < 6 || movie.watched > 3) {
        newP.textContent = `You shouldn't watch ${movie.title}. Either low rating or seen more then 3 times `;
        output2.appendChild(newP);
    } else {
        newP.textContent = `No recommendation for ${movie.title}.`;
        output2.appendChild(newP);
    }
});

