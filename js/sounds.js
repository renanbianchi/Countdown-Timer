import {soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
  playBtn,
  stopBtn,
  coffeeSlider,
  fireplaceSlider,
  rainSlider,
  forestSlider,
} from "./elements.js"

export default function() {
  let audioCafe = new Audio("./audio/Cafe.mp3")
  let audioForest = new Audio("./audio/Woods.mp3")
  let audioFire  = new Audio('./audio/Fire.mp3')
  let audioRain = new Audio("./audio/Rain.mp3")
  let shipSound = new Audio("./audio/Arrival.mp3")

  function restoreSounds() {
    audioCafe = new Audio("./audio/Cafe.mp3")
    audioForest = new Audio("./audio/Woods.mp3")
    audioFire  = new Audio('./audio/Fire.mp3')
    audioRain = new Audio("./audio/Rain.mp3")
    shipSound = new Audio("./audio/Arrival.mp3")
  }

  function replaceSounds() {
    audioForest = new Audio("./audio/Brinstar.mp3")
    audioRain = new Audio("./audio/CrateriaRain.mp3")
    audioCafe = new Audio("./audio/Maridia.mp3")
    audioFire  = new Audio('./audio/Samus.mp3')
  }
  
  function pressButton() {
  if (soundForest.classList.contains('selected')) {
    stopMusic();
    audioForest.play();
    audioForest.loop = true;
    forestSlider.addEventListener('change', function() {
      setVolume(soundForest);
    })
  }
  else if (soundRain.classList.contains('selected')) {
    stopMusic();
    audioRain.play();
    audioRain.loop = true;
    rainSlider.addEventListener('change', function() {
      setVolume(soundRain);
    })
  }
  else if (soundCoffeeShop.classList.contains('selected')) {
    stopMusic();
    audioCafe.play();
    audioCafe.loop = true;
    coffeeSlider.addEventListener('change', function () {
      setVolume(soundCoffeeShop);
    })
    
  }
  else if (soundFireplace.classList.contains('selected')) {
    stopMusic();
    audioFire.play();
    audioFire.loop = true;
    fireplaceSlider.addEventListener('change', function() {
      setVolume(soundFireplace);
    })
  }
}

function stopMusic() {
  audioForest.pause();
  audioCafe.pause();
  audioFire.pause();
  audioRain.pause();

  stopBtn.onclick = function() {
    audioRain.currentTime = 0;
    audioForest.currentTime = 0;
    audioFire.currentTime = 0;
    audioCafe.currentTime = 0;
  }
}
function checkMusic() {
    if (playBtn.classList.contains('hide'))
    pressButton()
}

function setVolume () {
    audioCafe.volume = coffeeSlider.value / 100;
    audioRain.volume = rainSlider.value / 100;
    audioForest.volume = forestSlider.value / 100;
    audioFire.volume = fireplaceSlider.value / 100;
}

  

  return {
    audioForest,
    audioCafe,
    audioFire,
    audioRain,
    shipSound,
    pressButton,
    stopMusic,
    checkMusic,
    replaceSounds,
    restoreSounds,
   }

}

