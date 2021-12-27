// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryItemsContainer = document.querySelector('.gallery');

const galleryCardMarkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}"
   alt="${item.description}" />
</a>`,
  )
  .join('');

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
