import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import LandingPage from './components/Landing';
import AboutPage from './components/About';
import AboutPageDash from './components/AboutDashboard';
import Dashbaord from './components/Dashboard';
import FavoritesPage from './components/Favorites';
import Search from './components/search/Search.jsx';
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-dashboard" element={<AboutPageDash />} />
        <Route path = "/search" element = {<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
