import React, { useEffect, useRef } from 'react';
import './HiddenPage.css';

function HiddenPage() {
  const squareRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (squareRef.current) {
        squareRef.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Hidden Page</h2>
      <p>You found Dracula!</p>
      <div ref={squareRef} className="vibrating-square"></div>
    </div>
  );
}

export default HiddenPage;
