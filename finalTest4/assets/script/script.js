let MovieList = document.getElementById('parentUl');

let btnBatman = document.getElementById("radioBatman");
let btnPrincess = document.getElementById("radioPrincess");
let btnXmen = document.getElementById("radioXmen");
let btnAvengers = document.getElementById("radioAvengers");
let btnLatest = document.getElementById("radioLatest");
let searchBtn = document.getElementById("link_str")


let btnArray = [btnBatman, btnPrincess, btnXmen, btnAvengers, btnLatest];

let avengersMovies = []
let XmenMovies = []
let princessMovies = []
let batManMovies = []

let latestMovies = movies.filter(value => value.Year >= 2014);


let addMoviesToDom = function (array) {
    MovieList.innerHTML = ""
    let films = array.map((item) => {
        return {
            id: item.imdbID,
            poster: item.Poster
        }
    });
    films.forEach((array) => {
        let newLi = document.createElement("img")
        let newA = document.createElement("a")
        MovieList.appendChild(newA)
        newA.appendChild(newLi)
        newLi.src = array.poster
        newA.href = "https://www.imdb.com/title/" + array.id
    });
};

movies.forEach((movie) => {
    if (movie.Title.includes("Avengers")) {
        avengersMovies.push(movie)
    } else if (movie.Title.includes("X-Men")) {
        XmenMovies.push(movie)
    } else if (movie.Title.includes("Princess")) {
        princessMovies.push(movie)
    } else if (movie.Title.includes("Batman")) {
        batManMovies.push(movie)
    }
});


function applyFilter(event) {
    switch (event.target.value) {
        case "Batman":
            addMoviesToDom(batManMovies)
            break
        case "Princess":
            addMoviesToDom(princessMovies)
            break
        case "Avengers":
            addMoviesToDom(avengersMovies)
            break
        case "X-men":
            addMoviesToDom(XmenMovies)
            break
        case "latest":
            addMoviesToDom(latestMovies)
            break
    };


};
function addEventListeners(btn) {
    btn.addEventListener("change", function (e) { applyFilter(e) });
}
btnArray.map(addEventListeners);

addMoviesToDom(movies);

function srchBar() {
    let searchBarValue = document.getElementById("link_id").value
    if (searchBarValue === "Batman") {
        addMoviesToDom(batManMovies)
    } else if (searchBarValue === "Avengers") {
        addMoviesToDom(avengersMovies)
    } else if (searchBarValue === "Princess") {
        addMoviesToDom(avengersMovies)
    } else if (searchBarValue === "X-men") {
        addMoviesToDom(XmenMovies)
    } else if (searchBarValue === "latest") {
        addMoviesToDom(latestMovies)
    };
};
// i just dont get why the  srchBar() function doesnt stay when i call it