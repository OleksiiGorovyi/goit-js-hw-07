import { galleryItems } from './gallery-items.js';
// Change code below this line
// const galleryGrid = document.querySelector("gallery")
const galleryEl = document.querySelector("gallery")
console.log(galleryEl);


// ______________________Variant_____________
// function createImgItem(galleryItems) {
//     return galleryItems
//     .map(
//         ({preview, original, description}) =>
//         `<div class="gallery__item">
//          <a class="gallery__link" href="${original}">
//          <img
//          class="gallery___image"
//          src="${preview}"
//          data-source="${original}"
//          alt="${description}"/>
//          </a>
//          </div> `
// )
// .join("");
//     }
// const preventRedirection = document.querySelector(".gallery");
// preventRedirection.addEventListener("click", onClick);
// function onClick(event) {
//     event.preventDefault();
// }
// const addGalleryMarkup = createImgItem(galleryItems);
// galleryEl.innerHTML = addGalleryMarkup;

// galleryEl.addEventListener("click", onImageClick);
// function onImageClick(event) {
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     const fullScreenImg = basicLightbox.create (
//         `<img src="${event.target.dataset.source}" width="800" height = "600">`
//     );
//     fullScreenImg.show();

//     galleryEl.addEventListener("keydown", (event) => {
//         if(event.code === "Escape") 
//         fullScreenImg.close();
//     })
// }

// // _____________???????????______________

// const galleryStr = galleryItems.map(item => {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}" onclick="return false">
//     <img
//     class="gallery___image"
//     src="${original, preview}"
//     data-source="${item.itoriginal}"
//     alt="${item.description}"
//     />
//     </a>
//     </div> `
// }).join('')
// galleryGrid.insertAdjacementHTML("beforeend", galleryStr)
// console.log(galleryItems);
