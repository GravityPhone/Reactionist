import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import HiddenPage from "./HiddenPage";
import GuessingGame from "./GuessingGame";

function App() {
    const [visitedPages, setVisitedPages] = useState([]);
    const [wonGame, setWonGame] = useState(false);
    const [answeredRiddle, setAnsweredRiddle] = useState(false);

    const visitPage = (page) => {
        setVisitedPages([...visitedPages, page]);
    };

    const canAccessHiddenPage = wonGame || answeredRiddle;

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Hii steve</h1>
                    <NavBar visitPage={visitPage} />
                </header>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Page1 onAnswer={() => setAnsweredRiddle(true)} />
                        }
                    />
                    <Route
                        path="/page1"
                        element={
                            <Page1 onAnswer={() => setAnsweredRiddle(true)} />
                        }
                    />
                    <Route
                        path="/page2"
                        element={
                            <GuessingGame onWin={() => setWonGame(true)} />
                        }
                    />
                    {/* <Route
                        path="/hidden"
                        render={() =>
                            canAccessHiddenPage ? (
                                <HiddenPage />
                            ) : (
                                <Page1
                                    onAnswer={() => setAnsweredRiddle(true)}
                                />
                            )
                        }
                    /> */}
                    {/* Add more routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
