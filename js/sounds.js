import {soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
  playbtn
} from "./elements.js"


export default function() {
  const audioCafe = new Audio("./audio/Cafe.mp3")
  const audioForest = new Audio("./audio/Woods.mp3")
  const audioFire  = new Audio('./audio/Fire.mp3')
  const audioRain = new Audio("./audio/Rain.mp3")
  
  function pressButton() {
  if (soundForest.classList.contains('selected')) {
    stop();
    audioForest.play();
    audioForest.loop = true;
  }
  else if (soundRain.classList.contains('selected')) {
    stop();
    audioRain.play();
    audioForest.loop = true;
  }
  else if (soundCoffeeShop.classList.contains('selected')) {
    stop();
    audioCafe.play();
    audioCafe.loop = true;
  }
  else if (soundFireplace.classList.contains('selected')) {
    stop();
    audioFire.play();
    audioFire.loop = true;
  } 
}

  function check() {
    if (playbtn.classList.contains('hide'))
    pressButton()
  }

  function stop() {
    audioForest.pause()
    audioCafe.pause()
    audioFire.pause()
    audioRain.pause()
    audioRain.currentTime = 0;
    audioForest.currentTime = 0;
    audioFire.currentTime = 0;
    audioCafe.currentTime = 0;
  }

  return {
    pressButton,
    audioCafe,
    audioForest,
    audioFire,
    audioRain,
    stop,
    check,
   }

}

