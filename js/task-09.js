function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyBgc: document.querySelector('body'),
  bgColorName: document.querySelector('.color'),
  btnColorChange: document.querySelector('.change-color'),
};

refs.btnColorChange.addEventListener('click', onClick);

function onClick() {
  console.log('click');
  refs.bodyBgc.style.backgroundColor = getRandomHexColor();
  refs.bgColorName.textContent = refs.bodyBgc.style.backgroundColor;
}
