import Sidebar from "./SideBar";
import JobSearchForm from "./search/Search";
import { useEffect } from "react";
import { useNavigate } from 'react-router';
export default function Dashboard() {
let navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
})
  return (

    <div className="flex bg-gray-100">
      <Sidebar /> 
      <div className="flex-grow p-6">
        <JobSearchForm />
      </div>
    </div>
  );
}
