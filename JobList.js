// src/pages/JobList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then((res) => setJobs(res.data));
  }, []);
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <strong>{job.title}</strong> at {job.company} in {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobList;
