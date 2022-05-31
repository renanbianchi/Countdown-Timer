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

export {
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
}