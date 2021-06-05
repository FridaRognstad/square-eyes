const dramaContainer = document.querySelector(".dramaResults");
const actionContainer = document.querySelector(".actionResults");
const documentaryContainer = document.querySelector(".documentaryResults");
const featuredContainer = document.querySelector(".slider");
const indexFeatured = document.querySelector(".featured");
const url =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products?per_page=50";

async function fetchFilms() {
  try {
    const response = await fetch(url);
    const films = await response.json();

    dramaContainer.innerHTML = "";
    actionContainer.innerHTML = "";
    documentaryContainer.innerHTML = "";
    featuredContainer.innerHTML = "";

    sortingCat(films);
  } catch (error) {
    console.log("Could not call the API");
    dramaContainer.innerHTML = message("Something went wrong calling the API");
  }
}

fetchFilms();

function sortingCat(films) {
  for (let i = 0; i < films.length; i++) {
    const categories = films[i].categories[0].name;
    const filmsHtml = `<div class="filmCard">
                        <a href="watch/watch2.html?id=${films[i].id}">
                        <img src="${films[i].images[0].src}" class="filmImage" alt="${films[i].name}" />
                        <h3 class="cardTitle">${films[i].name}</h3>
                        <p class="cardProducer">${films[i].short_description}</p>
                        </a>
                        </div>`;

    if (categories === "Drama") {
      dramaContainer.innerHTML += filmsHtml;
    }

    if (categories === "Action") {
      actionContainer.innerHTML += filmsHtml;
    }

    if (categories === "Documentary") {
      documentaryContainer.innerHTML += filmsHtml;
    }

    if (films[i].tags[0]) {
      featuredContainer.innerHTML += `<div class="new-rel">
      <a href="watch/watch2.html?id=${films[i].id}">
      <img src="${films[i].images[1].src}" class="filmImage" alt="${films[i].name}" />
      <div class="new-rel-name">
      <h3 class="cardTitle">${films[i].name}</h3>
      <p class="cardProducer">${films[i].short_description}</p>
      </div>
      </a>
      </div>`;
    }
  }
}

//carousel

const slider = document.querySelector(".slider");

document.querySelectorAll(`.carousel ul li`).forEach(function (dots, index) {
  dots.addEventListener(`click`, function () {
    document.querySelector(".carousel .clicked").classList.remove("clicked");
    dots.classList.add("clicked");
    slider.style.transform = `translate(` + index * -33.3 + `%)`;
  });
});
