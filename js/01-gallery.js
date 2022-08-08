import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const body = document.querySelector('body');

gallery.insertAdjacentHTML(
   "afterbegin",
   galleryItems
      .map(
         ({ original, preview, description }) =>
            `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt= "${description}"></a></div>`
      )
      .join("")
);


gallery.addEventListener("click", selectedImage);


function selectedImage(e) {
   e.preventDefault();

   if (e.target.nodeName !== "IMG") {
      return;
   }
   console.log(e);
   document.addEventListener("keydown", closeByKey);

   function closeByKey(e) {
      if (e.key === "Escape") instance.close();

      console.log("fsfs")

      body.classList.remove('no-scroll');
      document.removeEventListener("keydown", closeByKey);
   }
   const imgLink = e.target.dataset.source;
   const instance = basicLightbox.create(`<img src="${imgLink}">`);
   instance.show();

}


document.addEventListener("click", (e) => {
   if (e.target.nodeName === "IMG") {
      body.classList.add('no-scroll');
   } else {
      body.classList.remove('no-scroll');
   }
});

