import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: false,
});

function renderGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                 <a class="gallery__link" href="${original}">
                   <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
            </div>`;
    })
    .join('');
}