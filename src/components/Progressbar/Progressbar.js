import React, {useState, useRef, useEffect, useContext} from 'react'
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { TimerContext } from '../../context/TimerContext';
// import { useTimerContext } from '../../context/TimerContext';
import './Progressbar.css'

function Progressbar() {
  const [isPaused, setIsPaused] = useState(true)
  // const { mode} = useTimerContext()
  const {mode, setMode} = useContext(TimerContext)

  const [minutes, setMinutes] = useState(() => {
    if(mode === 'pomodoro'){
     return 25
    } else if (mode === 'sb'){
     return 5
    } else if (mode === 'lb'){
     return 15
    }
  })



  console.log(minutes)
  const [seconds, setSeconds] = useState(0)
  const [displayMessage, setDisplayMessage] = useState(false)

  const playHandler = () => {
    setIsPaused(!isPaused) //true ta pausado
  }

  useEffect(() => {
    if(!isPaused){
      let interval = setInterval(() => {
        clearInterval(interval)
        if (seconds === 0){
          if (minutes !== 0 ){
            setSeconds(59)
            setMinutes(minutes - 1)
          } else {
            let minutes = displayMessage ? 24 : 4
            let seconds = 59;
  
            setSeconds(seconds)
            setMinutes(minutes)
            setDisplayMessage(!displayMessage)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } 
  }, [seconds, isPaused])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds
  const totalMinutes = 25
  const percentage = totalMinutes - minutes 



  return (
    <div className='wrapperBar'>
      <CircularProgressbar
        value={percentage}
        text={`${timerMinutes}:${timerSeconds}`}
        styles={buildStyles({
        textColor:'#fff',
        pathColor: '#393e46',
        tailColor:'rgba(255,255,255,.2)',
      })} />
      <div className='playPauseButtons'>
        {isPaused 
          ? <i className="fa-solid fa-play" onClick={playHandler}/> 
          : <i className="fa-solid fa-pause"  onClick={playHandler}/> 
        }
      </div>
      <div className='playPauseButtons'>
        <h2 className='textH2'>{mode === 'pomodoro' ? 'Hora de focar!' : 'Hora de uma pausa'}</h2>
        {mode}
      </div>
    </div>
  )
}

export default Progressbar