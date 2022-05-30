import {elements} from "./elements.js";
import sounds from "./sounds.js";
let sound = sounds();

let {
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
  itsTime,
} = elements;


function giveMeANumber(minutes, seconds) {
  screenMinutes.textContent = String(minutes).padStart(2, '0');
  screenSeconds.textContent = String(seconds).padStart(2, '0');
};

function TimeIsRunningOut() {
  itsTime = setTimeout(function () {
    let seconds = Number(screenSeconds.textContent);
    let minutes = Number(screenMinutes.textContent);
    
    if (minutes >= 100) {
      sound.stop();
      giveMeANumber(25, 0);
      alert("Whoa, take it easy! you got plenty of time, don't you?");
      pausebtn.classList.add('hide');
      playbtn.classList.remove('hide');
      return;
    }
    
    if (minutes < 0 ) {
      sound.stop();
      alert("Time is up!");
      giveMeANumber(25, 0);
      pausebtn.classList.add('hide')
      playbtn.classList.remove('hide')
      return;
    }
    if (seconds <= 0) {
      seconds = 3;
      --minutes;
    }
    
    giveMeANumber(minutes, --seconds);
    
    TimeIsRunningOut();
  }, 1000);
};


playbtn.addEventListener('click', function () {
  TimeIsRunningOut()
  sound.pressButton()
  playbtn.classList.add('hide')
  pausebtn.classList.remove('hide')
})

pausebtn.addEventListener('click', function () {
  clearTimeout(itsTime)
  sound.stop()
  pausebtn.classList.add('hide')
  playbtn.classList.remove('hide')
})

stopbtn.addEventListener('click', function () {
  clearTimeout(itsTime)
  giveMeANumber(25, 0)
  sound.stop()
  pausebtn.classList.add('hide')
  playbtn.classList.remove('hide')
  
})

addFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent)
  let seconds = Number(screenSeconds.textContent)
  giveMeANumber(minutes + 5, seconds)
})

removeFiveMinutes.addEventListener('click', function () {
  let minutes = Number(screenMinutes.textContent)
  let seconds = Number(screenSeconds.textContent)
  if (minutes<=-1 && seconds<=-1) {
    giveMeANumber(0, 0);
  }
  else {giveMeANumber(minutes - 5, seconds)}
})

soundForest.addEventListener('click', function () {
  soundRain.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundForest.classList.add('selected')
  sound.stop()
  sound.check()
})

soundRain.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundRain.classList.add('selected')
  sound.stop()
  sound.check()
})

soundCoffeeShop.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundRain.classList.remove('selected')
  soundFireplace.classList.remove('selected')
  soundCoffeeShop.classList.add('selected')
  sound.stop()
  sound.check()
})

soundFireplace.addEventListener('click', function () {
  soundForest.classList.remove('selected')
  soundRain.classList.remove('selected')
  soundCoffeeShop.classList.remove('selected')
  soundFireplace.classList.add('selected')
  sound.stop()
  sound.check()
})