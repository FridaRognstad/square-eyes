const dramaContainer = document.querySelector(".dramaResults");

const urlDrama =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?category=17";

async function fetchDramaFilms() {
  try {
    const responseDrama = await fetch(urlDrama);
    const dramaFilms = await responseDrama.json();

    dramaContainer.innerHTML = "";

    dramaFilms.forEach(function (film) {
      dramaContainer.innerHTML += `<div class="filmCard">
                                      <a href="watch/watch2.html?id=${film.id}">
                                      <img src="${film.images[0].src}" class="filmImage" alt="${film.name}" />
                                                    <h3 class="cardTitle">${film.name}</h3>
                                                    <p class="cardProducer">${film.short_description}</p>
                                            </a>
                                            </div>`;
    });
  } catch (error) {
    console.log(error);
    dramaContainer.innerHTML = message("error", error);
  }
}

fetchDramaFilms();

const actionContainer = document.querySelector(".actionResults");

const urlAction =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?category=19";

async function fetchActionFilms() {
  try {
    const responseAction = await fetch(urlAction);
    const actionFilms = await responseAction.json();

    actionContainer.innerHTML = "";

    actionFilms.forEach(function (film) {
      actionContainer.innerHTML += `<div class="filmCard">
                                      <a href="watch/watch2.html?id=${film.id}">
                                      <img src="${film.images[0].src}" class="filmImage" alt="${film.name}" />
                                                    <h3 class="cardTitle">${film.name}</h3>
                                                    <p class="cardProducer">${film.short_description}</p>
                                            </a>
                                            </div>`;
    });
  } catch (error) {
    console.log(error);
    actionContainer.innerHTML = message("error", error);
  }
}

fetchActionFilms();

const documentaryContainer = document.querySelector(".documentaryResults");

const urlDocumentary =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?category=16";

async function fetchDocumentaryFilms() {
  try {
    const responseDocumentary = await fetch(urlDocumentary);
    const documentaryFilms = await responseDocumentary.json();

    documentaryContainer.innerHTML = "";

    documentaryFilms.forEach(function (film) {
      documentaryContainer.innerHTML += `<div class="filmCard">
                                        <a href="watch/watch2.html?id=${film.id}">
                                        <img src="${film.images[0].src}" class="filmImage" alt="${film.name}" />
                                                      <h3 class="cardTitle">${film.name}</h3>
                                                      <p class="cardProducer">${film.short_description}</p>
                                              </a>
                                              </div>`;
    });
  } catch (error) {
    console.log(error);
    documentaryContainer.innerHTML = message("error", error);
  }
}

fetchDocumentaryFilms();

const featuredContainer = document.querySelector(".featured");

const urlFeatured =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?category=20";

async function fetchFeaturedFilms() {
  try {
    const responseFeatured = await fetch(urlFeatured);
    const featuredFilms = await responseFeatured.json();

    featuredContainer.innerHTML = "";

    featuredFilms.forEach(function (film) {
      featuredContainer.innerHTML += `<div class="filmCard" id="filmCardBig">
                                      <a href="watch/watch2.html?id=${film.id}">
                                      <img src="${film.images[1].src}" id="filmImageBig" alt="${film.name}" />
                                      <p class="cardTitle">${film.name}</p>
                                      <p class="cardProducer">${film.short_description}</p>
                                      </a>
                                      </div>`;
    });
  } catch (error) {
    console.log(error);
    featuredContainer.innerHTML = message("error", error);
  }
}

fetchFeaturedFilms();
