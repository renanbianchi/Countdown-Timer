import {playBtn,
  stopBtn,
  addFiveMinutes,
  removeFiveMinutes,
  pauseBtn,
  soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
  screenMinutes,
  screenSeconds,
  lightmode,
  nightmode,
  ship,
  main,
 } from "./elements.js";
import sounds from "./sounds.js";
import { timers } from "./timers.js";
import buttons from "./buttons.js";
const button = buttons();
const sound = sounds();
const timer = timers();


lightmode.addEventListener('click', function () {
  sound.stopMusic();
  button.lightOn();
  sound.restoreSounds();
})

nightmode.addEventListener('click', function() {
  sound.stopMusic();
  button.nightOn();
  sound.restoreSounds();
})

ship.addEventListener('click', function() {
  ship.classList.add('selected');
  sound.stopMusic();
  sound.shipSound.play();
  timer.stopTimer();
  sound.replaceSounds();
  button.resetButtons();
  main.classList.add ('blend');
  lightmode.classList.add('hide');
})

ship.addEventListener('animationend', function() {
  main.classList.remove('blend');
  button.metroidOn();
})

playBtn.addEventListener('click', function () {
  timer.TimeIsRunning();
  sound.pressButton();
  button.pressPlay();
})

pauseBtn.addEventListener('click', function () {
  timer.stopTimer();
  sound.stopMusic();
  button.resetButtons();
})

stopBtn.addEventListener("click", function () {
  sound.stopMusic();
  timer.stopTimer();
  timer.giveMeANumber(25, 0);
  button.resetButtons();
})

addFiveMinutes.addEventListener('click', function () {
  const minutes = Number(screenMinutes.textContent);
  const seconds = Number(screenSeconds.textContent);
  timer.giveMeANumber(minutes + 5, seconds);
  timer.checkTimer(minutes);
})

removeFiveMinutes.addEventListener('click', function () {
  const minutes = Number(screenMinutes.textContent);
  const seconds = Number(screenSeconds.textContent);
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