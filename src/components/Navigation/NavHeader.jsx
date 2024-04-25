// import SearchBar from "../SearchBar";


// const NavHeader = () => {

//  return <div className=" flex justify-center bg-blue-500 w-full ">
     

//      <div className=" flex space-x-10 gap-8 font-semibold">

//         <div><SearchBar/></div>
        
//         <a href="#">Feedback</a>
//         <a href="#">Contact</a>
//         <a href="#">Help</a>
//      </div>

//      <div className="flex  gap-5"> 
//         <a href="#">n </a>
//         <a href="#">P</a>
//      </div>

//      </div>
// }
// export default NavHeader;

import SearchBar from "../SearchBar";

const NavHeader = () => {
 return ( 
 <section className="  w-full">
  <div className="flex justify-evenly">
      <div className="flex  gap-8 font-semibold">
         <div className="hidden sm:block lg:block"><SearchBar/></div>
         <a href="#">Feedback</a>
         <a href="#">Contact</a>
         <a href="#">Help</a>
      </div>
      
      <div className=" flex gap-5"> 
        <a href="#">n</a>
        <a href="#">P</a>
     </div>
    
   </div>

   
</section>
   
 );
}

export default NavHeader;
