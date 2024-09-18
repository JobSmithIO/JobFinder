import { useState, useEffect } from "react";
import { Trash2, ExternalLink, ChevronDown } from "lucide-react";
import Sidebar from "./SideBar";

const fetchFavorites = async () => {
    return [
        {
          id: 1,
          title: "Palantir Technologies - Software Engineer - Environment Platform",
          link: "https://jobs.lever.co/palantir/d5d83a8f-cb96-41cc-9612-c7224fbb2fbc",
          snippet:
            "Sep 5, 2024 ... Software Engineer - Environment Platform. New York, NY. Dev /. Full-time /. Hybrid. Apply for this job. A World-Changing Company. Palantir builds the world's ...",
          company: "jobs",
          displayLink: "jobs.lever.co",
          status: null,
        },
        {
          id: 2,
          title: "Software Engineer - Winter Intern | Datadog Careers",
          link: "https://boards.greenhouse.io/datadog/jobs/6172414",
          snippet:
            "Sep 3, 2024 ... Software Engineer - Winter Intern. New York, New York, USA. We're looking for interns to join us to help collect, aggregate, visualize, and analyze high-scale ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: "Applied",
        },
        {
          id: 3,
          title: "Job Application for Software Engineer (General) at Harmonic",
          link: "https://boards.greenhouse.io/harmonic/jobs/4469307005",
          snippet:
            "Sep 6, 2024 ... Software Engineer (General). at Harmonic (View all jobs). New York, Bay Area. About us. Harmonic is the startup discovery engine. We believe in innovation ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: "First interview scheduled",
        },
        {
          id: 4,
          title: "Job Application for Software Engineer, Reliability at The New York ...",
          link: "https://boards.greenhouse.io/thenewyorktimes/jobs/4467185005",
          snippet:
            "Sep 3, 2024 ... Software Engineer, Reliability · Familiarity with observability tools (e.g., Datadog, Sentry, Embrace) · Experience with containerization technologies, such as ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: null,
        },
        {
          id: 5,
          title: "Software Engineer - Compliance Engineering | Datadog Careers",
          link: "https://boards.greenhouse.io/datadog/jobs/6232943",
          snippet:
            "Sep 4, 2024 ... Software Engineer - Compliance Engineering. New York, New York, USA; Denver, Colorado, USA. Datadog's Information Security Organization's mission is to enable ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: "Ghosted",
        },
        {
          id: 6,
          title: "StubHub - Software Engineer II - Consumer Experience",
          link: "https://jobs.lever.co/StubHub/c7f587eb-b36c-4906-82d8-dfead2da21fe",
          snippet:
            "Sep 4, 2024 ... Software Engineer II - Consumer Experience. Los Angeles, CA / New York, NY. StubHub – Software Engineering /. Full-Time /. Hybrid. Apply for this job. StubHub ...",
          company: "jobs",
          displayLink: "jobs.lever.co",
          status: null,
        },
        {
          id: 7,
          title: "Job Application for Software Engineer, Growth at Arena AI",
          link: "https://boards.greenhouse.io/arenaai/jobs/4392704101",
          snippet:
            "3 days ago ... Software Engineer, Growth. at Arena AI (View all jobs). New York. Who we are: Our name is inspired by Theodore Roosevelt's 'Citizenship in a Republic' speech ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: "Rejected",
        },
        {
          id: 8,
          title: "Staff Software Engineer | Careers | Oscar Health",
          link: "https://boards.greenhouse.io/oscar/jobs/6240646",
          snippet:
            "4 days ago ... As a Staff Software Engineer you'll join our distributed team, leading the ... If you live within commutable distance to our New York City office (in ...",
          company: "boards",
          displayLink: "boards.greenhouse.io",
          status: "Received offer",
        }
      ];
};

const statusOptions = [
  "Applied",
  "First interview scheduled",
  "Subsequent interview scheduled",
  "Rejected",
  "Received offer",
  "Turned down offer",
  "Ghosted",
];

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 16; 
  
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = favorites.slice(indexOfFirstJob, indexOfLastJob);
  
    const totalPages = Math.ceil(favorites.length / jobsPerPage);
  
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
  
    useEffect(() => {
      const loadFavorites = async () => {
        const data = await fetchFavorites();
        setFavorites(data);
      };
      loadFavorites();
    }, []);
  
    const handleStatusChange = (favoriteTitle, status) => {
      console.log(`Status for ${favoriteTitle} changed to ${status}`);
    };
  
    const handleDelete = async (favoriteTitle) => {
      console.log(`Deleted favorite: ${favoriteTitle}`);
    };
  
    return (
      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="container mx-auto p-4 flex flex-col">
          <h1 className="text-2xl font-bold mb-6">Favorites</h1>
          
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentJobs.map((favorite) => (
                <div
                  key={crypto.randomUUID()}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-2 truncate" title={favorite.title}>
                      {favorite.title}
                    </h2>
                    <div className="relative mb-4">
                      <button
                        type="button"
                        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === favorite.title ? null : favorite.title
                          )
                        }
                      >
                        {favorite.status || "Select status"}
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </button>
                      {openDropdown === favorite.title && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {statusOptions.map((status) => (
                              <a
                                key={status}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleStatusChange(favorite.title, status);
                                }}
                              >
                                {status}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={favorite.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleDelete(favorite.title)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
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
  
