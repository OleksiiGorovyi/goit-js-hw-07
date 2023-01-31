import { galleryItems } from './gallery-items.js';
// Change code below this line
// ________!!!!!____________
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onImgClickCreateModal);


function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
        })
    .join("")
}

function onImgClickCreateModal(event) {
    event.preventDefault();

    const isItemImage = event.target.classList.contains("gallery__image");

    if (!isItemImage) {
        return;
    }

    const currentImgUrl = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${currentImgUrl}" width="800" height="auto"/>`,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onEscKeyPress);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", onEscKeyPress);
            },
        }
    );

    instance.show();

    function onEscKeyPress(event) {
        const ESC_KEY = "Escape";

        const isEscKey = event.code === ESC_KEY;

        if (isEscKey) {
            instance.close();
        }
    }
}

console.log(galleryItems);


// __________+++++++++++___________

// const galleryRef = document.querySelector(".gallery");
// const galleryMarkup = createGallery(galleryItems);

// galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);



// function createGallery(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//         </a>
//         </div>`;
//     })
//         .join("");
// }

// galleryRef.addEventListener("click", onGalleryRefClick);

// let modalWindow;

// function onGalleryRefClick(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     modalWindow = basicLightbox.create(
//         `<img src='${event.target.dataset.source} width="800" height="600">`,
//         {
//             onShow: modalWindow => {
//                 window.addEventListener('keydown', onEscKeyPress);
//             },
//         }
//     );

//     function onEscKeyPress(evt) {
//         if (evt.code === "Escape" && basicLightbox.visible()) {
//             modalWindow.close();
//         }
//     }
//     modalWindow.show();
// }





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
