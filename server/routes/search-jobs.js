
import express from 'express';
import { searchJobs } from '../controllers/api.js'; 

const router = express.Router();

router.post('/search-jobs',searchJobs, (req, res) => {
});

export default router;
