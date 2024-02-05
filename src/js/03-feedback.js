import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const formInput = feedbackForm[(name = 'email')];
const formTextarea = feedbackForm[(name = 'message')];

savedStorageValue();

feedbackForm.addEventListener('submit', onSubmitHandler);
feedbackForm.addEventListener('input', throttle(onTextarealHandler, 500));

function onSubmitHandler(e) {
  e.preventDefault();
  if (formInput.value === '' || formTextarea.value === '') {
    return;
  }
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedText);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarealHandler(e) {
  const allData = {
    email: formInput.value,
    message: formTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  allData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function savedStorageValue() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedText) {
    if (savedText.message) {
        formTextarea.value = savedText.message;
    }
    if (savedText.email) {
        formInput.value = savedText.email;
    }
  }
}
