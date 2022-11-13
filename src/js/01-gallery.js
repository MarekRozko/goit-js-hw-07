import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const items = createImagesContent(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', items)


function createImagesContent() {
    return galleryItems.map(({ original, preview, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    })
        .join('');
}
galleryContainer.addEventListener('click', openMadalImages)

function openMadalImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
        {
        onShow: () => window.addEventListener('keydown', modalClose),
        onClose: () => window.removeEventListener('keydown', modalClose),
        })
    instance.show();

function modalClose(event) {
    if (event.code === 'Escape') {
        instance.close();
        console.log(event)
    }
}};