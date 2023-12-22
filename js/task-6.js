'use strict';

const buttonCreate = document.querySelector('[data-create]');
buttonCreate.classList.add('button-create');

const buttonDestroy = document.querySelector('[data-destroy]');
buttonDestroy.classList.add('button-destroy')

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

buttonCreate.addEventListener('click', () => {

  const numberBox = input.value;

  if (numberBox >= 1 && numberBox <= 100) {
    createBoxes(numberBox);
    input.value = '';
  }
});

function createBoxes(amount) {
  clearBoxes(); 

  const fragment = document.createDocumentFragment();

  let divSize = 30;

  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    divSize += 10;

    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

buttonDestroy.addEventListener('click', () => {
  clearBoxes();
});

function clearBoxes() {
 boxes.innerHTML = '';
}