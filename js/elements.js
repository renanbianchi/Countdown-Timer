const playbtn = document.querySelector('.play')
const stopbtn = document.querySelector('.stop')
const pausebtn = document.querySelector('.pause')
const addFiveMinutes = document.querySelector('.addFiveMinutes')
const removeFiveMinutes = document.querySelector('.removeFiveMinutes')
let soundForest = document.querySelector('.forest')
let soundRain = document.querySelector('.rain')
let soundCoffeeShop = document.querySelector('.coffeeShop')
let soundFireplace = document.querySelector('.fireplace')
let screenMinutes = document.querySelector('.minutes')
let screenSeconds = document.querySelector('.seconds')
let lightmode = document.querySelector('.lightmode')
let nightmode = document.querySelector('.nightmode')
let bgForest = document.querySelector('.bgforest')
let bgRain = document.querySelector('.bgrain')
let bgCoffee = document.querySelector('.bgcoffee')
let bgFireplace = document.querySelector('.bgfireplace')
let forestSlider = document.querySelector('.forest-range')
let rainSlider = document.querySelector('.rain-range')
let coffeeSlider = document.querySelector('.coffee-range')
let fireplaceSlider = document.querySelector('.fireplace-range')

export {
  nightmode,
  lightmode,
  playbtn,
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
  bgForest,
  bgRain,
  bgCoffee,
  bgFireplace,
  forestSlider,
  rainSlider,
  coffeeSlider,
  fireplaceSlider
}