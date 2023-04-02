import { galleryItems } from './gallery-items.js';
// Change code below this line

const refListEl = document.querySelector('.gallery');

const imgMarkUp = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item"> 
      <a class="gallery_link" href="${original}">
      <img src="${preview}" data-sourse="${original}" alt="${description}" class="gallery__image">
      </a>
    </li>`).join('');

refListEl.insertAdjacentHTML('beforeend', imgMarkUp);

refListEl.addEventListener('click', (event) => {
  event.preventDefault();
  const refImgEl = event.target.classList.contains('gallery__image');
  const imgElSrc = event.target.dataset.sourse;
  const instense = basicLightbox.create (`
  <img width="1400" height="900" src="${imgElSrc}">
  `).show()
});

console.log(galleryItems);
