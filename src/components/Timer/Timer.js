import React, {useContext, useEffect, useState} from 'react'
import { TimerContext } from '../../context/TimerContext'
// import { useTimerContext } from '../../context/TimerContext'
import Button from '../Buttons/Button'
import Progressbar from '../Progressbar/Progressbar'
import './Timer.css'

function Timer() {
  const {mode, setMode} = useContext(TimerContext)

  // const setModeHandler = (type) => {
  //   console.log('tipo' + ' ' + type)
  //   setMode(type)
  // }


  return (
    <div className="wrapper">
      <div className="buttonsWrapper">
        <button text={'Pomodoro'} onClick={() => setMode('pomodoro')}  className='button-59'> Pomodoro </button>
        <button text={'Pausinha'} onClick={() => setMode('sb')}  className='button-59'      > Pausa curta</button>
        <button text={'Pausão'}   onClick={() => setMode('lb')}    className='button-59'    > Pausa grande</button>
      </div>
      <Progressbar />
    </div>
  )
}

export default Timer