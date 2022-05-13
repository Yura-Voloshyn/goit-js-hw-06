const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
// console.log(refs.nameInput);
// console.log(refs.nameOutput);

refs.nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
  if (event.currentTarget.value !== '') {
    refs.nameOutput.textContent = event.currentTarget.value;
  } else {
    refs.nameOutput.textContent = 'Anonymous';
  }
}
