import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(basicLightbox)

// const instance = basicLightbox.create(`<img src="https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/1:1/w_1706,h_1706,c_limit/Lane-Cats.jpg" alt"cat">`)
// instance.close()


const galleryBox = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", cardsMarkup);
// console.log(galleryBox);

galleryBox.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);

  const imageBigSize = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`<img src = "${imageBigSize}">`);

  instance.show();
});

function createCardsMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class = "gallery__link" href = "${original}">
      <img class = "gallery__image" src = "${preview}" 
      data-source = "${original}" alt = "${description}"></a>`
    )
    .join("");
}

// console.log(cardsMarkup);
