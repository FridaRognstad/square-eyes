const resultsContainer = document.querySelector(".results");

const url = "https://fridarognstad.one/squareeyes/wp-json/wc/store/products";

async function fetchFilms() {
  try {
    const response = await fetch(url);
    const films = await response.json();

    console.log(films);

    resultsContainer.innerHTML = "";

    films.forEach(function (film) {
      resultsContainer.innerHTML += `<div class="filmCard">
                                      <a href="watch/watch1.html?id=${film.id}">
                                      <img src="${film.images[0].src}" class="filmImage" alt="${film.name}" />
                                                    <h3 class="cardTitle">${film.name}</h3>
                                                    <p class="cardProducer">${film.short_description}</p>
                                            </a>
                                            </div>`;
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchFilms();
