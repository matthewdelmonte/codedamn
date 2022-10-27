import "./style.css";
import React, { useContext } from "react";
import { GameStateContext } from "../../utilities/Context";

function Quiz() {
    // eslint-disable-next-line
    const { userName, setUserName } = useContext(GameStateContext);

    return (
        <div className={"menu"}>
            <p>{userName}</p>
        </div>
    )
}

export default Quiz;