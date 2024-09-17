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

export class QueriedJobSchema {
  static async createQueriedJob(data) {
    const { job_title, location, salary, company_name, link, favorite } = data;

    // Validation
    if (job_title && typeof job_title !== 'string') {
      throw new Error('Validation Error: job_title must be a string');
    }
    if (location && typeof location !== 'string') {
      throw new Error('Validation Error: location must be a string');
    }
    if (salary && !Number.isInteger(salary)) {
      throw new Error('Validation Error: salary must be an integer');
    }
    if (company_name && typeof company_name !== 'string') {
      throw new Error('Validation Error: company_name must be a string');
    }
    if (link && typeof link !== 'string') {
      throw new Error('Validation Error: link must be a string');
    }
    if (favorite !== undefined && typeof favorite !== 'boolean') {
      throw new Error('Validation Error: favorite must be a boolean');
    }

    const query = `
      INSERT INTO "QueriedJobs" (job_title, location, salary, company_name, link, favorite)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [job_title, location, salary, company_name, link, favorite];

    try {
      const res = await pool.query(query, values);
      console.log('Inserted QueriedJob:', res.rows[0]);
      return res.rows[0];
    } catch (err) {
      console.error('Error inserting QueriedJob:', err);
      throw err;
    }
  }

  static async getAllQueriedJobs() {
    const query = 'SELECT * FROM "QueriedJobs";';

    try {
      const res = await pool.query(query);
      return res.rows;
    } catch (err) {
      console.error('Error fetching QueriedJobs:', err);
      throw err;
    }
  }

  static async updateFavoriteStatus(id, favorite) {
    const query = `
      UPDATE "QueriedJobs"
      SET favorite = $1
      WHERE id = $2
      RETURNING *;
    `;

    const values = [favorite, id];

    try {
      const res = await pool.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.error('Error updating favorite status:', err);
      throw err;
    }
  }

  static async getFavoriteJobs() {
    const query = 'SELECT * FROM "QueriedJobs" WHERE favorite = true;';

    try {
      const res = await pool.query(query);
      return res.rows;
    } catch (err) {
      console.error('Error fetching favorite jobs:', err);
      throw err;
    }
  }

  // Add other methods as needed (e.g., updateQueriedJob, deleteQueriedJob)
}

export default QueriedJobSchema;
