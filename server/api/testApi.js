import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
import { searchJobs } from '../controllers/api';

async function testSearchJobs() {
  const searchParams = {
    sites: ['greenhouse', 'lever'],
    include: 'Software Engineer',
    exclude: 'Senior',
    location: 'New York',
    dateRestrict: 'w2'
  };
console.log("KEY:", process.env.GOOGLE_API_KEY)
console.log("Cx", process.env.SEARCH_ENGINE_ID)
  try {
    const result = await searchJobs(searchParams);
    console.log('Search Results:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testSearchJobs();