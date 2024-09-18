// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import searchJobsRouter from './api/routes/search-jobs.js';
import favoritesRouter from './database/routes/favoritesController.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

app.use('/api', searchJobsRouter);
app.use('/db', favoritesRouter);

//404 error - no end route
app.use((req, res) => {
  return res.status(404).send('Page not found');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErrObj = {
    log: 'Middleware error has occurred',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErrObj, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
