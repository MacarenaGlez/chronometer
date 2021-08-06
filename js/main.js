/*revisar a fondo js, mejorar*/
"use strict";

let hours = "00";
let minutes = "00";
let seconds = "00";
let tem2;
let textTimer = document.querySelector(".timing");

function timeCrono(event) {
  const activateCrono = () => {
    seconds++;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (seconds > 59) {
      seconds = "00";
      minutes++;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }
    }

    if (minutes > 59) {
      minutes = "00";
      hours++;

      if (hours < 10) {
        hours = "0" + hours;
      }
    }

    textTimer.innerHTML = `${hours}:${minutes}:${seconds}`;
  };
  tem2 = setInterval(activateCrono, 1000);
}

const btnPlay = document.querySelector(".play");
btnPlay.addEventListener("click", timeCrono);

function stopCrono(event) {
  clearInterval(tem2);
}
const btnPause = document.querySelector(".pause");
btnPause.addEventListener("click", stopCrono);

function resetCrono(event) {
  clearInterval(tem2);
  textTimer.innerHTML = "00:00:00";
  hours = "00";
  minutes = "00";
  seconds = "00";
}

const btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", resetCrono);
