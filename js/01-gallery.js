import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const listElements = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", listElements);

gallery.addEventListener("click", itemHandler);

function itemHandler(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },

      onClose: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
