const labelSeconds = document.querySelector('.time--seconds');
const labelMinutes = document.querySelector('.time--minutes');
const labelHours = document.querySelector('.time--hours');
const labelDays = document.querySelector('.time--days');
let timeSecs = 1209600;

const timer = function () {
  const days = String(Math.trunc(timeSecs / 60 / 60 / 24)).padStart(2, 0);
  const hours = String(Math.trunc((timeSecs / 60 / 60) % 24)).padStart(2, 0);
  const minutes = String(Math.trunc((timeSecs / 60) % 60)).padStart(2, 0);
  const seconds = String(timeSecs % 60).padStart(2, 0);

  labelSeconds.textContent = seconds;
  labelMinutes.textContent = minutes;
  labelHours.textContent = hours;
  labelDays.textContent = days;

  timeSecs--;
};
timer();

setInterval(timer, 1000);
