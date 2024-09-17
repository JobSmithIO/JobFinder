import pkg from 'pg';
import dotenv from 'dotenv';
import { favoritesMethods } from './tableFunctions/favoritesMethods.js';

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
    sslmode: 'require',
  },
});

const fakeJobs = [
  {
    job_title:
      'Palantir Technologies - Software Engineer - Environment Platform',
    link: 'https://jobs.lever.co/palantir/d5d83a8f-cb96-41cc-9612-c7224fbb2fbc',
    user_id: 1,
    status: 'applied',
    // snippet:
    //   "Sep 5, 2024 ... Software Engineer - Environment Platform. New York, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world's ...",
    // company: "jobs",
    // displayLink: "jobs.lever.co",
  },
];

async function testQueriedJobInsert() {
  try {
    console.log('Inserting fake jobs...');
    for (const job of fakeJobs) {
      const insertedJob = await favoritesMethods.createFave(job);
      console.log('Inserted job:', insertedJob);
    }

    console.log('\nRetrieving all jobs...');
    const allJobs = await favoritesMethods.getFaves();
    console.log('All faves:', allJobs);
  } catch (error) {
    console.error('Error in testQueriedJobInsert:', error);
  } finally {
    await pool.end();
  }
}

testQueriedJobInsert();
