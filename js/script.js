const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const addFiveMinutes = document.querySelector('.addFiveMinutes')
const removeFiveMinutes = document.querySelector('.removeFiveMinutes')
const pause = document.querySelector('.pause')
let soundForest = document.querySelector('.forest')
let soundRain = document.querySelector('.rain')
let soundCoffeeShop = document.querySelector('.coffeeShop')
let soundFireplace = document.querySelector('.fireplace')
let screenMinutes = document.querySelector('.minutes')
let screenSeconds = document.querySelector('.seconds')
let itsTime
let natureMusic = document.querySelector("#nature-music")
let fireMusic = document.querySelector("#fire-music")
let cafeMusic = document.querySelector("#cafe-music")
let rainMusic = document.querySelector("#rain-music")

function StopAllSound() {
  natureMusic.pause()
  natureMusic.currentTime = 0;
  rainMusic.pause()
  rainMusic.currentTime = 0;
  fireMusic.pause()
  fireMusic.currentTime = 0;
  cafeMusic.pause()
  cafeMusic.currentTime = 0;
}

function giveMeANumber(minutes, seconds) {
  screenMinutes.textContent = String(minutes).padStart(2, '0')
  screenSeconds.textContent = String(seconds).padStart(2, '0')
}

function TimeIsRunningOut() {
  itsTime = setTimeout(function () {
    let seconds = Number(screenSeconds.textContent)
    let minutes = Number(screenMinutes.textContent)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    giveMeANumber(minutes, --seconds)

    TimeIsRunningOut()
  }, 1000)
}

soundForest.addEventListener('click', function () {
  soundRain.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundForest.classList.add('selected')
})

soundRain.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundRain.classList.add('selected')
})

soundCoffeeShop.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundRain.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundCoffeeShop.classList.add('selected')
})

soundFireplace.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundRain.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundFireplace.classList.add('selected')
})


play.addEventListener('click', function () {
  TimeIsRunningOut()
  play.classList.add('hide')
  pause.classList.remove('hide')
  StopAllSound()
  if (soundForest.classList.contains = 'selected') {
    StopAllSound();
    natureMusic.play();
  }
  if (soundRain.classList.contains = 'selected') {
    StopAllSound();
     rainMusic.play();
     rainMusic.loop = true;
  }
  /* if (soundFireplace.classList.contains = 'selected') {
    StopAllSound();
     fireMusic.play();
     fireMusic.loop = true;
  } */
  
})

pause.addEventListener('click', function () {
  clearTimeout(itsTime)
  pause.classList.add('hide')
  play.classList.remove('hide')
})

stop.addEventListener('click', function () {
  clearTimeout(itsTime)
  giveMeANumber(25, 0)
  pause.classList.add('hide')
  play.classList.remove('hide')
  StopAllSound()
})

addFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent)
  let seconds = Number(screenSeconds.textContent)
  giveMeANumber(minutes + 5, seconds)
})

removeFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent)
  let seconds = Number(screenSeconds.textContent)
  giveMeANumber(minutes - 5, seconds)
})
