const producerFilmContainer = document.querySelector(".film-section");
const url =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?per_page=12";

async function fetchProducerFilms() {
  try {
    const response = await fetch(url);
    const films = await response.json();

    console.log(films);

    producerFilmContainer.innerHTML = "";

    for (let i = 0; i < films.length; i++) {
      if (films[i].short_description !== "<p>From: Thomas Lewis</p>") {
        continue;
      }

      producerFilmContainer.innerHTML += `<a href="watch/watch2.html?id=${films[i].id}">
                                        <img src="${films[i].images[1].src}" class="filmImageProducer" alt="${films.name}" />
                                        <div class="play-icon">
                                        <i class="far fa-play-circle"></i>
                                        </div>
                                        <h2>${films[i].name}</h2>
                                        </a>
                                        <h3>${films[i].short_description}</h3>
                                        <p>${films[i].description}</p>`;
    }
  } catch (error) {
    console.log("Could not call the API");
    producerFilmContainer.innerHTML = message(
      "Something went wrong calling the API"
    );
  }
}
fetchProducerFilms();
