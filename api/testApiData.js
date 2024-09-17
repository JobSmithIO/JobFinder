import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
import { searchJobs } from './api';

const mockResponse = {
  "kind": "customsearch#search",
  "url": {
      "type": "application/json",
      "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
      "request": [
          {
              "title": "Google Custom Search - (site:boards.greenhouse.io OR site:jobs.lever.co) \"Software Engineer\" -\"Senior Software Engineer\" \"New York\"",
              "totalResults": "3310",
              "searchTerms": "(site:boards.greenhouse.io OR site:jobs.lever.co) \"Software Engineer\" -\"Senior Software Engineer\" \"New York\"",
              "count": 10,
              "startIndex": 1,
              "inputEncoding": "utf8",
              "outputEncoding": "utf8",
              "safe": "off",
              "cx": "703c18722594a44b7"
          }
      ],
      "nextPage": [
          {
              "title": "Google Custom Search - (site:boards.greenhouse.io OR site:jobs.lever.co) \"Software Engineer\" -\"Senior Software Engineer\" \"New York\"",
              "totalResults": "3310",
              "searchTerms": "(site:boards.greenhouse.io OR site:jobs.lever.co) \"Software Engineer\" -\"Senior Software Engineer\" \"New York\"",
              "count": 10,
              "startIndex": 11,
              "inputEncoding": "utf8",
              "outputEncoding": "utf8",
              "safe": "off",
              "cx": "703c18722594a44b7"
          }
      ]
  },
  "context": {
      "title": "JobFinder"
  },
  "searchInformation": {
      "searchTime": 0.207152,
      "formattedSearchTime": "0.21",
      "totalResults": "3310",
      "formattedTotalResults": "3,310"
  },
  "items": [
      {
          "kind": "customsearch#result",
          "title": "Careers | Gecko Robotics | Gecko Robotics",
          "htmlTitle": "Careers | Gecko Robotics | Gecko Robotics",
          "link": "https://boards.greenhouse.io/geckorobotics",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Field Software Engineer - New Graduate Pittsburgh · Field Software Engineer - Intern Pittsburgh · Forward Deployed Software Engineer New York City, Washington, ...",
          "htmlSnippet": "Field <b>Software Engineer</b> - New Graduate Pittsburgh &middot; Field <b>Software Engineer</b> - Intern Pittsburgh &middot; Forward Deployed <b>Software Engineer New York</b> City, Washington,&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/geckorobotics",
          "htmlFormattedUrl": "https://boards.greenhouse.io/geckorobotics",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxmfmuxAyBPySYDuhblGGiUHyJDHm9AgI0Opg8oQKG1bloBemq-Uchzh8&s",
                      "width": "311",
                      "height": "162"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://images.ctfassets.net/umpag2v4ugg8/4h2wldfcqd4tVdI3PpRTAh/e09ad3982a881cdb07884ebfbe4f5f8b/og-image.png?w=1200&h=628&fit=fill&q=60&fm=jpg&fl=progressive",
                      "og:type": "website",
                      "twitter:image:alt": "og-image",
                      "twitter:card": "summary_large_image",
                      "fb:app_id": "3428513203961230",
                      "og:site_name": "Gecko Robotics",
                      "viewport": "width=device-width, initial-scale=1",
                      "og:title": "Careers | Gecko Robotics",
                      "og:url": "https://geckorobotics.com/careers/",
                      "og:description": "Used when sharing on Social Media."
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://images.ctfassets.net/umpag2v4ugg8/4h2wldfcqd4tVdI3PpRTAh/e09ad3982a881cdb07884ebfbe4f5f8b/og-image.png?w=1200&h=628&fit=fill&q=60&fm=jpg&fl=progressive"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Palantir Technologies - Software Engineer, New Grad",
          "htmlTitle": "Palantir Technologies - <b>Software Engineer</b>, New Grad",
          "link": "https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92",
          "displayLink": "jobs.lever.co",
          "snippet": "Software Engineer, New Grad. New York, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world's leading ...",
          "htmlSnippet": "<b>Software Engineer</b>, New Grad. <b>New York</b>, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world&#39;s leading&nbsp;...",
          "formattedUrl": "https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92",
          "htmlFormattedUrl": "https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvnTykonTJdJ1cRyQHngPzdyy8uupybzDJSY4oY-WC7Ahy6XVxif7zd8&s",
                      "width": "310",
                      "height": "163"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://lever-client-logos.s3-us-west-2.amazonaws.com/b8300af6-ed1c-4d0b-8956-cee7839555b9-1586196845320.png",
                      "twitter:title": "Palantir Technologies - Software Engineer, New Grad",
                      "og:image:width": "1200",
                      "viewport": "width=device-width, initial-scale=1",
                      "twitter:description": "The Role Software Engineers at Palantir build software at scale to transform how organizations around the world use data. In this role, you’ll have an opportunity to grow more quickly than you ever envisioned as you contribute high-quality code directly to Palantir Gotham, Palantir Apollo, or Palantir Foundry: products that are deployed at some of the most important institutions across the public and private sectors. You'll create features used by research scientists, aerospace engineers, intelligence analysts, and economic forecasters in countries around the world. Palantir's Product Development organization is made up of small teams of Software Engineers, each focusing on a specific aspect of a product. For example, you might join a team that builds a Foundry front-end application, or a component of the Gotham release infrastructure. We encourage communication and collaboration among teams to share context, skills, and experience, so you'll also have the opportunity to learn about o",
                      "og:title": "Palantir Technologies - Software Engineer, New Grad",
                      "og:image:height": "630",
                      "og:url": "https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92",
                      "og:description": "The Role Software Engineers at Palantir build software at scale to transform how organizations around the world use data. In this role, you’ll have an opportunity to grow more quickly than you ever envisioned as you contribute high-quality code directly to Palantir Gotham, Palantir Apollo, or Palantir Foundry: products that are deployed at some of the most important institutions across the public and private sectors. You'll create features used by research scientists, aerospace engineers, intelligence analysts, and economic forecasters in countries around the world. Palantir's Product Development organization is made up of small teams of Software Engineers, each focusing on a specific aspect of a product. For example, you might join a team that builds a Foundry front-end application, or a component of the Gotham release infrastructure. We encourage communication and collaboration among teams to share context, skills, and experience, so you'll also have the opportunity to learn about o"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://lever-client-logos.s3-us-west-2.amazonaws.com/b8300af6-ed1c-4d0b-8956-cee7839555b9-1586196845320.png"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Open Positions | Cockroach Labs",
          "htmlTitle": "Open Positions | Cockroach Labs",
          "link": "https://boards.greenhouse.io/cockroachlabs",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Engineering · Manager, Engineering (Storage) - Toronto, New York, NY · Software Engineer, Backend (CDC) - New York, NY · Software Engineer, Backend (Cloud Platform) ...",
          "htmlSnippet": "Engineering &middot; Manager, Engineering (Storage) - Toronto, <b>New York</b>, NY &middot; <b>Software Engineer</b>, Backend (CDC) - <b>New York</b>, NY &middot; <b>Software Engineer</b>, Backend (Cloud Platform)&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/cockroachlabs",
          "htmlFormattedUrl": "https://boards.greenhouse.io/cockroachlabs",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5wJqsVxHwdd5BRXkps-5rM5K91eNoyjhLHakwIBVFjsSkTcLs0W9Sjw&s",
                      "width": "380",
                      "height": "132"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress",
                      "clarity-site-verification": "ee042818-a2f7-4447-863a-5d843c0e99bf",
                      "theme-color": "#6933FF",
                      "og:type": "article",
                      "article:published_time": "0001-01-01 00:00:00 +0000 UTC",
                      "twitter:card": "summary_large_image",
                      "twitter:title": "Open Positions | Cockroach Labs",
                      "og:site_name": "Cockroach Labs",
                      "og:title": "Open Positions | Cockroach Labs",
                      "og:updated_time": "2020-10-20T04:45:16+00:00",
                      "twitter:creator": "@CockroachDB",
                      "article:publisher": "https://www.facebook.com/cockroachlabs/",
                      "og:image:secure_url": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress",
                      "twitter:image": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg",
                      "twitter:site": "@CockroachDB",
                      "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
                      "og:locale": "en_US",
                      "og:url": "https://cockroachlabs-www-prod.netlify.app/careers/open-positions/"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Open Roles - Cedar",
          "htmlTitle": "Open Roles - Cedar",
          "link": "https://boards.greenhouse.io/careportalinc",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Data Science. Job. Data Scientist II - Commercial Analytics. New York, NY, United States ... Software Engineer II (Patient Information Capture). New York, NY, ...",
          "htmlSnippet": "Data Science. Job. Data Scientist II - Commercial Analytics. <b>New York</b>, NY, United States ... <b>Software Engineer</b> II (Patient Information Capture). <b>New York</b>, NY,&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/careportalinc",
          "htmlFormattedUrl": "https://boards.greenhouse.io/careportalinc",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXo1Ao-DPay-z38oPwTLJBD--GBmfgifkmWf0-HOx1_tgUeSMmt6f4Mps&s",
                      "width": "300",
                      "height": "168"
                  }
              ],
              "metatags": [
                  {
                      "msapplication-tilecolor": "#fb6a55",
                      "og:image": "https://www.cedar.com/wp-content/uploads/2023/03/OpenRoles.png",
                      "og:type": "article",
                      "og:image:width": "1920",
                      "twitter:card": "summary_large_image",
                      "theme-color": "#ffffff",
                      "og:site_name": "Cedar",
                      "og:title": "Open Roles - Cedar",
                      "og:image:height": "1080",
                      "og:image:type": "image/png",
                      "article:publisher": "https://www.facebook.com/CedarNY/",
                      "twitter:image": "https://www.cedar.com/wp-content/uploads/2023/03/OpenRoles.png",
                      "twitter:site": "@cedarny",
                      "article:modified_time": "2024-01-10T15:02:11+00:00",
                      "viewport": "width=device-width, initial-scale=1",
                      "og:locale": "en_US",
                      "og:url": "https://www.cedar.com/open-roles/"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://www.cedar.com/wp-content/uploads/2023/03/OpenRoles.png"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Software Engineer - Serverless | Datadog Careers",
          "htmlTitle": "<b>Software Engineer</b> - Serverless | Datadog Careers",
          "link": "https://boards.greenhouse.io/datadog/jobs/4454549",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Software Engineer - Serverless. New York, New York, USA; Boston, Massachusetts, USA. The Team: The Serverless team is expanding Datadog to build first-class ...",
          "htmlSnippet": "<b>Software Engineer</b> - Serverless. <b>New York</b>, <b>New York</b>, USA; Boston, Massachusetts, USA. The Team: The Serverless team is expanding Datadog to build first-class&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/datadog/jobs/4454549",
          "htmlFormattedUrl": "https://boards.greenhouse.io/datadog/jobs/4454549",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiUdliNH7sYvUTgCH-eDDEH7EWKnJw_MriPwJXeHuANaFk03AyezCwRE&s",
                      "width": "310",
                      "height": "163"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://datadog-careers.imgix.net/img/og/careers_ogimage.jpeg",
                      "twitter:card": "summary_large_image",
                      "twitter:title": "Software Engineer - Serverless | Datadog Careers",
                      "og:type": "article",
                      "og:image:alt": "Join the Team - Datadog logo on abstract purple background",
                      "og:site_name": "Datadog Careers | Datadog",
                      "author": "Datadog",
                      "og:title": "Software Engineer - Serverless | Datadog Careers",
                      "twitter:creator": "@datadoghq",
                      "og:description": "<p><strong>The Team:</strong></p>\n<p>The Serverless team is expanding Datadog to build first-class support for Functions-as-a-Service products like AWS Lambda, as well as new, upcoming products from our partners. The team works on high-scale distributed systems to collect data in real-time, as well as compelling, usable UIs that enable our customers to truly understand what’s happening across all their serverless applications.&nbsp;</p>\n<p><strong>The Opportunity:</strong></p>\n<p>Serverless computing represents a new programming model for the cloud. Monitoring these applications presents unique challenges, given their highly-distributed nature and the lack of access to the underlying infrastructure. As an engineer on the Serverless team, you’ll help set the industry-standard for serverless monitoring tools, partnering with teams across Datadog working on metrics, distributed tracing and logs analytics.</p>\n<p><strong>You Are:</strong></p>\n<ul>\n<li>You have significant experience in one or more languages</",
                      "twitter:image": "https://datadog-careers.imgix.net/img/og/careers_ogimage.jpeg",
                      "twitter:site": "@datadoghq",
                      "viewport": "width=device-width,initial-scale=1",
                      "twitter:description": "<p><strong>The Team:</strong></p>\n<p>The Serverless team is expanding Datadog to build first-class support for Functions-as-a-Service products like AWS Lambda, as well as new, upcoming products from our partners. The team works on high-scale distributed systems to collect data in real-time, as well as compelling, usable UIs that enable our customers to truly understand what’s happening across all their serverless applications.&nbsp;</p>\n<p><strong>The Opportunity:</strong></p>\n<p>Serverless computing represents a new programming model for the cloud. Monitoring these applications presents unique challenges, given their highly-distributed nature and the lack of access to the underlying infrastructure. As an engineer on the Serverless team, you’ll help set the industry-standard for serverless monitoring tools, partnering with teams across Datadog working on metrics, distributed tracing and logs analytics.</p>\n<p><strong>You Are:</strong></p>\n<ul>\n<li>You have significant experience in one or more languages</",
                      "og:url": "https://careers.datadoghq.com/detail/4454549/"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://datadog-careers.imgix.net/img/og/careers_ogimage.jpeg"
                  }
              ],
              "article": [
                  {
                      "name": "Software Engineer - Serverless | Datadog Careers",
                      "description": "<p><strong>The Team:</strong></p> <p>The Serverless team is expanding Datadog to build first-class support for Functions-as-a-Service products like AWS Lambda, as well as new, upcoming products..."
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Palantir Technologies - Backend Software Engineer - Infrastructure",
          "htmlTitle": "Palantir Technologies - Backend <b>Software Engineer</b> - Infrastructure",
          "link": "https://jobs.lever.co/palantir/fb2d3222-dbd8-4e03-8d39-47b820e9509c",
          "displayLink": "jobs.lever.co",
          "snippet": "Backend Software Engineer - Infrastructure. New York, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world's ...",
          "htmlSnippet": "Backend <b>Software Engineer</b> - Infrastructure. <b>New York</b>, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world&#39;s&nbsp;...",
          "formattedUrl": "https://jobs.lever.co/palantir/fb2d3222-dbd8-4e03-8d39-47b820e9509c",
          "htmlFormattedUrl": "https://jobs.lever.co/palantir/fb2d3222-dbd8-4e03-8d39-47b820e9509c",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvnTykonTJdJ1cRyQHngPzdyy8uupybzDJSY4oY-WC7Ahy6XVxif7zd8&s",
                      "width": "310",
                      "height": "163"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://lever-client-logos.s3-us-west-2.amazonaws.com/b8300af6-ed1c-4d0b-8956-cee7839555b9-1586196845320.png",
                      "twitter:title": "Palantir Technologies - Backend Software Engineer - Infrastructure",
                      "og:image:width": "1200",
                      "viewport": "width=device-width, initial-scale=1",
                      "twitter:description": "The Role Backend Software Engineers at Palantir build software at scale to transform how organizations use data. Our Software Engineers are involved throughout the product lifecycle, from idea generation, design, prototyping, and production delivery. You will collaborate closely with technical and non-technical teammates to understand our customers' problems and build products that solve them. We encourage movement across teams to share context, skills, and experience, so you'll learn about many different technologies and aspects of each product. Engineers work autonomously and make decisions independently, within a community that will support and challenge you as you grow and develop, becoming a strong technical contributor and engineering leader. Our Product Development organization is made up of small teams of Software Engineers. Each team focuses on a specific aspect of a product. Our infrastructure teams are responsible for the lowest layers of our software stack, often focused",
                      "og:title": "Palantir Technologies - Backend Software Engineer - Infrastructure",
                      "og:image:height": "630",
                      "og:url": "https://jobs.lever.co/palantir/fb2d3222-dbd8-4e03-8d39-47b820e9509c",
                      "og:description": "The Role Backend Software Engineers at Palantir build software at scale to transform how organizations use data. Our Software Engineers are involved throughout the product lifecycle, from idea generation, design, prototyping, and production delivery. You will collaborate closely with technical and non-technical teammates to understand our customers' problems and build products that solve them. We encourage movement across teams to share context, skills, and experience, so you'll learn about many different technologies and aspects of each product. Engineers work autonomously and make decisions independently, within a community that will support and challenge you as you grow and develop, becoming a strong technical contributor and engineering leader. Our Product Development organization is made up of small teams of Software Engineers. Each team focuses on a specific aspect of a product. Our infrastructure teams are responsible for the lowest layers of our software stack, often focused"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://lever-client-logos.s3-us-west-2.amazonaws.com/b8300af6-ed1c-4d0b-8956-cee7839555b9-1586196845320.png"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Peloton® | Embedded Software Engineer, New York, New York ...",
          "htmlTitle": "Peloton® | Embedded <b>Software Engineer</b>, <b>New York</b>, <b>New York</b> ...",
          "link": "https://boards.greenhouse.io/peloton/jobs/6012378?utm_source=Getro.org+job+board&utm_medium=getro.com&gh_src=Getro.org+job+board",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Embedded Software Engineer. Location New York, New York, United States. Status Full-Time. ABOUT THE ROLE. Peloton Systems Engineering is hiring creative ...",
          "htmlSnippet": "Embedded <b>Software Engineer</b>. Location <b>New York</b>, <b>New York</b>, United States. Status Full-Time. ABOUT THE ROLE. Peloton Systems Engineering is hiring creative&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/peloton/jobs/6012378?utm...",
          "htmlFormattedUrl": "https://boards.greenhouse.io/peloton/jobs/6012378?utm...",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EWutyR43ABWlbLHgmDVwR_WindhneEfXL3ucc1zUj1NIX6wnFIsOX-rr&s",
                      "width": "299",
                      "height": "168"
                  }
              ],
              "organization": [
                  {
                      "sameas": "https://twitter.com/onepeloton"
                  }
              ],
              "metatags": [
                  {
                      "twitter:card": "summary_large_image",
                      "og:image:width": "1200",
                      "og:site_name": "Peloton®",
                      "author": "Peloton®",
                      "og:title": "Embedded Software Engineer",
                      "og:image:height": "630",
                      "url": "https://careers.onepeloton.com/en/all-jobs/6012378/embedded-software-engineer/",
                      "twitter:image": "https://careers.onepeloton.com/media/54nbp2mm/untitled-design-2.png?anchor=center&mode=crop&width=1200&height=630&mode=crop&quality=75",
                      "http://ogp.me/ns/article#published_time": "2022-01-11T12:18:39",
                      "http://ogp.me/ns/article#modified_time": "2024-08-15T13:12:03",
                      "twitter:site": "@onepeloton",
                      "viewport": "width=device-width, initial-scale=1",
                      "og:locale": "en",
                      "jobidentifier": "6012378",
                      "http://ogp.me/ns/article#section": "All Jobs"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://careers.onepeloton.com/media/wldfdx11/061323_bascom__mv20633.jpg?anchor=center&mode=crop&width=727&height=409&mode=crop&quality=75"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Stripe Jobs",
          "htmlTitle": "Stripe Jobs",
          "link": "https://boards.greenhouse.io/stripe/jobs/5925670",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Tokyo. Account Executive, Mid Market. Sales. US Chicago. Account Executive, Platforms (Existing Business). Sales. US New York ... Backend Software Engineer, ...",
          "htmlSnippet": "Tokyo. Account Executive, Mid Market. Sales. US Chicago. Account Executive, Platforms (Existing Business). Sales. US <b>New York</b> ... Backend <b>Software Engineer</b>,&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/stripe/jobs/5925670",
          "htmlFormattedUrl": "https://boards.greenhouse.io/stripe/jobs/5925670",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSElIZWVMRax98CFeQcnfaCIVQGKxQtLjUchohwNerikUcgkthMXndu5J&s",
                      "width": "318",
                      "height": "159"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://images.stripeassets.com/fzn2n1nzq965/4WQZdQm7sintngjLSCgyJn/33868b126a8b59021fe7db006c5a015e/Stripe_jobs_share.jpg?q=80",
                      "twitter:card": "summary_large_image",
                      "twitter:title": "Stripe Jobs",
                      "experiment-treatments": "acquisition_top_cta_change.control.ursula.0effcec8-6229-49e0-807e-eb4f7dbcb29e.a",
                      "og:title": "Stripe Jobs",
                      "og:description": "We operate at significant scale, but we’re tiny relative to the opportunity ahead. Want to join us? See what career opportunities are available across our global teams.",
                      "twitter:image": "https://images.stripeassets.com/fzn2n1nzq965/4WQZdQm7sintngjLSCgyJn/33868b126a8b59021fe7db006c5a015e/Stripe_jobs_share.jpg?q=80",
                      "facebook-domain-verification": "zvsnguqc5l0xz3at5o9beubpl46dv8",
                      "twitter:site": "@stripe",
                      "viewport": "width=device-width, initial-scale=1",
                      "twitter:description": "We operate at significant scale, but we’re tiny relative to the opportunity ahead. Want to join us? See what career opportunities are available across our global teams.",
                      "request-country": "US",
                      "og:url": "https://stripe.com/jobs/search",
                      "format-detection": "telephone=no"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://images.stripeassets.com/fzn2n1nzq965/4WQZdQm7sintngjLSCgyJn/33868b126a8b59021fe7db006c5a015e/Stripe_jobs_share.jpg?q=80"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Software Engineer, Backend (CDC) - New York, NY | Cockroach Labs",
          "htmlTitle": "<b>Software Engineer</b>, Backend (CDC) - <b>New York</b>, NY | Cockroach Labs",
          "link": "https://boards.greenhouse.io/cockroachlabs/jobs/5914852",
          "displayLink": "boards.greenhouse.io",
          "snippet": "Software Engineer, Backend (CDC) - New York, NY · Databases are the beating heart of every business in the world. · About the Role · The Expectations · You Have.",
          "htmlSnippet": "<b>Software Engineer</b>, Backend (CDC) - <b>New York</b>, NY &middot; Databases are the beating heart of every business in the world. &middot; About the Role &middot; The Expectations &middot; You Have.",
          "formattedUrl": "https://boards.greenhouse.io/cockroachlabs/jobs/5914852",
          "htmlFormattedUrl": "https://boards.greenhouse.io/cockroachlabs/jobs/5914852",
          "pagemap": {
              "cse_thumbnail": [
                  {
                      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5wJqsVxHwdd5BRXkps-5rM5K91eNoyjhLHakwIBVFjsSkTcLs0W9Sjw&s",
                      "width": "380",
                      "height": "132"
                  }
              ],
              "metatags": [
                  {
                      "og:image": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress",
                      "clarity-site-verification": "ee042818-a2f7-4447-863a-5d843c0e99bf",
                      "theme-color": "#6933FF",
                      "og:type": "article",
                      "article:published_time": "0001-01-01 00:00:00 +0000 UTC",
                      "twitter:card": "summary_large_image",
                      "twitter:title": "Careers | Cockroach Labs",
                      "og:site_name": "Cockroach Labs",
                      "og:title": "Careers | Cockroach Labs",
                      "og:updated_time": "2020-10-20T04:45:16+00:00",
                      "twitter:creator": "@CockroachDB",
                      "article:publisher": "https://www.facebook.com/cockroachlabs/",
                      "og:image:secure_url": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress",
                      "twitter:image": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg",
                      "twitter:site": "@CockroachDB",
                      "viewport": "width=device-width, initial-scale=1, viewport-fit=cover",
                      "og:locale": "en_US",
                      "og:url": "https://cockroachlabs-www-prod.netlify.app/careers/jobs/"
                  }
              ],
              "cse_image": [
                  {
                      "src": "https://www.cockroachlabs.com/img/crl-socialpost-default-2020-2.jpg?auto=format,compress"
                  }
              ]
          }
      },
      {
          "kind": "customsearch#result",
          "title": "Job Application for Software Engineer - Integrations at Beyond Identity",
          "htmlTitle": "Job Application for <b>Software Engineer</b> - Integrations at Beyond Identity",
          "link": "https://boards.greenhouse.io/beyondidentity/jobs/5205121004?gh_jid=5205121004",
          "displayLink": "boards.greenhouse.io",
          "snippet": "As a Software Engineer at Beyond Identity, you will be an integral part ... For Applicants in New York, NY, the salary range is $133,000 - $175,000 per ...",
          "htmlSnippet": "As a <b>Software Engineer</b> at Beyond Identity, you will be an integral part ... For Applicants in <b>New York</b>, NY, the salary range is $133,000 - $175,000 per&nbsp;...",
          "formattedUrl": "https://boards.greenhouse.io/beyondidentity/jobs/5205121004?gh_jid...",
          "htmlFormattedUrl": "https://boards.greenhouse.io/beyondidentity/jobs/5205121004?gh_jid...",
          "pagemap": {
              "metatags": [
                  {
                      "viewport": "width=device-width,initial-scale=1"
                  }
              ]
          }
      }
  ]
}

async function testSearchJobs() {
  const searchParams = {
    sites: ['greenhouse', 'lever'],
    include: 'Software Engineer',
    exclude: 'Senior',
    location: 'New York',
    dateRestrict: 'w2'
  };

  try {
   //mock response
    const result = {
      jobs: mockResponse.items.map(item => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet,
        company: extractCompany(item.pagemap?.metatags),
        displayLink: item.displayLink,
        favorite: 0,
      })),
      totalResults: parseInt(mockResponse.searchInformation.totalResults),
      searchTime: parseFloat(mockResponse.searchInformation.searchTime),
    };

    console.log('Search Results:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Test failed:', error);
  }
}
const extractCompany = (metatags) => {
  if (metatags && metatags.length > 0) {
    const siteNameMetaTag = metatags.find(tag => tag['og:site_name']);
    return siteNameMetaTag ? siteNameMetaTag['og:site_name'] : 'Unknown';
  }
  return 'Unknown';
};
testSearchJobs();