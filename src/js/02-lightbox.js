import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const items = createImagesContent(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', items)


function createImagesContent() {
    return galleryItems.map(({ original, preview, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
        .join('');

}

const lightbox = new SimpleLightbox('.gallery a',
    { captionsData: 'alt', captionDelay: 250 });


