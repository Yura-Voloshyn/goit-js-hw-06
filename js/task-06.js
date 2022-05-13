const refs = {
  textInput: document.querySelector('#validation-input'),
};

// console.log(refs.textLength.dataset.length);

// console.log(refs.textInput);

refs.textInput.addEventListener('blur', onFocusGone);

function onFocusGone(event) {
  if (Number(event.currentTarget.value.length) === Number(refs.textInput.dataset.length)) {
    refs.textInput.classList.add('valid');
    refs.textInput.classList.remove('invalid');
  } else {
    refs.textInput.classList.add('invalid');
    refs.textInput.classList.remove('valid');
  }
}
