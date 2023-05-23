import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const submitForm = (event) => {
  event.preventDefault();
  if (email.value && message.value) {
    console.log({ email: email.value, message: message.value });

    localStorage.clear();

    email.value = "";
    message.value = "";
  }
}

const storeForm = throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: message.value }));
  }, 500)

form.addEventListener('input', storeForm);

form.addEventListener('submit', submitForm);

const formValue = localStorage.getItem("feedback-form-state");

if (formValue) {
  const formData = JSON.parse(formValue);
  email.value = formData.email;
  message.value = formData.message;
}

