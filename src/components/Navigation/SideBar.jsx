import { TiHome } from "react-icons/ti";
import { GrAnalytics } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import Logo from "../Logo";

const SideBar = () => {
  return (
    <div className='text-white p-4 flex flex-col'>
      <div className="mt-5"><Logo/></div>
      <div className="flex flex-col justify-center">
        <ul className="mt-[13rem] ml-[1rem]">

       
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] hover:p-3 hover:transform hover:translate--20 hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><TiHome /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] hover:p-3 hover:transform hover:translate--20 hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><GrAnalytics /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] hover:p-3 hover:transform hover:translate--20 hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><IoCard /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] hover:p-3 hover:transform hover:translate--20 hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><FaWallet /></a></li> 
          
        </ul>
      </div>
    </div>
  );
}

export default SideBar;


