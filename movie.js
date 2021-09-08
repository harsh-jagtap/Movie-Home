console.log("Wel-come to Harshree Movie also called as Harshree Development");

// let url = "../Movie Data/data.json";
let url = "https://harsh-jagtap.github.io/Movie-Data/data.json";
let repleBody = document.querySelector("#repleBody")

fetch(url).then(function(resp) {
    return resp.json()
}).then(function(resp) {
    let arrayMovie = resp.movie;

    function sorter() {
        arrayMovie.sort(function(a, b) {

            return new Date(a.ReleaseDate) - new Date(b.ReleaseDate);
        });
        arrayMovie.reverse()
    }
    sorter()

    for (const key of arrayMovie) {
        let movie = `<div class="box">
                        <img class="img" src="${key.imageUrl}" alt="Img error" loading="lazy">
                        <div class="info-box">
                            <div class="name">${key.name}</div>
                            <div class="releaseDate">${key.ReleaseDate} </div>
                            <div class="size">${key.size}mb</div>
                            <a href="https://harsh-jagtap.github.io/Movie-Interface/?id=${key.id}" target="_blank">
                                <button class="download-btn"> Download movie here </button>
                            </a>
                        </div>
                    </div>`
        repleBody.innerHTML += movie
    }
})

// searching
let searchButton = document.querySelector("#searchButton")
let search = document.querySelector("#searchBar")

// search.addEventListener('input', function(e) {
search.addEventListener('change', function(e) {
    // searchButton.addEventListener('click', function(e) {
    let searchBar = document.querySelector("#searchBar")






    fetch(url).then(function(resp) {
        return resp.json()
    }).then(function(resp) {
        let arrayMovie = resp.movie;
        repleBody.innerHTML = "";

        function sorter() {
            arrayMovie.sort(function(a, b) {

                return new Date(a.ReleaseDate) - new Date(b.ReleaseDate);
            });
        }
        sorter()

        for (const key of arrayMovie) {
            let movie = `<div class="box">
                            <img class="img" src="${key.imageUrl}" alt="Img error" loading="lazy">
                            <div class="info-box">
                                <div class="name">${key.name}</div>
                                <div class="releaseDate">${key.ReleaseDate} </div>
                                <div class="size">${key.size}mb</div>
                                <a href="https://harsh-jagtap.github.io/Movie-Interface/?id=${key.id}" target="_blank">
                                    <button class="download-btn"> Download movie here </button>
                                </a>
                            </div>
                        </div>`

            let toJoin = key.name.toUpperCase().includes(searchBar.value.toUpperCase());

            if (toJoin) {
                repleBody.innerHTML += movie
            }
            // else {

            // }

        }
    })





});