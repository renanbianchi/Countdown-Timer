import {soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
  playbtn,
  stopbtn,
  coffeeSlider,
  fireplaceSlider,
  rainSlider,
  forestSlider,
} from "./elements.js"


export default function() {
  const audioCafe = new Audio("./audio/Cafe.mp3")
  const audioForest = new Audio("./audio/Woods.mp3")
  const audioFire  = new Audio('./audio/Fire.mp3')
  const audioRain = new Audio("./audio/Rain.mp3")
  
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
  else {
    stopMusic();
  }
}

  function checkMusic() {
    if (playbtn.classList.contains('hide'))
    pressButton()
  }

  function setVolume () {
    audioCafe.volume = coffeeSlider.value / 100;
    audioRain.volume = rainSlider.value / 100;
    audioForest.volume = forestSlider.value / 100;
    audioFire.volume = fireplaceSlider.value / 100;
  }

  function stopMusic() {
    audioForest.pause();
    audioCafe.pause();
    audioFire.pause();
    audioRain.pause();

    stopbtn.onclick = function() {
      audioRain.currentTime = 0;
      audioForest.currentTime = 0;
      audioFire.currentTime = 0;
      audioCafe.currentTime = 0;
    }
  }
  

  return {
    audioForest,
    audioCafe,
    audioFire,
    audioRain,
    pressButton,
    stopMusic,
    checkMusic,
   }

}

