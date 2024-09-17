import { Briefcase } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-gray-800 mr-2" />
            <span className="font-bold text-xl text-gray-900">JobSmith</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
             
                  onClick={() => navigate('/login')}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                
                  onClick={() => navigate('/signup')}
                   className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                 
                  onClick={() => navigate('/about')}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Forge Your Career Path
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
            JobSmith uncovers opportunities others miss
            </p>
            <div className="mt-10">
              <button
                onClick={() => navigate('/signup')}
                className="inline-block bg-white text-gray-800 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition duration-300"
              >
                Start Your Search
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Why Choose JobSmith?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Matching</h3>
                <p className="text-gray-600">Enter your criteria and get the jobs that best match your skills and preferences.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Results</h3>
                <p className="text-gray-600">We filter through listings to present only the most relevant opportunities others may have missed.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Access</h3>
                <p className="text-gray-600">Direct links to job postings allow you to apply instantly to your chosen positions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              How JobSmith Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Your Criteria</h3>
                <p className="text-gray-600">Input your preferred position and location.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matches</h3>
                <p className="text-gray-600">Our app then find and lists job postings others could have missed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Directly</h3>
                <p className="text-gray-600">Click on the provided links to go straight to the application page.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
