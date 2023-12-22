'use strict';

const catItems = document.querySelectorAll('.item'); // get an object

console.log(`Number of categories: ${catItems.length}`);


catItems.forEach(element => {
    const catTitle = element.querySelector('h2'); // sorting title
    const catList = element.querySelectorAll('li'); // sorting list

    console.log(`Category: ${catTitle.textContent}`);
    console.log(`Elements: ${catList.length}`);
})


