import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const storeForm = throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: form.elements.email.value, message: form.elements.message.value }));
  }, 500)

form.elements.email.addEventListener('input', storeForm);

form.elements.message.addEventListener('input', storeForm);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({ email: form.elements.email.value, message: form.elements.message.value });

  localStorage.clear();

  form.elements.email.value = "";
  form.elements.message.value = "";
});


const formValue = localStorage.getItem("feedback-form-state");

if (formValue) {
  const formData = JSON.parse(formValue);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

