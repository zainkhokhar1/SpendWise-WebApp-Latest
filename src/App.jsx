import Siderbar from "./components/Siderbar";
import Dashboard from "./screens/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Settings from "./screens/Settings";
import MyProfile from "./screens/MyProfile";
import IncomePlanner from "./screens/IncomePlanner";
import BudgetPlanner from "./screens/BudgetPlanner";
import ExpensePlanner from "./screens/ExpensePlanner";
import Notifications from "./screens/Notifications";
import HelpCenter from "./screens/HelpCenter";
import ReportsAnalysis from "./screens/ReportsAnalysis";


function App() {

  return (
    <Router>
      <div className="w-screen bg-[#F9FBFC] h-screen overflow-x-hidden flex min-[800px]:pl-52">
        <Siderbar />

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
    </Router>
  )
}

export default App
