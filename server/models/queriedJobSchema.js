const { Pool } = require('pg');
const URI = 'postgresql://postgres.sbmegajdtzoorqimbvmk:nuLSvTmYZaGzdPz5@aws-0-us-east-1.pooler.supabase.com:6543/postgres';
const pool = new Pool({
    connectionString: URI,
});
const checkDatabaseConnection = async () => {
    try {
        await pool.query('SELECT NOW()');
        console.log('Connected to the PostgreSQL database.');
    } catch (err) {
        console.error('Failed to connect to the PostgreSQL database:', err);
    }
  };
export {pool, checkDatabaseConnection};
