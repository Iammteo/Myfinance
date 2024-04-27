

const  Trio = () => {
return  (
<section className="flex justify-between p-4">
       
          <div className="flex p-4 justify-between lg:md:justify-around bg-[#FFFFFF] lg:md:w-full rounded-md shadow-lg lg:flex-row flex-col-reverse ">
               <img className="" src="/images/chart1.png" alt="first chart" />
               <div className=" flex flex-col justify-center   "> 
                    <p >VISITORS</p>
                    <p className="text-2xl font-bold">10,320</p>
               </div>
         </div>     
    

       <div  className="flex p-4 justify-between lg:justify-around bg-[#FFFFFF] lg:md:w-full rounded-md shadow-lg lg:flex-row flex-col-reverse">
           <img src="/images/chart2.png" alt="second chart" />
           <div className=" flex flex-col justify-center   "> 
                    <p >CUSTOMERS</p>
                    <p className="text-2xl font-bold">4,628</p>
           </div>
       </div>

       <div className=" flex p-4 justify-between lg:justify-around bg-[#FF392B] lg:md:w-full rounded-md shadow-lg lg:flex-row flex-col-reverse">
            <img src="/images/chart3.png" alt="third chart" />
            <div className=" flex flex-col justify-center   "> 
                    <p >ORDERS</p>
                    <p className="text-2xl font-bold">2,980</p>
           </div>
       </div>

</section>
)}
export default Trio;