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
  bgForest,
  bgRain,
  bgCoffee,
  bgFireplace,
  forestSlider,
  fireplaceSlider,
  rainSlider,
  coffeeSlider,
 } from "./elements.js";
import sounds from "./sounds.js";
import { timers } from "./timers.js"
let sound = sounds();
let timer = timers();

lightmode.addEventListener('click', function () {
  lightmode.classList.add('hide');
  nightmode.classList.remove('hide');
  document.documentElement.style.setProperty('--bg-color', '#121214');
  document.documentElement.style.setProperty('--text-color', '#FFFFFF');
  document.documentElement.style.setProperty('--button-color', '#C4C4CC');
  document.documentElement.style.setProperty('--button-color-hover', '#525266');
  document.documentElement.style.setProperty('--icon-bg-color', '#29292E');
  document.documentElement.style.setProperty('--icon-color', '#C4C4CC');
  document.documentElement.style.setProperty('--icon-bg-color-selected', '#0A3442');
  document.documentElement.style.setProperty('--main-bg-color', '#10191D')
})

nightmode.addEventListener('click', function() {
  nightmode.classList.add('hide');
  lightmode.classList.remove('hide');
  document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
  document.documentElement.style.setProperty('--text-color', '#323238');
  document.documentElement.style.setProperty('--button-color-hover', '#727281');
  document.documentElement.style.setProperty('--button-color', '#323238');
  document.documentElement.style.setProperty('--icon-bg-color', '#E1E1E6');
  document.documentElement.style.setProperty('--icon-color', '#323238');
  document.documentElement.style.setProperty('--icon-bg-color-selected', '#02799D');
  document.documentElement.style.setProperty('--main-bg-color', '#F3F3F3');
})


playbtn.addEventListener('click', function () {
  timer.TimeIsRunning();
  sound.pressButton();
  playbtn.classList.add('hide');
  pausebtn.classList.remove('hide');
})

pausebtn.addEventListener('click', function () {
  timer.stopTimer();
  sound.stopMusic();
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
})

stopbtn.addEventListener("click", function () {
  timer.stopTimer();
  timer.giveMeANumber(25, 0);
  sound.stopMusic();
  pausebtn.classList.add('hide');
  playbtn.classList.remove('hide');
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
  document.documentElement.style.setProperty('--height-low', '11.2rem')
  bgForest.classList.add('selected')
  bgRain.classList.remove('selected')
  bgFireplace.classList.remove('selected')
  bgCoffee.classList.remove('selected')
  forestSlider.classList.remove('hide')
  fireplaceSlider.classList.add('hide')
  rainSlider.classList.add('hide')
  coffeeSlider.classList.add('hide')
  soundRain.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundForest.classList.add('selected');
  sound.stopMusic();
  sound.checkMusic();
})

soundRain.addEventListener('click', function () {
  document.documentElement.style.setProperty('--height-low', '11.2rem')
  bgRain.classList.add('selected')
  bgForest.classList.remove('selected')
  bgCoffee.classList.remove('selected')
  bgFireplace.classList.remove('selected')
  forestSlider.classList.add('hide')
  fireplaceSlider.classList.add('hide')
  rainSlider.classList.remove('hide')
  coffeeSlider.classList.add('hide')
  soundForest.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundRain.classList.add('selected');
  sound.stopMusic();
  sound.checkMusic();
})

soundCoffeeShop.addEventListener('click', function () {
  document.documentElement.style.setProperty('--height-low', '11.2rem')
  bgForest.classList.remove('selected');
  bgRain.classList.remove('selected');
  bgCoffee.classList.add('selected');
  bgFireplace.classList.remove('selected');
  forestSlider.classList.add('hide');
  fireplaceSlider.classList.add('hide');
  rainSlider.classList.add('hide');
  coffeeSlider.classList.remove('hide');
  soundForest.classList.remove('selected');
  soundRain.classList.remove('selected');
  soundFireplace.classList.remove('selected');
  soundCoffeeShop.classList.add('selected');
  sound.stopMusic();
  sound.checkMusic();
})

soundFireplace.addEventListener('click', function () {
  document.documentElement.style.setProperty('--height-low', '11.2rem')
  bgForest.classList.remove('selected');
  bgRain.classList.remove('selected');
  bgCoffee.classList.remove('selected');
  bgFireplace.classList.add('selected');
  forestSlider.classList.add('hide');
  fireplaceSlider.classList.remove('hide');
  rainSlider.classList.add('hide');
  coffeeSlider.classList.add('hide');
  soundForest.classList.remove('selected');
  soundRain.classList.remove('selected');
  soundCoffeeShop.classList.remove('selected');
  soundFireplace.classList.add('selected');
  sound.stopMusic();
  sound.checkMusic();
})