const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')
const pauseBtn = document.querySelector('.pause')
const addFiveMinutes = document.querySelector('.addFiveMinutes')
const removeFiveMinutes = document.querySelector('.removeFiveMinutes')
const soundForest = document.querySelector('.forest')
const soundRain = document.querySelector('.rain')
const soundCoffeeShop = document.querySelector('.coffeeShop')
const soundFireplace = document.querySelector('.fireplace')
const screenMinutes = document.querySelector('.minutes')
const screenSeconds = document.querySelector('.seconds')
const forestsvg = document.querySelector('.forestsvg')
const coffeesvg = document.querySelector('.coffeesvg')
const rainsvg = document.querySelector('.rainsvg')
const firesvg = document.querySelector('.firesvg')
const morphsvg = document.querySelector('.morphsvg')
const metroidsvg = document.querySelector('.metroidsvg')
const ssvg = document.querySelector('.ssvg')
const samussvg = document.querySelector('.samussvg')
const lightmode = document.querySelector('.lightmode')
const nightmode = document.querySelector('.nightmode')
const bgForest = document.querySelector('.bgforest')
const bgRain = document.querySelector('.bgrain')
const bgCoffee = document.querySelector('.bgcoffee')
const bgFireplace = document.querySelector('.bgfireplace')
const forestSlider = document.querySelector('.forest-range')
const rainSlider = document.querySelector('.rain-range')
const coffeeSlider = document.querySelector('.coffee-range')
const fireplaceSlider = document.querySelector('.fireplace-range')
const ship = document.querySelector('.ship')
const main = document.querySelector('main')
const body = document.querySelector('body')

export {
  nightmode,
  lightmode,
  playBtn,
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
  bgForest,
  bgRain,
  bgCoffee,
  bgFireplace,
  forestSlider,
  rainSlider,
  coffeeSlider,
  fireplaceSlider,
  forestsvg,
  rainsvg,
  firesvg,
  metroidsvg,
  morphsvg,
  ssvg,
  samussvg,
  coffeesvg,
  ship,
  main,
  body,
}