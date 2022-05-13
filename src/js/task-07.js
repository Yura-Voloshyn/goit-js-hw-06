const refs = {
  sizeControl: document.querySelector('#font-size-control'),
  textSize: document.querySelector('#text'),
};

refs.sizeControl.addEventListener('input', onSizeControlChange);

function onSizeControlChange() {
  refs.textSize.style.fontSize = refs.sizeControl.value + 'px';
}
