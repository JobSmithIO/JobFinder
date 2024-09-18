import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import SignUp from './components/Signup';
import LogIn from './components/Login';
import LandingPage from './components/Landing';
import AboutPage from './components/About';
import AboutPageDash from './components/AboutDashboard';
import Dashbaord from './components/Dashboard';
import FavoritesPage from './components/Favorites';
import JobResults from './components/JobResults';
import LoginPage from './components/LoginPage/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/SideBar' element={<SideBar />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashbaord />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about-dashboard' element={<AboutPageDash />} />
        <Route path='/jobs' element={<JobResults />} />
        <Route
          path='/login-page'
          element={
            <div className='h-screen w-screen flex justify-center items-center bg-gray-100'>
              <LoginPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
