const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const addImagesToGallery = images.forEach((image) => {
//   const galleryUl = document.querySelector('ul.gallery');
//   galleryUl.style.display = 'flex';
//   galleryUl.style.justifyContent = 'space-between';
//   galleryUl.style.listStyle = 'none';
//   galleryUl.style.padding = 0;
//   const galleryLi = document.createElement('li');
//   galleryLi.classList.add('gallery__item');
//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery__item-image');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.style.width = '360px';
//   imageEl.style.height = '200px';
//   galleryLi.appendChild(imageEl);
//   galleryUl.appendChild(galleryLi);
// });

// insertAdjacentHTML
const addImagesToGallery = images.map(image => {
  const galleryUl = document.querySelector('ul.gallery');
  galleryUl.insertAdjacentHTML(
    'afterbegin',
    `<li><img class = 'gallery__item' src = "${image.url}" alt = "${image.alt}"  width = "360" height = "200" /></li>`,
  );
});


