import Siderbar from "./components/Siderbar";
import Dashboard from "./screens/Dashboard";



function App() {

  return (
    <div className="w-screen h-screen overflow-x-hidden flex">
      <Siderbar />
      <Dashboard />

    </div>
  )
}

export default App
