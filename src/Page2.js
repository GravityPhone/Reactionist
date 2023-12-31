import React from "react";
import Circle from "./Circle";
import "./Prose.css";

function Page2() {
    return (
        <div>
            <h2>Page 2</h2>
            <p>This is Page 2.</p>
            <Circle />
            <p className="prose">
                With its non-linear exploration-based gameplay, it introduced
                the "Metroidvania" genre.
            </p>
        </div>
    );
}

export default Page2;
