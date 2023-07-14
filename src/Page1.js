import React, { useState } from "react";
import Circle from "./Circle";
import "./Prose.css";

function Page1({ onAnswer }) {
    const [answer, setAnswer] = useState("");

    const handleAnswer = (e) => {
        e.preventDefault();
        if (answer.toLowerCase() === "the answer to the riddle") {
            onAnswer();
        }
    };

    return (
        <div>
            <h2>Page 1</h2>
            <p>Answer the riddle: What is the answer to the riddle?</p>
            <form onSubmit={handleAnswer}>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
                <button type="submit">Answer</button>
            </form>
            <Circle />
            <p className="prose">
                Castlevania: Symphony of the Night is a game that redefined the
                Castlevania series.
            </p>
        </div>
    );
}

export default Page1;
