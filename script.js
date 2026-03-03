const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("display");
const lapsBtn = document.getElementById("lap-btn");
const clearLapsBtn = document.getElementById("clear-laps-btn");
const lapsList = document.getElementById("laps-list");

let lapsArray = [];
let lapCounter = 0;
const timerDelay = 1000;
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = 0;

function displayTimer(seconds, minutes, hours) {
  timerDisplay.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function addLapToList(array) {
  let newLapItem = document.createElement("li");
  if (intervalId != 0) {
    lapCounter++;
    newLapItem.innerText = `Lap ${lapCounter}: ${timerDisplay.innerText}`;
    lapsArray.push(newLapItem.innerText);
    console.log(lapsArray);
    lapsList.appendChild(newLapItem);
  }
}

function resetLap() {
  lapCounter = 0;
  lapsList.innerHTML = "";
  lapsArray = [];
}

function startTimer() {
  if (intervalId == 0) {
    intervalId = setInterval(() => {
      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        if (minutes < 59) {
          minutes++;
        } else {
          minutes = 0;
          if (hours < 24) {
            hours++;
          } else {
            hours = 0;
            minutes = 0;
            seconds = 0;
          }
        }
      }
      displayTimer(seconds, minutes, hours);
    }, timerDelay);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = 0;
  displayTimer(seconds, minutes, hours);
}

function resetTimer() {
  setTimeout(() => {
    intervalId = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTimer(seconds, minutes, hours);
  }, 0);
  stopTimer();
  resetLap();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
clearLapsBtn.addEventListener("click", resetLap);
lapsBtn.addEventListener("click", addLapToList);
