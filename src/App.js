import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import { TimerContext } from './context/TimerContext';

function App() {
  const [mode, setMode] = useState('pomodoro')
  const value = {mode, setMode}
  
  return (
    <TimerContext.Provider value={value}>
      <div className="App">
        <Timer />
      </div>
    </TimerContext.Provider>
   
  );
}

export default App;
