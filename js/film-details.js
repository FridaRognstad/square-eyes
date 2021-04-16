const detailContainer = document.querySelector(".film-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://fridarognstad.one/squareeyes/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchFilm() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log("Could not call the API");
    detailContainer.innerHTML = message("Something went wrong calling the API");
  }
}

fetchFilm();

function createHtml(filmDetails) {
  detailContainer.innerHTML = `<div class="filmCard" id="filmCardWatch">
                                    <img src="${filmDetails.images[0].src}" class="filmImage" alt="${filmDetails.name}" />
                                <div class="filmCardBody">
                                  <h3 class="cardTitle">${filmDetails.name}</h3>       
                                  <p class="priceCircle">2$</p>
                                  <p class="cardProducer">${filmDetails.short_description}</p>
                                  <div class="filmInfo">
                                  <p class="cardGenre">${filmDetails.categories[0].name}</p>
                                </div>
                                  <p class="cardSummary">${filmDetails.description}</p>
                                </div>
                              </div>`;
}
