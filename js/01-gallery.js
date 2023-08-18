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
          <img  src="${preview}" data-source="${original}" alt="${description}" width="372" height="240"/>
        </a>
      </li>`).join("")
}

box1.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
box1.addEventListener("click", handlerClick)

function handlerClick(evt) {
    console.log("tar", evt.target)
    console.log(evt.currentTarget)
    if (evt.target === evt.currentTarget) {
    return   
    }

    evt.preventDefault();
    
    const imgOriginSize = evt.target.dataset.source;
    console.log(imgOriginSize)
    
const instance = basicLightbox.create(`
<img src="${imgOriginSize}"  />
`)
  instance.show()
  box1.addEventListener("keydown", onEscClick)
function onEscClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}
}




