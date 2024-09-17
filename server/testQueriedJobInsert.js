import pkg from 'pg';
import dotenv from 'dotenv';
import { QueriedJobSchema } from './models/queriedJobSchema.js';

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
    job_title: 'Software Engineer',
    location: 'San Francisco, CA',
    salary: 120000,
    company_name: 'TechCorp',
    link: 'https://example.com/job1',
    favorite: false,
  },
  {
    job_title: 'Data Scientist',
    location: 'New York, NY',
    salary: 110000,
    company_name: 'DataInc',
    link: 'https://example.com/job2',
    favorite: true,
  },
  {
    job_title: 'UX Designer',
    location: 'Seattle, WA',
    salary: 95000,
    company_name: 'DesignHub',
    link: 'https://example.com/job3',
    favorite: false,
  },
];

async function testQueriedJobInsert() {
  try {
    console.log('Inserting fake jobs...');
    for (const job of fakeJobs) {
      const insertedJob = await QueriedJobSchema.createQueriedJob(job);
      console.log('Inserted job:', insertedJob);
    }

    console.log('\nRetrieving all jobs...');
    const allJobs = await QueriedJobSchema.getAllQueriedJobs();
    console.log('All jobs:', allJobs);

    console.log('\nRetrieving favorite jobs...');
    const favoriteJobs = await QueriedJobSchema.getFavoriteJobs();
    console.log('Favorite jobs:', favoriteJobs);

    console.log('\nUpdating favorite status...');
    const updatedJob = await QueriedJobSchema.updateFavoriteStatus(
      allJobs[0].id,
      true
    );
    console.log('Updated job:', updatedJob);

    console.log('\nRetrieving favorite jobs after update...');
    const updatedFavoriteJobs = await QueriedJobSchema.getFavoriteJobs();
    console.log('Updated favorite jobs:', updatedFavoriteJobs);
  } catch (error) {
    console.error('Error in testQueriedJobInsert:', error);
  } finally {
    await pool.end();
  }
}

testQueriedJobInsert();
