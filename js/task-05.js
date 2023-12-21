'use strict';

const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {

  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();

  const span = document.querySelector('.color');
  span.textContent = body.style.backgroundColor;
});


