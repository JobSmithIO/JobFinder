import { useState } from 'react';
import Sidebar from './SideBar';
import { useLocation } from 'react-router-dom';
import { createFave, deleteFave } from '../api/userApi.js';

export default function JobListings() {
  const location = useLocation();
  const jobData = location.state?.jobResults.jobs || [];
  const formData = location.state?.formData || {};
  console.log('hit', jobData);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState({});
  const jobsPerPage = 10;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);

  const toggleFavorite = async (jobId, jobTitle, companyName, jobLink) => {
    try {
      setFavorites((prevFaves) => {
        const newFaves = { ...prevFaves };
        if (newFaves[jobId]) {
          delete newFaves[jobId];
        } else {
          newFaves[jobId] = true;
        }
        return newFaves;
      });

      if (!favorites[jobId]) {
        const newFavorite = await createFave(jobTitle, jobLink, companyName);
        // Store the database ID returned from createFave
        setFavorites((prevFaves) => ({
          ...prevFaves,
          [jobId]: newFavorite.id,
        }));
      } else {
        await deleteFave(favorites[jobId]);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      // Revert the favorite state if the API call fails
      setFavorites((prevFaves) => {
        const newFaves = { ...prevFaves };
        newFaves[jobId] = !newFaves[jobId];
        return newFaves;
      });
    }
  };

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
    <div className='flex bg-gray-100 min-h-screen'>
      <Sidebar />

      <div className='flex-1 px-4 py-8 flex flex-col'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Job Listings</h1>
        <div className='flex-grow'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2'>
            {currentJobs.map((job, index) => {
              const jobId = `job-${index}`;
              return (
                <div
                  key={jobId}
                  className='bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg'
                  style={{ height: '140px' }}
                >
                  <div className='p-4 flex flex-col justify-between h-full'>
                    <div>
                      <h2 className='text-lg font-semibold mb-1'>
                        {job.title}
                      </h2>
                      <p className='text-sm text-gray-600'>{job.company}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <a
                        href={job.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center text-sm font-medium text-blue-600 hover:underline'
                      >
                        View Job
                        <svg
                          className='w-4 h-4 ml-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                      <button
                        onClick={() =>
                          toggleFavorite(
                            jobId,
                            job.title,
                            job.company,
                            job.link
                          )
                        }
                        aria-label={
                          favorites[jobId]
                            ? 'Remove from favorites'
                            : 'Add to favorites'
                        }
                        className='text-gray-400 hover:text-gray-600'
                      >
                        <svg
                          className={`w-6 h-6 ${
                            favorites[jobId]
                              ? 'fill-current text-red-500'
                              : 'stroke-current'
                          }`}
                          fill='none'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50'
          >
            Previous
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
