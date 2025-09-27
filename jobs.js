const router = require('express').Router();
const Job = require('../models/Job');

// Create job
router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Get all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
