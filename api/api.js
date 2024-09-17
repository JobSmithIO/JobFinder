// api/api.js
import axios from 'axios';

// const API_KEY = process.env.GOOGLE_API_KEY;
// const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;
const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const SITE_URLS = {
  'Greenhouse': 'site:boards.greenhouse.io',
  'Lever.co': 'site:jobs.lever.co',
};

  //
//   obj {
//     sites: "greenhouse", "lever",
//     include: "Software Engineer",
//     exclude: "Senior software engineer",
//     location: "New York",
//     dateRestrict: "w2";
//   }

 const searchJobs = async(searchParams) => {
    try {
        const {sites, include, exclude, location, dateRestrict} = searchParams;

        let siteSearch = '';
        if (sites && sites.length > 0){
            siteSearch = sites.map(site => SITE_URLS[site]).join(' OR ');
            siteSearch = `(${siteSearch})`;
        }
        

        let searchQuery = siteSearch;
        if (include) searchQuery += ` "${include}"`;
        if (exclude) searchQuery += ` -"${exclude}"`;
        if(location) searchQuery += `""${location}`;

        searchQuery = searchQuery.trim();

        const params = {
            key: process.env.GOOGLE_API_KEY,
            cx: process.env.SEARCH_ENGINE_ID,
            q: searchQuery,
            num:10,
        };
        if(dateRestrict) params.dateRestrict = dateRestrict;

        const response = await axios.get(BASE_URL, {params});
        const jobs = response.data.items.map(item => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet,
            company: extractCompany(item.pagemap?.metatags),
            displayLink: item.displayLink,
            favorite: 0,
        }))
        return {
            jobs,
            totalResults: parseInt(response.data.searchInformation.totalResults),
            searchTime: parseFloat(response.data.searchInformation.searchTime),
          };
        } catch (error) {
          console.error('Error in searchJobs:', error);
          throw error;
        }
      };
      
      const extractCompany = (metatags) => {
        if (metatags && metatags.length > 0) {
          const siteNameMetaTag = metatags.find(tag => tag['og:site_name']);
          return siteNameMetaTag ? siteNameMetaTag['og:site_name'] : 'Unknown';
        }
        return 'Unknown';
      };
      

// Export the extractCompany function if needed elsewhere
export { searchJobs, extractCompany };