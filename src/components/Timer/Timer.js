import React, {useState} from 'react'
import { useTimerContext } from '../../context/TimerContext'
import Button from '../Buttons/Button'
import Progressbar from '../Progressbar/Progressbar'
import './Timer.css'

function Timer() {
  const {mode, dispatch} = useTimerContext()

  return (
    <div className="wrapper">
      <div className="buttonsWrapper">
        <Button text={'Pomodoro'} onClick={() => dispatch({type: 'pomodoro', payload: 'pomodoro'})}/>
        <Button text={'Pausinha'} onClick={() => dispatch({type: 'sb', payload: 'sb'})}      />
        <Button text={'Pausão'}   onClick={() => dispatch({type: 'lb', payload: 'lb'})}      />
      </div>
      <Progressbar />
    </div>
  )
}

export default Timer