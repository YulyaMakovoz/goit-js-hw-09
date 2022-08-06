const formEl = document.querySelector('.form');
const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(firstDelayEl.value);
  let step = Number(delayStepEl.value);
  let amount = Number(amountEl.value);

  for (let position = 1; position <= amount; position += 1) {
    delay += step;

    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
