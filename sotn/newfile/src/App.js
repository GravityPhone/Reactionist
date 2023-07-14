import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Page1 from './Page1';
import Page2 from './Page2';
import HiddenPage from './HiddenPage';

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
          <h1>Welcome to the Castlevania: Symphony of the Night Fan Site!</h1>
          <NavBar visitPage={visitPage} />
        </header>
        <main>
          <Route path="/page1" render={() => <Page1 onAnswer={() => setAnsweredRiddle(true)} />} />
          <Route path="/page2" render={() => <GuessingGame onWin={() => setWonGame(true)} />} />
          <Route path="/hidden" render={() => (
            canAccessHiddenPage ? <HiddenPage /> : <Redirect to="/page1" />
          )} />
          {/* Add more routes here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
