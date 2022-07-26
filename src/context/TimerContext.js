import React, {useContext, createContext, useState, useEffect, useReducer} from "react";

const TimerContext = createContext()

const modeReducer = (state, action) => {
  switch(action.type){
      case 'pomodoro':
          return state = action.payload
      case 'sb':
        return state = 'sb'
      case 'lb':
        return state = 'lb'
      default:
          return state = 'pica'
  }
  
}

export const TimerContextProvider = ({children}) => {
  //states
  const [mode, dispatch] = useReducer(modeReducer)
  const pomodoroMinutes = 25
  const shortBreakMinutes = 5
  const longBreakMinutes = 15

  useEffect(() => {
    console.log(mode)
  }, [mode])
  

  return (
      <TimerContext.Provider 
      value={{
        pomodoroMinutes,
        shortBreakMinutes,
        longBreakMinutes,
        dispatch,
        mode
      }}>
      {children}
      </TimerContext.Provider>
  )
}

export function useTimerContext(){
  return useContext(TimerContext)
}
