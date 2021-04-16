const featuredContainer = document.querySelector(".newReleases");
const url =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?per_page=12";

async function fetchFeaturedFilms() {
  try {
    const response = await fetch(url);
    const films = await response.json();

    console.log(films);

    featuredContainer.innerHTML = "";

    for (let i = 0; i < films.length; i++) {
      const tags = films[i].tags;

      for (let a = 0; a < tags.length; a++) {
        if (tags[a].name !== "featured") {
          continue;
        }

        featuredContainer.innerHTML += `<div class="filmCard" id="filmCardBig">
                                        <a href="watch/watch2.html?id=${films[i].id}">
                                        <img src="${films[i].images[1].src}" id="filmImageBig" alt="${films.name}" />
                                        <p class="cardTitle">${films[i].name}</p>
                                        <p class="cardProducer">${films[i].short_description}</p>
                                        </a>
                                        </div>`;
      }
    }
  } catch (error) {
    console.log(error);
    featuredContainer.innerHTML = message("error", error);
  }
}
fetchFeaturedFilms();
