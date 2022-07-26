import React, {useEffect, useState} from 'react'
import { useTimerContext } from '../../context/TimerContext'
import Button from '../Buttons/Button'
import Progressbar from '../Progressbar/Progressbar'
import './Timer.css'

function Timer() {
  const {mode, setMode} = useTimerContext()

  // const setModeHandler = (type) => {
  //   console.log('tipo' + ' ' + type)
  //   setMode(type)
  // }


  return (
    <div className="wrapper">
      <div className="buttonsWrapper">
        <Button text={'Pomodoro'} onClick={() => setMode('pomodoro')}/>
        {mode}
        <Button text={'Pausinha'} onClick={() => setMode('sb')}      />
        <Button text={'Pausão'}   onClick={() => setMode('lb')}      />
      </div>
      <Progressbar />
    </div>
  )
}

export default Timer