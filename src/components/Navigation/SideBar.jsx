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
          <li><a href="#" className="flex mb-8 text-2xl  opacity-25"><TiHome /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl opacity-25"><GrAnalytics /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl opacity-25"><IoCard /></a></li> 
          <li><a href="#" className="flex mb-8 text-2xl opacity-25"><FaWallet /></a></li> 
        </ul>
      </div>
    </div>
  );
}

export default SideBar;


