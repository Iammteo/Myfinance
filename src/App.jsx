import Dashboard from "./pages/Dashboard";
import SideBar from "./components/Navigation/SideBar";

function App() {
  return <div className="flex">
     <div className=" sm:md:lg:w-1/12 rounded-l-3xl right-10 h-[60rem] bg-[#3326AE]"> <SideBar/></div>
     <div className=" w-full sm:md:lg:w-11/12 h-screen rounded-l-[3rem] bg-[#FFFFFF] sm:md:relative sm:md:right-12 pt-8 "> <Dashboard/></div>
     
    </div>
}
export default App;