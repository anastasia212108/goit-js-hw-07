import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

  //  {
   // preview:
   //   'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
 //   original:
  //    'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
  //  description: 'Hokkaido Flower',
//  }
const box2 = document.querySelector(".js-box2")
box2.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
box2.addEventListener("click", handlerClick)

function createMarkup(array) {
    return array.map(({ preview, original, description }) => 
    `<li>
   <a href="${original}">
      <img src="${preview}" alt="${description}" width="370" height="240"/>
   </a>
</li>`).join("")
}

function handlerClick(evt) {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }

    let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
})
 
}