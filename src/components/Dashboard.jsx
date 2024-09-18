import Sidebar from "./SideBar";
import JobSearchForm from "./search/Search";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar /> 
      <div className="flex-grow p-6">
        <JobSearchForm />
      </div>
    </div>
  );
}
