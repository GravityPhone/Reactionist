import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ visitPage }) {
  return (
    <nav>
      <ul>
        <li><Link to="/page1" onClick={() => visitPage('Page1')}>1</Link></li>
        <li><Link to="/page2" onClick={() => visitPage('Page2')}>2</Link></li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
}

export default NavBar;
