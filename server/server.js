// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import searchJobsRouter from './routes/search-jobs.js';
 dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
 
app.use('/api', searchJobsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
