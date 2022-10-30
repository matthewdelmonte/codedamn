import React, { useContext } from "react";
import { GameStateContext } from "../../utilities/Context";
import { Questions } from "../../utilities/Questions";

import "./style.css";


const EndScreen = () => {
    const { score, setScore, setGameState, userName } = useContext(GameStateContext);

    const handleRestartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    let finalScore;
    switch (score) {
        case 0:
            finalScore = ("You got 0% correct.");
            break;
        case 1:
            finalScore = ("You got 33% correct.");
            break;
        case 2:
            finalScore = ("You got 66% correct.");
            break;
        case 3:
            finalScore = ("You got 100% correct.");
            break;
        default:
    }

    return (
    <div className={"menu"}>
        <h1>That's it! Quiz over.</h1>
        <h2>{userName} you scored {score} out of {Object.keys(Questions).length}!</h2>
        <h2>{finalScore}</h2>
        <button onClick={() => {handleRestartQuiz()}}>Restart Quiz</button>
    </div>
    )
}

export default EndScreen;