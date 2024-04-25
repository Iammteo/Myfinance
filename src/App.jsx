import Dashboard from "./pages/Dashboard";
import SideBar from "./components/Navigation/SideBar";

function App() {
  return <div className="flex">
     <div className="w-1/12 rounded-l-3xl right-10 h-screen bg-[#3326AE]"> <SideBar/></div>
     <div className="w-11/12 h-screen rounded-l-[3rem] bg-[#FFFFFF] relative right-12 pt-8 "> <Dashboard/></div>
     
    </div>
}
export default App;