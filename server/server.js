// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import searchJobsRouter from './routes/search-jobs.js';
import favoritesRouter from '../database/routes/favoritesController.js';
import bcrypt from 'bcrypt';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

app.use('/api', searchJobsRouter);
app.use('/db', favoritesRouter);

app.post('/api/users', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [
      username,
    ]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ id: user.id, username: user.username });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
