import { Briefcase, Search, BarChart, Clock } from "lucide-react";
import Sidebar from "./SideBar";

export default function AboutPage() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow min-h-screen bg-gray-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 text-center">
              JobSmith helps you discover job postings you might otherwise miss
              by generating tailored listings based on your desired position.
              Easily follow links to the original job postings and stay focused
              on your career goals.
            </p>
          </section>
          <br></br>
          <br></br>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Search className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      Job Filtering
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Easily find jobs other's might have missed.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      Application Status
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Update and monitor the status of each job application.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      Favorites Insights
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Track past job listings you saved.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-red-500" />
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      Career Management
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Manage your entire job search journey in one place.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <br></br>
          <br></br>
          <section className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
              <li>Fill in the fields for your desired job/position.</li>
              <li>
                Select the listed item or save to favorites for later tracking.
              </li>
              <li>That's it, it's that simple!</li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}
