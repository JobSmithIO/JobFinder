import { Pool } from 'pg';
import dotenv from 'dotenv'

dotenv.config();

// Create a pool instance to manage connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

class User {
  // Manually validate the input data before inserting it into the 'Users' table
  static async createUser(data) {
    // Correct the validation to check queried_id, not data.id
    if (typeof data.queried_id !== 'number' || !Number.isInteger(data.queried_id)) {
      throw new Error('Validation Error: queried_id must be an integer');
    }

    // Validate the status field
    if (!['active', 'inactive'].includes(data.status)) {
      throw new Error('Validation Error: status must be either "active" or "inactive"');
    }

    // SQL query to insert the user
    const query = `
      INSERT INTO "Users" (queried_id, status)
      VALUES ($1, $2) RETURNING *;
    `;

    const values = [data.queried_id, data.status];

    try {
      const res = await pool.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.error('Error inserting user:', err);
      throw err;
    }
  }

  // Fetch all users from the 'Users' table
  static async getAllUsers() {
    const query = 'SELECT * FROM "Users";';

    try {
      const res = await pool.query(query);
      return res.rows;
    } catch (err) {
      console.error('Error fetching users:', err);
      throw err;
    }
  }
}

export default User;
