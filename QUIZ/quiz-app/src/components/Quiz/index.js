import "./style.css";
import React, { useContext, useState } from "react";
import { GameStateContext } from "../../utilities/Context";
import { Questions } from "../../utilities/Questions";

function Quiz() {
    // eslint-disable-next-line
    const { userName, setUserName } = useContext(GameStateContext);
    const [curQuestion, setCurQuestion] = useState(0);
    const [correct, setCorrect] = useState("");

    const handleAnswer = (response) => {
        if (Questions[curQuestion].answer === response) {
            setCorrect("Correct!")
        } else {
            setCorrect("Sorry, incorrect.")
        }
    }

    const handleNextQuestion = () => {
        setCurQuestion(curQuestion + 1);
        setCorrect("");
    }

    return (
        <div id={"quiz"} className={"menu"}>
            <h2>Hi {userName}!</h2>
            <h1>{Questions[curQuestion].prompt}</h1>
            <button onClick={() => {handleAnswer("option1")}}>{Questions[curQuestion].option1}</button>
            <button onClick={() => {handleAnswer("option2")}}>{Questions[curQuestion].option2}</button>
            <button onClick={() => {handleAnswer("option3")}}>{Questions[curQuestion].option3}</button>
            <button onClick={() => {handleAnswer("option4")}}>{Questions[curQuestion].option4}</button>
            <h2>{correct}</h2>
            <button onClick={() => {handleNextQuestion()}}>Next Question</button>
        </div>
    )
}

export default Quiz;