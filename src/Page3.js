import React from "react";
import Circle from "./Circle";
import "./Prose.css";

function Page3() {
    return (
        <div>
            <h2>Page 3</h2>
            <p>This is Page 3.</p>
            <Circle />
            <p className="prose">
                The game features RPG elements, a wide variety of weapons and
                spells, and a memorable soundtrack.
            </p>
        </div>
    );
}

export default Page3;
