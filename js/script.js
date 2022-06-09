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
  screenSeconds,
  lightmode,
  nightmode,
 } from "./elements.js";
import sounds from "./sounds.js";
import { timers } from "./timers.js"
import buttons from "./buttons.js"

const button = buttons();
const sound = sounds();
const timer = timers();

lightmode.addEventListener('click', function () {
  button.lighton();
})

nightmode.addEventListener('click', function() {
  button.nighton();
})


playbtn.addEventListener('click', function () {
  timer.TimeIsRunning();
  sound.pressButton();
  button.pressPlay()
})

pausebtn.addEventListener('click', function () {
  timer.stopTimer();
  sound.stopMusic();
  button.resetButtons();
})

stopbtn.addEventListener("click", function () {
  timer.stopTimer();
  timer.giveMeANumber(25, 0);
  sound.stopMusic();
  button.resetButtons();
})



addFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent);
  let seconds = Number(screenSeconds.textContent);
  timer.giveMeANumber(minutes + 5, seconds);
  timer.checkTimer(minutes);
})

removeFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent);
  let seconds = Number(screenSeconds.textContent);
  timer.giveMeANumber(minutes - 5, seconds);
  timer.checkTimer(minutes);
})

soundForest.addEventListener('click', function () {
  button.forestSelected();
  sound.stopMusic();
  sound.checkMusic();
})

soundRain.addEventListener('click', function () {
  button.rainSelected();
  sound.stopMusic();
  sound.checkMusic();
})

soundCoffeeShop.addEventListener('click', function () {
  button.coffeeSelected();
  sound.stopMusic();
  sound.checkMusic();
})

soundFireplace.addEventListener('click', function () {
  button.fireSelected();
  sound.stopMusic();
  sound.checkMusic();
})