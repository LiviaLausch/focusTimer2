import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');
  timer.countdown();
  if (state.isRunning === true) {
    const selectedButtonId = document.querySelector('.sounds button.selected').id
    switch (selectedButtonId) {
      case 'tree':
        stopAllSounds()
        if (sounds.treeSound) sounds.treeSound.play();
        break;
      case 'rain':
        stopAllSounds()
        if (sounds.rainSound) sounds.rainSound.play();
        break;
      case 'coffeeshop':
        stopAllSounds()
        if (sounds.coffeeshopSound) sounds.coffeeshopSound.play();
        break;
      case 'fire':
        stopAllSounds()
        if (sounds.fireSound) sounds.fireSound.play();
        break;
      default:
        break;
    }
  } else {
    stopAllSounds()
    soundButtons.forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  } 
}

function stopAllSounds() {
  if (sounds.treeSound) sounds.treeSound.pause();
  if (sounds.rainSound) sounds.rainSound.pause();
  if (sounds.coffeeshopSound) sounds.coffeeshopSound.pause();
  if (sounds.fireSound) sounds.fireSound.pause();
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}




