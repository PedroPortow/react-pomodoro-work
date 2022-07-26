import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';

function App() {
  const [mode, setMode] = useState('pomodoro')
  const value = {mode, setMode}
  
  return (
    <div className="App">
      <Timer />
      
    </div>
  );
}

export default App;
