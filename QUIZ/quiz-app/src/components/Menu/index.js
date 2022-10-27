import React, { useContext } from "react";
import { GameStateContext } from "../../utilities/Context";

import "./style.css";

function Menu() {
    // eslint-disable-next-line
    const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext);

    return (
        <div className="menu">
            <label>Enter your name:</label>
            <input type="text" placeholder="Ex. Rich Roll" onChange={(event) => {setUserName(event.target.value)}}/>
            <button onClick={() => {setGameState('playing')}}>Start Quiz</button>
        </div>
    );
}

export default Menu;