import {screenMinutes, 
  screenSeconds, 
  playbtn, 
  pausebtn
} from "./elements.js"
import sounds from "./sounds.js"

let sound = sounds();
let itstime;

export function timers() {
function giveMeANumber(minutes, seconds) {
  screenMinutes.textContent = String(minutes).padStart(2, '0');
  screenSeconds.textContent = String(seconds).padStart(2, '0');
};

function TimeIsRunning() {
  itstime = setTimeout(function () {
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
      pausebtn.classList.add('hide');
      playbtn.classList.remove('hide');
      return;
    }
    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }
    
    giveMeANumber(minutes, --seconds);
    
    TimeIsRunning();
  }, 1000);
}

function stopTimer() {
  clearTimeout(itstime);
}

return {
  giveMeANumber,
  TimeIsRunning,
  stopTimer,
  };
}