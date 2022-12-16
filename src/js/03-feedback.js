import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener
(
    'input', 
    throttle(event => {
      const dataToSave = {
        email: form.elements.email.value,
        message: form.elements.message.value,
      };
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToSave));
    }, 500)

);

form.addEventListener
(
    'submit',
     event => {
      event.preventDefault();

        const {
            elements: { email, message },
          } = event.currentTarget;
        console.log({ email: email.value, message: message.value });

        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
        formData[name] = value;
          });
          
        console.log(formData);
          
        event.currentTarget.reset();
        
        localStorage.clear();
     }
);

function localStorageData () {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const email = document.querySelector(LOCALSTORAGE_KEY);
  const message = document.querySelector(LOCALSTORAGE_KEY);
  
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
