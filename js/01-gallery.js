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

const box1 = document.querySelector(".js-box1")


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
      `<li >
        <a href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="372" height="auto"/>
        </a>
      </li>`).join("")
}

box1.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
box1.addEventListener("click", handlerClick)
 

function handlerClick(evt) {
 
  evt.preventDefault();
  
  if (!evt.target.classList.contains("gallery__image")) {
    return
  }

    
  const imgOriginSize = evt.target.dataset.source;
  

 const instance = basicLightbox.create(`<img src="${imgOriginSize}" />`)
  instance.show()
}


//function onEscClick(evt) {
//  if (evt.code === "Escape") {
//    modalClose();
//  }
//}
//function modalClose() {
//     const instance = basicLightbox.create(`<img src="${imgOriginSize}" />`)
//
//    instance.onShow(() => {
//      box1.addEventListener("click", handlerClick);
//    });
//    instance.onClose(() => {
//      box1.removeEventListener("keydown", onEscClick);
//    });
//    };


