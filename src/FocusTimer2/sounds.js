import state from "./state.js"

export const forestSound = new Audio('./assets/Floresta.wav')
export const rainSound = new Audio('./assets/Chuva.wav')
export const coffeeShop = new Audio('./assets/Cafeteria.wav')
export const firePlace = new Audio('./assets/Lareira.wav')

let sound

export const sounds = {
  forest: './assets/Floresta.wav',
  rain: './assets/Chuva.wav',
  coffeeShop: './assets/Cafeteria.wav',
  firePlace: './assets/Lareira.wav'
}


export function reset() {
  sound.pause()
  state.isRunning = false
  state.minutes = ""
  state.seconds = ""
  state.isMute = true
  state.id = null
  state.sound = null
}

export function toggleMusic(soundUrl) {  
  if (state.id === soundUrl) {
    reset()
    return
  }
  if(state.isRunning) {
    state.sound.pause()
    state.isMute = true
  }
  
    sound = new Audio(sounds[soundUrl])
    state.id = soundUrl
    
    state.sound = sound
    
    if(state.isMute) {
      sound.play()
      state.isRunning = true
      return
    }
  
  
}

