import React, {useState, useRef, useEffect, useContext} from 'react'
import { buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { TimerContext } from '../../context/TimerContext';
// import { useTimerContext } from '../../context/TimerContext';
import './Progressbar.css'

function Progressbar() {
  const [isPaused, setIsPaused] = useState(true)
  const [minutes, setMinutes] = useState(25)
  const [totalMinutes, setTotalMinutes] = useState(25)

  const {mode} = useContext(TimerContext)
  
  console.log(minutes)
  console.log('MODO: ' + mode)
  console.log('isPaused: ' + isPaused)
  const [seconds, setSeconds] = useState(0)
  

  const playHandler = () => {
    setIsPaused(!isPaused) //true ta pausado
  }

  const isFirstRender = useRef(true)

  //Detecar se é primeira render, se não for quer dizer que o modo mudou, portanto
  //tem que IsPaused(true).
  useEffect(() => {
    if(isFirstRender.current){
      console.log(isFirstRender)
      isFirstRender.current = false 
      return
    } 
    setIsPaused(true)
  
    console.log('oi')
  }, [mode])

  //Detecta mudança no mode, e seta os minutos e totalMinutes de acordo.
  useEffect(() => {
    if(mode === 'pomodoro'){
      setMinutes(25)
      setTotalMinutes(25)
      
    }
    else if(mode === 'sb'){
      setMinutes(5)
      setTotalMinutes(5)
    }
    else if (mode === 'lb'){
      setMinutes(15)
      setTotalMinutes(15)
    }
  }, [mode])
  
  //Lógica do timer
  useEffect(() => {
    if(!isPaused){
      let interval = setInterval(() => {
        clearInterval(interval)
        if (seconds === 0){
          if (minutes !== 0 ){
            setSeconds(59)
            setMinutes(minutes - 1)
            console.log('bosta')
          } else {
            //se minutos = 0
            // let minutes = displayMessage ? 24 : 4
            // let seconds = 59;
  
            setSeconds(seconds)
            setMinutes(minutes)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else {
      setSeconds(0)
    }
  }, [seconds, isPaused])


  //Lógica do timer
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

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
      </div>
    </div>
  )
}

export default Progressbar