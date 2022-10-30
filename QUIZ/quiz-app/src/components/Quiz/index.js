import "./style.css";
import React, { useContext, useState } from "react";
import { GameStateContext } from "../../utilities/Context";
import { Questions } from "../../utilities/Questions";

function Quiz() {
    const { userName, setGameState } = useContext(GameStateContext);
    const { score, setScore } = useContext(GameStateContext);
    const [curQuestion, setCurQuestion] = useState(0);
    const [correct, setCorrect] = useState("");

    const handleAnswer = (response) => {
        if (Questions[curQuestion].answer === response) {
            setCorrect("Correct!")
            setScore(score + 1)
        } else {
            setCorrect("Sorry, incorrect.")
        }
    }

    const handleNextQuestion = () => {
        setCurQuestion(curQuestion + 1);
        setCorrect("");
    }

    const handleFinishQuiz = () => {
        setGameState('finished');
    }
            
    console.log(Questions[curQuestion])

    return (
        <div id={"quiz"} className={"menu"}>
            {curQuestion < 1 ? (
                <h2>Here is your first question, {userName}</h2>
                ) : 
                (curQuestion < Questions.length -1 ?
                <h2>Next question, {userName}</h2>
                :
                <h2>Last question, {userName}</h2>
                )
            }
            <h1>{Questions[curQuestion].prompt}</h1>
            <button onClick={() => {handleAnswer("option1")}}>{Questions[curQuestion].option1}</button>
            <button onClick={() => {handleAnswer("option2")}}>{Questions[curQuestion].option2}</button>
            <button onClick={() => {handleAnswer("option3")}}>{Questions[curQuestion].option3}</button>
            <button onClick={() => {handleAnswer("option4")}}>{Questions[curQuestion].option4}</button>
            <h2>{correct}</h2>
            {score > 0 && (
                <h2>{`Your score is ${score} out of ${Object.keys(Questions).length}`}</h2>
            )}
            {curQuestion === Questions.length -1 ? (
                <button onClick={() => {handleFinishQuiz()}}>End Quiz</button>
            ) : (
                <button onClick={() => {handleNextQuestion()}}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz;