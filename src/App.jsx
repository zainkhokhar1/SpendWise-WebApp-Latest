import Siderbar from "./components/Siderbar";
import Dashboard from "./screens/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Settings from "./screens/Settings";
import MyProfile from "./screens/MyProfile";
import IncomePlanner from "./screens/IncomePlanner";
import BudgetPlanner from "./screens/BudgetPlanner";
import ExpensePlanner from "./screens/ExpensePlanner";
import Notifications from "./screens/Notifications";
import HelpCenter from "./screens/HelpCenter";
import ReportsAnalysis from "./screens/ReportsAnalysis";
import Navbarsm from "./components/Navbarsm";
import { useEffect, useState } from "react";


function App() {
  const [path, setPath] = useState(false);
  const location = useLocation();


  // getting the exact path from the window
  useEffect(() => {
    const path = window.location.pathname;
    path === '/' ? setPath(true) : setPath(false);
  }, [location])


  return (
    <div className={`w-screen ${path ? "bg-[#F9FBFC]" : "bg-white"} h-screen overflow-x-hidden flex min-[800px]:pl-52`}>
      <Siderbar />
      <Navbarsm />

      {/* Defining Routes here */}
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/income-planner" element={<IncomePlanner />} />
        <Route path="/budget-planner" element={<BudgetPlanner />} />
        <Route path="/expense-planner" element={<ExpensePlanner />} />
        <Route path="/reports-analysis" element={<ReportsAnalysis />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/help-center" element={<HelpCenter />} />

      </Routes>

    </div>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}
