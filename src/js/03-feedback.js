import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateOnFormInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(formData);
  if (localStorage.getItem(STORAGE_KEY)) {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function populateOnFormInput() {
  const saveDate = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveDate) {
    refs.input.value = saveDate.email || '';
    refs.textarea.value = saveDate.message;
    formData.email = refs.input.value;
    formData.message = refs.textarea.value;
  }
}
