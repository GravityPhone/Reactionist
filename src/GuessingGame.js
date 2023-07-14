import React, { useState, useEffect } from 'react';

function GuessingGame({ onWin }) {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const correctNumber = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    if(timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setMessage('Time\'s up! You lost.');
    }
  }, [timeLeft]);

  const handleGuess = (e) => {
    e.preventDefault();
      if (+guess === correctNumber) {
        setMessage('Congratulations! You guessed the number.');
        onWin();
      } else {
        setMessage('Sorry, that\'s not correct. Try again.');
      }
  };

  return (
    <div>
      <h2>Guessing Game</h2>
      <p>Guess a number between 1 and 10. You have {timeLeft} seconds left.</p>
      <form onSubmit={handleGuess}>
        <input type="number" min="1" max="10" value={guess} onChange={(e) => setGuess(e.target.value)} required />
        <button type="submit">Guess</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default GuessingGame;
