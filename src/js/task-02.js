const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

;

const addIngredients = ingredients.forEach((ingredient) => {
  const ingredientLi = document.createElement('li');
  ingredientLi.classList.add('item');
  ingredientLi.textContent = ingredient;
  const ingredientsUl = document.querySelector('ul#ingredients');
  ingredientsUl.appendChild(ingredientLi);
});

addIngredients();
