const refs = {
  form: document.querySelector('.login-form'),
  inputEmail: document.querySelector('input[name-email]'),
  inputPass: document.querySelector('input[name-password]'),
};

// console.log(refs.form);

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Поле не може бути порожнім');
  }
  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  //   const data = {};

  //   formData.forEach((value, name) => {
  //     console.log('email', name);
  //     console.log('password', value);
  //   });
  else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
