import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");



gallery.insertAdjacentHTML(
   "afterbegin",
   galleryItems
      .map(
         ({ original, preview, description }) =>
            `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt= "${description}"></a>`
      )
      .join("")
);

// SimpleLightbox - https://simplelightbox.com

let lightbox = new SimpleLightbox(".gallery a", {
   captionsData: "alt",
   captionDelay: 250,
   captionPosition: 'bottom',
   close: false,
   showCounter: false,


});

console.log(galleryItems);
