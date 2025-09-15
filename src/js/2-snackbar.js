import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputDelay = event.target.elements.delay.value;
  const inputState = event.target.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputState === 'fulfilled') {
        resolve(inputDelay);
        console.log(`✅ Fulfilled promise in ${inputDelay}ms`);
      } else {
        reject(inputDelay);
        console.log(`❌ Rejected promise in ${inputDelay}ms`);
      }
    }, Number(inputDelay));
  })
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${inputDelay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${inputDelay}ms`,
      });
    });
});
