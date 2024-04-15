import { reset, toggleMusic } from "./sounds.js"
import state from "./state.js"
import * as el from './elements.js'

let btns = document.querySelectorAll('.sounds button')

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if(event.currentTarget.id === state.id) {
      document.querySelector('button.active').classList.remove('active')
    } else if(document.querySelector('button.active')) {
      document.querySelector(`button.active`).classList.remove('active')
      document.querySelector(`#${btn.id}`).classList.add('active')
    } else {
      btn.classList.add('active')
    
    }
    switch (btn.id) {
      case 'forest':
        toggleMusic(btn.id)
        break;
      case 'rain':
        toggleMusic(btn.id)
        break;
      case 'coffeeShop':
        toggleMusic(btn.id)
        break;
      case 'firePlace':
        toggleMusic(btn.id)
        break;
      default:
        
    }
  })
})


export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
      return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
      seconds = 59
      minutes--
  }

  if (minutes < 0) {
      reset()
      return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)

}

