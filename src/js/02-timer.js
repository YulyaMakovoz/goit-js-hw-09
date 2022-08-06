import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const deadLine = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const btnStart = document.querySelector('button[data-start]')

let startTime = Date.now();
let savedData;
let intervalID = null;

btnStart.addEventListener('click', startTimer);
btnStart.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose 
     
};

function onClose(selectedDates) {
    if (selectedDates[0].getTime() <= startTime) {

        window.alert("Please choose a date in the future");
        // btnStart.setAttribute('disabled', 'true');
    } else {
        btnStart.removeAttribute('disabled', 'true');
                        
    } (savedData = selectedDates[0].getTime());

    console.log('saveD',savedData);
}


flatpickr(deadLine, options)

// Напиши функцию addLeadingZero(value), которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function startTimer() {
    deadLine.setAttribute('disabled', 'true');
    intervalID = setInterval(() => {
        
        let currentTime = Date.now();
        const delta = savedData - currentTime;
         if (delta <= 0) {
      return;
    }
        const { days, hours, minutes, seconds } = convertMs(delta);
        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
        btnStart.setAttribute('disabled', 'true');
    }
        , 1000)
   
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}









