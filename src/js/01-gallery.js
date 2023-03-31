import { galleryItems } from './gallery-items.js';
// Change code below this line

const refListEl = document.querySelector('.gallery');

const imgMarkUp = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item"> 
      <a class="gallery_link" href="${original}">
      <img src="${preview}" data-sourse="${preview}" alt="${description}" class="gallery__image">
      </a>
    </li>`).join('');

refListEl.insertAdjacentHTML('beforeend', imgMarkUp);

// refListEl.addEventListener("click", )

console.log(galleryItems);
