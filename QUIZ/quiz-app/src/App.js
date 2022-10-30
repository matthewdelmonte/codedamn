import { useState } from 'react';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { GameStateContext } from './utilities/Context';

import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finished' && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
