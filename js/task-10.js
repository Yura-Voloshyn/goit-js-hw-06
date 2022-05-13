function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function getAmount() {
  let amount = Number(refs.input.value);
  console.log(amount);
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {}

function onDestroyBtnClick() {}
