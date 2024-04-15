import * as el from './elements.js'
import { countdown, updateDisplay } from "./timer.js"
import state from './state.js'
import { reset } from "./sounds.js"

export function plus() {
  let time = String(Number(el.minutes.textContent) + 5)
  el.minutes.textContent = String(time).padStart(2, "0")
  //el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function minus() {
  let time = Number(el.minutes.textContent)
  if(time <= 0 || time - 5 < 0) {
    updateDisplay("","")
    return
  }
  time = String(Number(el.minutes.textContent) - 5)
  el.minutes.textContent = String(time).padStart(2, "0")
  //el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function playTimer() {
  state.isRunning = !state.isRunning
  document.documentElement.classList.add('running')
  countdown()
}

export function stopTimer() {
  state.isRunning = !state.isRunning
  document.documentElement.classList.remove('running')
  reset()
  updateDisplay()
}
