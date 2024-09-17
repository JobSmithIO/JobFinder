import { Briefcase, Heart, Info, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  const handleAuthAction = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="p-5">
        <h1 className="text-2xl font-bold flex items-center">
          <Briefcase className="mr-2" />
          Jobsmith
        </h1>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2 p-5">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              <Briefcase className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              <Heart className="mr-2" />
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-dashboard"
              className={({ isActive }) =>
                `flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              <Info className="mr-2" />
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-5">
        <button
          onClick={handleAuthAction}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center"
        >
          <LogOut className="mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
