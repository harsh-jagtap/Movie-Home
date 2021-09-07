console.log("Wel-come to Harshree Movie also called as Harshree Development");
let url = "https://harsh-jagtap.github.io/Movie-Data/data.json";
let repleBody = document.querySelector("#repleBody")

fetch(url).then(function(resp) {
    return resp.json()
}).then(function(resp) {

    for (const key of resp.movie) {
        console.log(key);
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