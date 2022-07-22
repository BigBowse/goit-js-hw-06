// const ulEl = document.querySelector('ul#categories');
// const categories = ulEl.children;
// console.log(`Number of categories: ${categories.length}`);

// const categoriesNames = document.querySelectorAll('h2');
// const firstCategoryName = categoriesNames[0];
// console.log(`Category: ${firstCategoryName.textContent}`);

// const categoriesLi = categories[0].querySelectorAll('li');
// console.log(`Elements: ${categoriesLi.length}`);

// console.log(`Category: ${categoriesNames[1].textContent}`);
// const categoriesLiOne = categories[1].querySelectorAll('li');
// console.log(`Elements: ${categoriesLiOne.length}`);

// console.log(`Category: ${categoriesNames[2].textContent}`);
// const categoriesLiTwo = categories[2].querySelectorAll('li');
// console.log(`Elements: ${categoriesLiTwo.length}`);


const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

const result = categories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`); 
});

