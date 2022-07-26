import React, {useContext, createContext, useState, useEffect} from "react";

export const TimerContext = createContext({
  mode: '',
  setMode: () => {}
})



// export const TimerContextProvider = ({children}) => {
//   //states
//   const [mode, setMode] = useState('pomodoro')

//   const pomodoroMinutes = 25
//   const shortBreakMinutes = 5
//   const longBreakMinutes = 15

//   useEffect(() => {
//     console.log(mode)
//   }, [mode])
  

//   return (
//       <TimerContext.Provider 
//       value={{
//         setMode,
//         mode
//       }}>
//       {children}
//       </TimerContext.Provider>
//   )
// }

// export function useTimerContext(){
//   return useContext(TimerContext)
// }
