import { TiHome } from "react-icons/ti";
import { GrAnalytics } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import Logo from "../Logo";

const SideBar = () => {
  return (
    <div className='text-white h-16 lg:p-4 p-2 w-full bg-[#3326AE] rounded-full lg:md:w-20 flex justify-center lg:md:justify-normal lg:md:flex-col fixed left-0 right-0 bottom-0 lg:md:left-0 lg:md:top-0 lg:md:bottom-0'>
      <div className="hidden lg:md:block mt-5 w-full"><Logo/></div>
      <div className="flex lg:md:flex-col lg:md:items-center  lg:md:justify-center w-full">
        <ul className="w-full flex justify-around lg:flex-col lg:md:mt-[13rem] ">

       
          <li><a href="#" className="flex mb-8 text-2xl  bg-white text-[#FF0000]  hover:w-[3rem] p-3 transform lg:translate-x-8 translate-y-[-2rem] shadow-xl rounded-lg transition duration-500 ease-in-out "><TiHome /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] p-3 hover:transform  hover:lg:translate-x-8 hover:translate-y-[-2rem] hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><GrAnalytics /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] p-3 hover:transform hover:lg:translate-x-8 hover:translate-y-[-2rem] hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><IoCard /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25  hover:bg-white hover:text-[#FF0000] hover:opacity-100 hover:w-[3rem] p-3 hover:transform hover:lg:translate-x-8 hover:translate-y-[-2rem] hover:shadow-lg hover:rounded-lg transition duration-500 ease-in-out ease"><FaWallet /></a></li> 
          
        </ul>
      </div>
    </div>
  );
}

export default SideBar;


