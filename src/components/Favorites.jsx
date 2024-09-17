import { useState, useEffect } from "react";
import { Trash2, ExternalLink, ChevronDown } from "lucide-react";
import Sidebar from "./SideBar";

const fetchFavorites = async () => {
  return [
    {
      id: 1,
      title: "Software Engineer",
      status: "Applied",
      link: "lmao1.com",
    },
    {
      id: 2,
      title: "UX Designer",
      status: "Received offer",
      link: "lol2.net",
    },
    {
      id: 3,
      title: "Data Scientist",
      status: "Subsequent interview scheduled",
      link: "rolf3.org",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      status: "Applied",
      link: "haha.io",
    },
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

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await fetchFavorites();
      setFavorites(data);
      //can prob use .reverse to get a LIFO setup so last favorited is the first to start populating
    };
    loadFavorites();
  }, []);

  const handleStatusChange = () => {};

  const handleDelete = async () => {};

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="container mx-auto p-4">
        
        <h1 className="text-2xl font-bold mb-6">Favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full"
            >
              <div>
                <h2
                  className="text-xl font-semibold mb-2 truncate"
                  title={favorite.title}
                >
                  {favorite.title}
                </h2>
                <div className="relative mb-4">
                  <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === favorite.id ? null : favorite.id
                      )
                    }
                  >
                    {favorite.status}
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {openDropdown === favorite.id && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        {statusOptions.map((status) => (
                          <a
                            key={status}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
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
                  onClick={() => handleDelete(favorite.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
