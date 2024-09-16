const { Pool } = require('pg');

const PG_URI = 'postgresql://postgres.sbmegajdtzoorqimbvmk:nuLSvTmYZaGzdPz5@aws-0-us-east-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
    connectionString: PG_URI;
});

module.exports = {
    query: (test, params, callback) => {
        console.log('executed query');
        return pool.query(test, params, callback);
    }
}