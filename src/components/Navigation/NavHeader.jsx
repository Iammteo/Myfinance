
import SearchBar from "../SearchBar";
import { IoIosNotifications } from "react-icons/io";

const NavHeader = () => {
 return ( 
 <section className="  w-full">
  <div className="flex justify-evenly">
      <div className="flex font-semibold  ">
        <div className=" sm:md:lg:flex sm:md:lg:gap-8 hidden sm:md:block">

               <div className="">
                  <SearchBar/>
               </div>

               <a href="#">Feedback</a>
               <a href="#">Contact</a>
               <a href="#">Help</a>
         </div>      
      </div>
      
      <div className=" flex gap-5 "> 
        <a href="#"><IoIosNotifications /></a>
        <a href="#">P</a>
     </div>
    
   </div>

   
</section>
   
 );
}

export default NavHeader;
