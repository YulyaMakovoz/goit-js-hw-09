const formEl = document.querySelector('.form');
const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onSubmit);

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(firstDelayEl.value);
  let step = Number(delayStepEl.value);
  let amount = Number(amountEl.value);

  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
}


// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
    } else {
        reject({ position, delay });
    }
    },delay)
  }) 
         
}
