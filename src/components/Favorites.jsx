import { useState, useEffect, useContext } from 'react';
import { Trash2, ExternalLink, ChevronDown } from 'lucide-react';
import { UserContext } from '../context/UserContext';
import Sidebar from './SideBar';

import {
  getFaves,
  updateFave,
  deleteFave,
} from '../../database/tableFunctions/favoritesMethods';

const fetchFavorites = async (userId) => {
  try {
    const data = await getFaves(userId);
    console.log('Favorites data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
};

const statusOptions = [
  'Applied',
  'First interview scheduled',
  'Subsequent interview scheduled',
  'Rejected',
  'Received offer',
  'Turned down offer',
  'Ghosted',
];

export default function FavoritesPage() {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
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
      if (user) {
        const data = await fetchFavorites(user.id);
        setFavorites(data);
      }
    };
    loadFavorites();
  }, [user]);

  const handleStatusChange = async (favoriteId, status) => {
    try {
      await updateFave(favoriteId, status);
      // Refresh the favorites list
      const updatedFavorites = await fetchFavorites(user.id);
      setFavorites(updatedFavorites);
      setOpenDropdownId(null); //optionally close the dropwdown after updating
      console.log('Current Jobs:', currentJobs);
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  const handleDelete = async (favoriteId) => {
    try {
      await deleteFave(favoriteId);
      // Refresh the favorites list
      const updatedFavorites = await fetchFavorites(user.id);
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error deleting favorite:', error);
    }
  };

  return (
    <div className='flex bg-gray-100 min-h-screen'>
      <Sidebar />
      <div className='container mx-auto p-4 flex flex-col'>
        <h1 className='text-2xl font-bold mb-6'>Favorites</h1>

        <div className='flex-grow'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {currentJobs.map((favorite) => (
              <div
                key={crypto.randomUUID()}
                className='bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full'
              >
                <div>
                  <h2
                    className='text-xl font-semibold mb-2 truncate'
                    title={favorite.job_title}
                  >
                    {favorite.job_title}
                  </h2>
                  <h3
                    className='text-l mb-2 truncate'
                    title={favorite.company_name}
                  >
                    {favorite.company_name}
                  </h3>
                  <div className='relative mb-4'>
                    <button
                      type='button'
                      className='inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === favorite.id ? null : favorite.id
                        )
                      }
                    >
                      {favorite.status || 'Select status'}
                      <ChevronDown className='h-5 w-5' aria-hidden='true' />
                    </button>
                    {openDropdownId === favorite.id && (
                      <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10'>
                        <div
                          className='py-1'
                          role='menu'
                          aria-orientation='vertical'
                        >
                          {statusOptions.map((status) => (
                            <a
                              key={status}
                              href='#'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              role='menuitem'
                              onClick={(e) => {
                                e.preventDefault();
                                handleStatusChange(favorite.id, status);
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
                <div className='flex justify-between items-center mt-4'>
                  <a
                    href={favorite.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-700'
                  >
                    <ExternalLink className='h-5 w-5' />
                  </a>
                  <button
                    onClick={() => handleDelete(favorite.id)}
                    className='text-red-500 hover:text-red-700'
                  >
                    <Trash2 className='h-5 w-5' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-between mt-6'>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50'
          >
            Previous
          </button>
          <span className='text-gray-600'>
            Page {currentPage} of {totalPages}
          </span>
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
