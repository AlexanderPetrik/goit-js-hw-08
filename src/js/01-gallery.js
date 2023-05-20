import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery"),
};

const createGalleryItem = ({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href=${original}
        >
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
            />
        </a>
    </li>`;
};

const createGalleryItems = () => {
    const galleryMarkup = galleryItems.reduce(
        (acc, item) => acc + createGalleryItem(item),
        ""
    )
    refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
}

createGalleryItems();

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});



console.log(galleryItems);



console.log(galleryItems);
