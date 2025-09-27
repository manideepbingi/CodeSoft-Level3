import React from 'react';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="center-container">
      <h1>Welcome to the Job Board</h1>
      <p>Find your dream job!</p>
      <nav>
        <ul>
          <li><Link to="/jobs">View Job Listings</Link></li>
          <li><Link to="/jobs/1">View Example Job Details</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
