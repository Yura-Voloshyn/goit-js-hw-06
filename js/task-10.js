function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  controls: document.querySelector('#controls'),
};

// refs.controls.classList.add('item-tt');

refs.createBtn.addEventListener('click', createPaletteItems);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

// function getAmount() {
//   let amount = Number(refs.input.value);
//   console.log(amount);
// }
function createPaletteItems() {
  const items = [];
  let amount = Number(refs.input.value);
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement('div');
    item.style.width = 30 + i * 10 + 'px';
    item.style.height = 30 + i * 10 + 'px';
    item.style.margin = 10 + 'px';
    item.style.backgroundColor = color;
    item.style.borderRadius = 4 + 'px';
    // item.style.display = flex;
    // item.style.flexDirection = row;
    item.classList.add('item-tt');
    items.push(item);
  }
  refs.boxes.append(...items);
}

// function onCreateBtnClick() {
//   let box = document.createElement('div');
//   box.style.width = 30 + 'px';
//   box.style.height = 30 + 'px';
//   box.style.margin = 10 + 'px';
//   box.style.backgroundColor = getRandomHexColor();

//   refs.boxes.appendChild(box, getAmount);
// }

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
}
