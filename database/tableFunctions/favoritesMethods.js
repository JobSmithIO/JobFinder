// Co-authored by Brian N. & Erin L.
import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

// Create a pool instance to manage connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false, sslmode: 'require' } : false,
});

export class favoritesMethods {
  //create
  static async createFave(data) {
    const { job_title, link, user_id, status } = data;
    const checkQuery =
      'SELECT * FROM favorites WHERE user_id = $1 AND job_title = $2';
    const values = [user_id, job_title];
    try {
      const result = await pool.query(checkQuery, values);
      if (result.rows.length > 0) {
        throw new Error('Job posting is already favorited');
      }
      const insertQuery =
        'INSERT INTO favorites (user_id, job_title, link, status) VALUES ($1, $2, $3, $4) RETURNING id, created_at, job_title, link, status';
      const insertValues = [user_id, job_title, link, status];
      const insertResults = await pool.query(insertQuery, insertValues);
      return insertResults.rows[0];
    } catch (err) {
      console.error('Error in createFave:', err);
      throw err;
    }
  }
  //read
  static async getFaves(userId) {
    const checkQuery = 'SELECT * FROM favorites WHERE user_id = $1';
    const values = [userId];
    try {
      const result = await pool.query(checkQuery, values);
      return result.rows;
    } catch (err) {
      console.error('Error in getFaves:', err);
      throw err;
    }
  }
  //update
  static async updateFave(faveID, newStatus) {
    const updateQuery =
      'UPDATE favorites SET status = $1 WHERE id = $2 RETURNING id, created_at, job_title, link, status';
    const values = [newStatus, faveID];
    try {
      const result = await pool.query(updateQuery, values);
      return result.rows[0];
    } catch (err) {
      console.error('Error in updateFave:', err);
      throw err;
    }
  }
  //delete
  static async deleteFave(faveID) {
    const deleteQuery = 'DELETE FROM favorites WHERE id = $1';
    const values = [faveID];
    try {
      await pool.query(deleteQuery, values);
      return { message: 'Favorite deleted' };
    } catch (err) {
      console.error('Error in deleteFave: ', err);
      throw err;
    }
  }
}
