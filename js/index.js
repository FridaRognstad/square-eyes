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
    console.log("Could not call the API");
    featuredContainer.innerHTML = message(
      "Something went wrong calling the API"
    );
  }
}

fetchFeaturedFilms();
