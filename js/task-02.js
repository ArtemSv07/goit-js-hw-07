'use strict';


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
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Green and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];


const gallery = document.querySelector('.gallery'); // find 'ul'

for (let image of images) { //sort through the array 'images'
  
  const listItem = document.createElement('li'); //on each cycle we create 'li'
  listItem.classList.add('gallery-list'); //to appropriate (class="gallery-list")
  
  const imageElement = document.createElement('img'); //on each cycle we create 'img'
  imageElement.src = image.url; //to appropriate (link)
  imageElement.alt = image.alt; //to appropriate description
  imageElement.width = (360)
  imageElement.height = (300)

  listItem.append(imageElement); //position the image in the middle 'li'
  gallery.append(listItem); //position the list images in the middle 'ul'
  
}




//////////////////////////////////container////////////////////////////////
const container = document.createElement('div');
container.classList.add('container');
gallery.before(container);
container.append(gallery);
