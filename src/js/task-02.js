const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector('ul');
itemsList.textContent = 'Ingredients:';

// const items = ingredients.map(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   return item;
// });



const createIngredient = args => {
  return args.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
  });
};
const items = createIngredient(ingredients);


console.log(items);
itemsList.append(...items);