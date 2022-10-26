import { useState } from 'react';
import Menu from './components/Menu';
import { GameStateContext } from './utilities/Context';

import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState}}>
        {gameState === 'menu' && <Menu />}
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
