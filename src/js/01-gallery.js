import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryItems ({ preview, original, description}) {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </div>
    `;
}

const addGalleryItems = galleryItems.map(createGalleryItems).join('');
galleryContainer.insertAdjacentHTML ('beforeend', addGalleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, scrollZoom: true, captionsData: "alt" });

console.log(galleryItems);
