import { useState, useEffect } from "react";

import Charts from "../components/Charts";
import NavHeader from "../components/Navigation/NavHeader";
import Statictics from "../components/Statictics";
import Trio from "../components/Trio";
import Container from "../components/Container";
import { VscGraph } from "react-icons/vsc";
import { CiCreditCard1 } from "react-icons/ci";

const Dashboard = () => {

   useEffect(() => {
      console.log(showComponent)
   })

   const [showComponent, setShowComponent] = useState(false);
   const [component1Active, setComponent1Active] = useState(false);
   const [component2Active, setComponent2Active] = useState(false);



  const handleToggleComponent1 = () => {
    setShowComponent(true);
   
  };

  const handleToggleComponent2 = () => {
    setShowComponent(false);
   
  };

    return( 
    <div className="w-full bg-white lg:md:rounded-l-3xl lg:md:ml-20 p-5" >
        
         <NavHeader/>

         <div className="lg:md:hidden flex justify-center p-3  w-full   ">
      <button
        className={`p-3 rounded-md shadow-lg w-[4rem] h-10 text-2xl ${
          component1Active ? 'text-white bg-blue-500 ' : 'text-blue-500  bg-white'
        }`}
        onClick={handleToggleComponent1} 
        
      >
        <VscGraph />
      </button>
      <button
        className={`p-3 rounded-md shadow-lg w-[4rem] h-10 text-2xl ${
          component2Active ? 'text-white bg-blue-500' : 'text-white  bg-blue-500'
        }`}
        onClick={handleToggleComponent2}
      >
        <CiCreditCard1 />
      </button>
    </div>
        

      <section className="flex flex-col lg:md:flex-row">
         {
            showComponent ? (
               <div className=" w-full sm:md:lg:w-2/3 h-full rounded-bl-3xl  bg-white  p-6 md:lg:hidden md:lg:p-4 sm:md:p-8">
                  <Trio/>  
                  <Statictics/>
                  <Charts/>
             </div>
            ) : (
               <div className="w-full h-[100vh] lg:bg-[#F5F5FC] bg-[#F7F8FF]  sm:md:lg:w-1/3 sm:md:lg:h-full md:lg:hidden sm:md:lg:block  sm:md:lg:p-6 ">
                   <Container/>
             </div>
            )
         }


         <div className=" hidden lg:md:block w-full sm:md:lg:w-2/3 h-full rounded-bl-3xl bg-white p-6 md:lg:p-4 sm:md:p-8">
               <Trio/>  
               <Statictics/>
               <Charts/>
         </div>
         <div className="hidden lg:md:block w-full h-[100vh] bg-[#F5F5FC] sm:md:lg:w-1/3 sm:md:lg:h-full sm:md:lg:block  sm:md:lg:p-6 ">
            <Container/>
         </div>
            
            
      </section>
         
   
    </div>
   )}
export default Dashboard;
