import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const SITE_URLS = {
  'Greenhouse': 'site:boards.greenhouse.io',
  'Lever.co': 'site:jobs.lever.co',
  'Workable': 'site:apply.workable.com',
  'Smart-Recruiters': 'site:jobs.smartrecruiters.com',
  'LinkedIn': 'site:linkedin.com/jobs inurl:"/jobs/view/"',
  'Indeed': 'site:indeed.com/viewjob',
  'y-combinator': 'site:workatastartup.com',
  'wellfound': 'site:https://wellfound.com/jobs',
};

const DEFAULT_EXCLUDE_TERMS = [
  '"1000 jobs"',
  '"500 jobs"',
  '"100 jobs"',
  '"top jobs"',
  '"open positions"',
  '"new college grad"',
];

const searchJobs = async (req, res, next) => {
  try {
    const { sites, include, exclude, location, dateRestrict } = req.body;

    let siteSearch = '';
    if (sites && sites.length > 0) {
      siteSearch = sites.map(site => SITE_URLS[site]).join(' OR ');
      siteSearch = `(${siteSearch})`;
    }

    let searchQuery = siteSearch;

    if (include && include.length > 0) {
      const includeTerms = include.map(term => `"${term}"`).join(' OR ');
      searchQuery += ` (${includeTerms})`;
    }

    if (exclude && exclude.length > 0) {
      searchQuery += ` ${exclude.map(term => `-"${term}"`).join(' ')}`;
    }

    if (DEFAULT_EXCLUDE_TERMS && DEFAULT_EXCLUDE_TERMS.length > 0) {
      searchQuery += ` ${DEFAULT_EXCLUDE_TERMS.map(term => `-${term}`).join(' ')}`;
    }

    if (location) {
      if(location.toLowerCase() === "new york"){
        searchQuery += ' "New York City" "NYC"';
      }
      searchQuery += ` "${location.trim()}"`;
    }

    searchQuery = searchQuery.trim();
    console.log(searchQuery);

    const params = {
      key: process.env.GOOGLE_API_KEY,
      cx: process.env.SEARCH_ENGINE_ID,
      q: searchQuery,
      num: 10,
    };
    if (dateRestrict) params.dateRestrict = dateRestrict;

    const response = await axios.get(BASE_URL, { params });
    const jobs = response.data.items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      company: extractCompany(item.pagemap?.metatags),
      displayLink: item.displayLink,
      favorite: 0,
    }));
    console.log(jobs);
    return res.json({
      jobs,
      totalResults: parseInt(response.data.searchInformation.totalResults),
      searchTime: parseFloat(response.data.searchInformation.searchTime),
    });
  } catch (error) {
    return next({
      message: "Error in searchJobs: " + error.message,
      log: error,
    });
  }
};

const extractCompany = (metatags) => {
  if (metatags && metatags.length > 0) {
    const siteNameMetaTag = metatags.find(tag => tag['og:site_name']);
    return siteNameMetaTag ? siteNameMetaTag['og:site_name'] : 'Unknown';
  }
  return 'Unknown';
};

export { searchJobs };
