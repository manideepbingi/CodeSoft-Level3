import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>Company: </strong>{job.company}</p>
      <p><strong>Location: </strong>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobDetail;
