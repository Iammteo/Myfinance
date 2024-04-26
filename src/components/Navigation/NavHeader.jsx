import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Display from "../Display";

const NavHeader = () => {
 return ( 
 <section className="  w-full">
  <div className="flex justify-between px-8 py-5 ">
      <div className="flex font-semibold  ">
        <div className=" sm:md:lg:flex sm:md:lg:gap-8 hidden sm:md:block">

               <div className="">
                  <SearchBar/>
               </div>

               <a href="#">Feedback</a>
               <a href="#">Contact</a>
               <a href="#">Help</a>
         </div>   

         <div className=" md:lg:hidden ">
            <Logo/> 
         </div>  

      </div>
      
      <div className=" flex gap-5 "> 
        
         <a href="#" className="text-[#A49EDB] text-3xl relative">
            <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">1</div>
            <IoIosNotifications />
       </a>

        <a href="#" className="text-blue-500 text-2xl"><CgProfile /></a>
       
     </div>
    
   </div>
 
        <div className="md:lg:hidden ">
           <Display/>
         </div> 
</section>
   
 );
}

export default NavHeader;
