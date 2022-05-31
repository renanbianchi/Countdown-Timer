import {playbtn,
  stopbtn,
  addFiveMinutes,
  removeFiveMinutes,
  pausebtn,
  soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
  screenMinutes,
  screenSeconds
 } from "./elements.js";
import sounds from "./sounds.js";
import { timers } from "./timers.js"
let sound = sounds();
let timer = timers();


playbtn.addEventListener('click', function () {
  timer.TimeIsRunning();
  sound.pressButton();
  playbtn.classList.add('hide');
  pausebtn.classList.remove('hide');
})

pausebtn.addEventListener('click', function () {
  timer.stopTimer();
  sound.stop();
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
})

stopbtn.addEventListener("click", function () {
  timer.stopTimer();
  timer.giveMeANumber(25, 0);
  sound.stop();
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
})

addFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent);
  let seconds = Number(screenSeconds.textContent);
  timer.giveMeANumber(minutes + 5, seconds);
})

removeFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent);
  let seconds = Number(screenSeconds.textContent);
  if (minutes<=-1 && seconds<=-1) {
    timer.giveMeANumber(0, 0);
  } else {
    timer.giveMeANumber(minutes - 5, seconds);
  }
})

soundForest.addEventListener('click', function () {
  soundRain.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundForest.classList.add('selected');
  sound.stop();
  sound.check();
})

soundRain.addEventListener('click', function () {
  soundForest.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundRain.classList.add('selected');
  sound.stop();
  sound.check();
})

soundCoffeeShop.addEventListener('click', function () {
  soundForest.classList.remove('selected');
  soundRain.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundCoffeeShop.classList.add('selected');
  sound.stop();
  sound.check();
})

soundFireplace.addEventListener('click', function () {
  soundForest.classList.remove('selected');
  soundRain.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundFireplace.classList.add('selected');
  sound.stop();
  sound.check();
})