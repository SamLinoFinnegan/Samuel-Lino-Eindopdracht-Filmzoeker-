// ---------------------- variables --------------------- //

const MovieList = document.getElementById('parentUl');

const btnBatman = document.getElementById("radioBatman");
const btnPrincess = document.getElementById("radioPrincess");
const btnXmen = document.getElementById("radioXmen");
const btnAvengers = document.getElementById("radioAvengers");
const btnLatest = document.getElementById("radioLatest");
const searchBtn = document.getElementById("srcBtn")


const btnArray = [btnBatman, btnPrincess, btnXmen, btnAvengers, btnLatest];

let avengersMovies = []
let XmenMovies = []
let princessMovies = []
let batManMovies = []

const latestMovies = movies.filter(value => value.Year >= 2014);

// ---------------------- functions --------------------- //


// filter movies //

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

// place movies on the page //

const addMoviesToDom = (array) => {
    MovieList.innerHTML = ""
    const movieObject = array.map((movie) => {
        return {
            id: movie.imdbID,
            poster: movie.Poster
        }
    });
    movieObject.forEach((movie) => {
        const newLi = document.createElement("img")
        const newA = document.createElement("a")
        MovieList.appendChild(newA)
        newA.appendChild(newLi)
        newLi.src = movie.poster
        newA.href = "https://www.imdb.com/title/" + movie.id
    });
};

// apply the filtered movies to the radio btns //

const applyFilter = (event) => {
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

// aplly the filtered movies to the search bar //

const srchBar = () => {
    let searchBarValue = document.getElementById("link_id").value.toUpperCase()
    if (searchBarValue === "BATMAN") {
        addMoviesToDom(batManMovies)
    } else if (searchBarValue === "AVENGERS") {
        addMoviesToDom(avengersMovies)
    } else if (searchBarValue === "PRINCESS") {
        addMoviesToDom(avengersMovies)
    } else if (searchBarValue === "X-MEN") {
        addMoviesToDom(XmenMovies)
    } else if (searchBarValue === "LATEST") {
        addMoviesToDom(latestMovies)
    };
};

// ---------------------- functionsCallers --------------------- //

searchBtn.addEventListener("click", srchBar)

const addEventListeners = function (btn) {
    btn.addEventListener("change", function (e) { applyFilter(e) });
}
btnArray.map(addEventListeners);

addMoviesToDom(movies);


