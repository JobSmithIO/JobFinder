import pkg from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

const { Pool } = pkg;
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

// Create a pool instance to manage connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false, sslmode: 'require' } : false,
});

export class userMethods {
  static async createUser(username, password) {
    //validation
    if (username && typeof username !== 'string') {
      throw new Error('Validation Error: username must be a string');
    }
    if (hashedPassword && typeof hashedPassword !== 'string') {
      throw new Error('Validation Error: password must be a string');
    }
    if (username) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        throw new Error(
          'Validation Error: username must be a valid email address'
        );
      }
    }
    //check to see if username already exists
    const checkQuery = 'SELECT * FROM "users" WHERE username = $1';
    const values = [username];

    try {
      const result = await pool.query(checkQuery, values);
      if (result.rows.length > 0) {
        throw new Error('Username already exists');
      }
      const saltRounds = 10;
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Insert the new user
      const insertQuery =
        'INSERT INTO "Users" (username, password) VALUES ($1, $2) RETURNING id, username, created_at';
      const insertValues = [username, hashedPassword];
      await pool.query(insertQuery, insertValues);
      return insertResult.rows[0];
    } catch (err) {
      console.error('Error in createUser:', err);
      throw err;
    }
  }

  static async userLogin(username, password) {
    //validation
    if (username && typeof username !== 'string') {
      throw new Error('Validation Error: username must be a string');
    }
    if (password && typeof password !== 'string') {
      throw new Error('Validation Error: password must be a string');
    }
    if (username) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        throw new Error(
          'Validation Error: username must be a valid email address'
        );
      }
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const checkQuery =
      'SELECT * FROM "users" WHERE username = $1 AND password = $2';
    const values = [username, hashedPassword];

    try {
      const result = await pool.query(checkQuery, values);
      if (result.rows.length === 0) {
        throw new Error('Email or password is incorrect');
      }
      return result.rows[0];
    } catch (err) {
      console.error('Error in userLogin:', err);
      throw err;
    }
  }
}

export const createUser = userMethods.createUser;
export const userLogin = userMethods.userLogin;
