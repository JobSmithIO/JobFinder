import { useState } from "react";
import Sidebar from "./SideBar";

const jobData = [
  {
    title: "Palantir Technologies - Software Engineer - Environment Platform",
    link: "https://jobs.lever.co/palantir/d5d83a8f-cb96-41cc-9612-c7224fbb2fbc",
    snippet:
      "Sep 5, 2024 ... Software Engineer - Environment Platform. New York, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world's ...",
    company: "jobs",
    displayLink: "jobs.lever.co",
    favorite: 0,
  },
  {
    title: "Software Engineer - Winter Intern | Datadog Careers",
    link: "https://boards.greenhouse.io/datadog/jobs/6172414",
    snippet:
      "Sep 3, 2024 ... Software Engineer - Winter Intern. New York, New York, USA. We're looking for interns to join us to help collect, aggregate, visualize, and analyze high-scale ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "Job Application for Software Engineer (General) at Harmonic",
    link: "https://boards.greenhouse.io/harmonic/jobs/4469307005",
    snippet:
      "Sep 6, 2024 ... Software Engineer (General). at Harmonic (View all jobs). New York, Bay Area. About us. Harmonic is the startup discovery engine. We believe in innovation ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title:
      "Job Application for Software Engineer, Reliability at The New York ...",
    link: "https://boards.greenhouse.io/thenewyorktimes/jobs/4467185005",
    snippet:
      "Sep 3, 2024 ... Software Engineer, Reliability · Familiarity with observability tools (e.g., Datadog, Sentry, Embrace) · Experience with containerization technologies, such as ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "Software Engineer - Compliance Engineering | Datadog Careers",
    link: "https://boards.greenhouse.io/datadog/jobs/6232943",
    snippet:
      "Sep 4, 2024 ... Software Engineer - Compliance Engineering. New York, New York, USA; Denver, Colorado, USA. Datadog's Information Security Organization's mission is to enable ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "StubHub - Software Engineer II - Consumer Experience",
    link: "https://jobs.lever.co/StubHub/c7f587eb-b36c-4906-82d8-dfead2da21fe",
    snippet:
      "Sep 4, 2024 ... Software Engineer II - Consumer Experience. Los Angeles, CA / New York, NY. StubHub – Software Engineering /. Full-Time /. Hybrid. Apply for this job. StubHub ...",
    company: "jobs",
    displayLink: "jobs.lever.co",
    favorite: 0,
  },
  {
    title: "Job Application for Software Engineer, Growth at Arena AI",
    link: "https://boards.greenhouse.io/arenaai/jobs/4392704101",
    snippet:
      "3 days ago ... Software Engineer, Growth. at Arena AI (View all jobs). New York. Who we are: Our name is inspired by Theodore Roosevelt's 'Citizenship in a Republic' speech ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "Staff Software Engineer | Careers | Oscar Health",
    link: "https://boards.greenhouse.io/oscar/jobs/6240646",
    snippet:
      "4 days ago ... As a Staff Software Engineer you'll join our distributed team, leading the ... If you live within commutable distance to our New York City office (in ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "Job Application for Software Engineer - Design at Scale at Figma",
    link: "https://boards.greenhouse.io/figma/jobs/5196490004?t=7695be924us",
    snippet:
      "4 days ago ... Software Engineer - Design at Scale. San Francisco, CA • New York, NY • United States. Apply. Figma is growing our team of passionate people on a mission to ...",
    company: "boards",
    displayLink: "boards.greenhouse.io",
    favorite: 0,
  },
  {
    title: "Tecton - Software Engineer, UI",
    link: "https://jobs.lever.co/tecton/5678b1d7-29f1-4b58-bcfd-9a2d0b3f41d0",
    snippet:
      "Sep 6, 2024 ... Software Engineer, UI. San Francisco, CA / New York, NY / Seattle, WA. Engineering – Software Development /. Full-time /. Remote. Apply for this job. At Tecton ...",
    company: "jobs",
    displayLink: "jobs.lever.co",
    favorite: 0,
  },
];

export default function JobListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites] = useState([]);
  const jobsPerPage = 10;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  const toggleFavorite = () => {};

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 px-4 py-8 flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Job Listings
        </h1>
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ height: "140px" }}
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Job
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <button
                      onClick={() => toggleFavorite(job.id)}
                      aria-label={
                        favorites.includes(job.id)
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className={`w-6 h-6 ${
                          favorites.includes(job.id)
                            ? "fill-current text-red-500"
                            : "stroke-current"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="flex justify-between mt-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      
    </div>
  );
}
