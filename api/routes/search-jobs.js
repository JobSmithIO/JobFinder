
import express from 'express';
import { searchJobs } from '../api.js'; 

const router = express.Router();

router.post('/search-jobs', async (req, res) => {
  try {
    const searchParams = req.body;
    const results = await searchJobs(searchParams);
    res.json(results);
  } catch (error) {
    console.error('Error in /api/search-jobs:', error);
    res.status(500).json({ error: 'An error occurred while searching for jobs' });
  }
});

export default router;
