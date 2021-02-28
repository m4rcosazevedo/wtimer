(() => {
  const MAIN = 'main'
  const CHRONOMETER = 'wTimer'
  const BTN_START = 'start'
  const BTN_MSTART = 'minStart'
  const BTN_STOP = 'stop'
  const TIMER = 0

  class ChronometerComponent {
    constructor () {
      this.init()
    }

    state = {
      btnStart: document.getElementById(BTN_START),
      btnMStart: document.getElementById(BTN_MSTART),
      btnStop: document.getElementById(BTN_STOP),
      main: document.getElementById(MAIN),
      chronometer: document.getElementById(CHRONOMETER),
      interval: undefined,
      count: TIMER
    }

    formatSeconds = (seconds) => {
      return new Date(0,0,0,0,0,Number(seconds)).toLocaleTimeString()
    }

    stopChronometer = () => {
      this.state.btnStart.removeEventListener('click', this.startChronometer)
      this.state.btnMStart.removeEventListener('click', this.startChronometer)

      this.state.chronometer.innerHTML = this.formatSeconds(TIMER)
      clearInterval(this.state.interval)
      this.state.count = TIMER

      this.state.btnMStart.addEventListener('click', this.startChronometer)
      this.state.btnStop.setAttribute('class', 'hidden')
      this.state.btnMStart.removeAttribute('class')
    }

    startChronometer = () => {
      this.state.main.removeAttribute('class')
      this.state.btnStart.setAttribute('class', 'hidden')
      this.state.btnMStart.setAttribute('class', 'hidden')
      this.state.btnStop.removeAttribute('class')

      this.state.interval = setInterval(() => {
        this.state.chronometer.innerHTML = this.formatSeconds(this.state.count++)
      }, 1000)
      this.state.btnStop.addEventListener('click', this.stopChronometer)
    }

    init (){
      this.state.btnStop.removeEventListener('click', this.stopChronometer)
      this.state.btnStart.addEventListener('click', this.startChronometer)
    }
  }

  window.ChronometerComponent = ChronometerComponent

})()
