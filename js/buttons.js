import {
  playBtn,
  pauseBtn,
  soundForest,
  soundRain,
  soundCoffeeShop,
  soundFireplace,
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
  ship,
  main,
 } from "./elements.js";

 import sounds from './sounds.js'
 const sound = sounds();
 
export default function () {
    function lightOn() {
    lightmode.classList.add('hide');
    nightmode.classList.remove('hide');
    ship.classList.add('hide');
    main.classList.remove ('crt');
    document.documentElement.style.setProperty('--bg-color', '#121214');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--button-color', '#C4C4CC');
    document.documentElement.style.setProperty('--button-color-hover', '#525266');
    document.documentElement.style.setProperty('--icon-bg-color', '#29292E');
    document.documentElement.style.setProperty('--icon-color', '#C4C4CC');
    document.documentElement.style.setProperty('--icon-color-selected', '#FFFFFF');
    document.documentElement.style.setProperty('--icon-bg-color-selected', '#0A3442');
    document.documentElement.style.setProperty('--main-bg-color', '#10191D');
    document.documentElement.style.setProperty('--background-image', 'none');
    document.documentElement.style.setProperty('--svg-fill', 'black');
    document.documentElement.style.setProperty('--font-family', "'roboto', sans serif");
    
  }

  function nightOn() {
    nightmode.classList.add('hide');
    lightmode.classList.remove('hide');
    ship.classList.remove('hide');
    main.classList.remove ('crt');
    document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#323238');
    document.documentElement.style.setProperty('--button-color-hover', '#727281');
    document.documentElement.style.setProperty('--button-color', '#323238');
    document.documentElement.style.setProperty('--icon-bg-color', '#E1E1E6');
    document.documentElement.style.setProperty('--icon-color', '#323238');
    document.documentElement.style.setProperty('--icon-color-selected', '#FFFFFF');
    document.documentElement.style.setProperty('--icon-bg-color-selected', '#02799D');
    document.documentElement.style.setProperty('--main-bg-color', '#F3F3F3');
    document.documentElement.style.setProperty('--background-image', 'none');
    document.documentElement.style.setProperty('--font-family', "'roboto', sans serif");
  }

  function metroidOn() {
    lightmode.classList.add('hide');
    nightmode.classList.remove('hide');
    ship.classList.remove('selected');
    ship.classList.add('hide');
    main.classList.add ('crt');
    document.documentElement.style.setProperty('--bg-color', '#98b418');
    document.documentElement.style.setProperty('--text-color', '#8FCE00');
    document.documentElement.style.setProperty('--button-color', '#FDBC7C');
    document.documentElement.style.setProperty('--button-color-hover', '#974C01');
    document.documentElement.style.setProperty('--icon-bg-color', '#FDBC7C');
    document.documentElement.style.setProperty('--icon-color', '#2C9200');
    document.documentElement.style.setProperty('--icon-color-selected', '#FEF010');
    document.documentElement.style.setProperty('--icon-bg-color-selected', '#FDBC7C');
    document.documentElement.style.setProperty('--main-bg-color', '#2C9200');
    document.documentElement.style.setProperty('--background-image', 'url("images/Background.jpg")')
    document.documentElement.style.setProperty('--svg-fill', '#111111');
    document.documentElement.style.setProperty('--font-family', "'VT323', sans serif");
  }

  function pressPlay() {
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
  }

  function resetButtons() {
    pauseBtn.classList.add('hide');
    playBtn.classList.remove('hide');
  }

  function removeSelected() {
    bgForest.classList.remove('selected')
    bgRain.classList.remove('selected')
    bgFireplace.classList.remove('selected')
    bgCoffee.classList.remove('selected')
    soundCoffeeShop.classList.remove('selected');
    soundFireplace.classList.remove('selected');
    soundForest.classList.remove('selected');
    soundRain.classList.remove('selected');
    forestSlider.classList.add('hide');
    fireplaceSlider.classList.add('hide');
    rainSlider.classList.add('hide');
    coffeeSlider.classList.add('hide');
  }

  function forestSelected() {
    document.documentElement.style.setProperty('--height-low', '11.2rem')
    removeSelected();
    forestSlider.classList.remove('hide');
    bgForest.classList.add('selected');
    soundForest.classList.add('selected');
  }

  function rainSelected() {
    document.documentElement.style.setProperty('--height-low', '11.2rem')
    removeSelected();
    bgRain.classList.add('selected')
    soundRain.classList.add('selected');
    rainSlider.classList.remove('hide');
    
  }

  function coffeeSelected() {
    document.documentElement.style.setProperty('--height-low', '11.2rem')
    removeSelected();
    soundCoffeeShop.classList.add('selected');
    bgCoffee.classList.add('selected');
    coffeeSlider.classList.remove('hide');
  }

  function fireSelected() {
    document.documentElement.style.setProperty('--height-low', '11.2rem')
    removeSelected();
    soundFireplace.classList.add('selected');
    bgFireplace.classList.add('selected');
    fireplaceSlider.classList.remove('hide');
  }

  
  return {
    lightOn,
    nightOn,
    metroidOn,
    pressPlay,
    resetButtons,
    forestSelected,
    rainSelected,
    coffeeSelected,
    fireSelected,
  }
}